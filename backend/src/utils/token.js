const crypto = require('node:crypto');

const TOKEN_TTL_MS = 7 * 24 * 60 * 60 * 1000;

function getTokenSecret() {
  const secret = process.env.AUTH_SECRET?.trim();
  if (secret) return secret;
  if (process.env.NODE_ENV === 'production') {
    throw new Error('AUTH_SECRET must be configured in production.');
  }
  return 'dev-auth-secret';
}

function createAccessToken(user) {
  const now = Date.now();
  const payload = {
    sub: user.id,
    email: user.email,
    role: user.role,
    iat: now,
    exp: now + TOKEN_TTL_MS,
  };

  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const signature = crypto
    .createHmac('sha256', getTokenSecret())
    .update(encodedPayload)
    .digest('base64url');

  return `${encodedPayload}.${signature}`;
}

function verifyAccessToken(token) {
  if (typeof token !== 'string') {
    return null;
  }

  const parts = token.split('.');
  if (parts.length !== 2) return null;
  const [encodedPayload, signature] = parts;
  if (!/^[A-Za-z0-9_-]+$/.test(encodedPayload) || !/^[A-Za-z0-9_-]{43}$/.test(signature)) {
    return null;
  }

  const expectedSignature = crypto
    .createHmac('sha256', getTokenSecret())
    .update(encodedPayload)
    .digest('base64url');

  const actualSignatureBuffer = Buffer.from(signature);
  const expectedSignatureBuffer = Buffer.from(expectedSignature);

  if (actualSignatureBuffer.length !== expectedSignatureBuffer.length) {
    return null;
  }

  if (!crypto.timingSafeEqual(actualSignatureBuffer, expectedSignatureBuffer)) {
    return null;
  }

  try {
    const payloadText = Buffer.from(encodedPayload, 'base64url').toString('utf8');
    const payload = JSON.parse(payloadText);

    if (
      !payload || typeof payload !== 'object' || Array.isArray(payload) ||
      !/^[1-9]\d*$/.test(String(payload.sub)) ||
      typeof payload.email !== 'string' || !payload.email.trim() ||
      !['student', 'teacher', 'admin'].includes(payload.role) ||
      !Number.isFinite(payload.iat) || !Number.isFinite(payload.exp) ||
      payload.iat > Date.now() || payload.exp <= payload.iat || payload.exp <= Date.now()
    ) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

module.exports = {
  createAccessToken,
  verifyAccessToken,
};
