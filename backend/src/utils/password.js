const crypto = require('node:crypto');
const { promisify } = require('node:util');

const scryptAsync = promisify(crypto.scrypt);

async function hashPassword(password) {
  if (typeof password !== 'string' || password.length === 0) {
    throw new TypeError('Password must be a non-empty string.');
  }
  const salt = crypto.randomBytes(16).toString('hex');
  const derivedKey = await scryptAsync(password, salt, 64);

  return `${salt}:${derivedKey.toString('hex')}`;
}

async function verifyPassword(password, hashedPassword) {
  if (
    typeof password !== 'string' || password.length === 0 ||
    typeof hashedPassword !== 'string' ||
    !/^[a-f0-9]{32}:[a-f0-9]{128}$/.test(hashedPassword)
  ) {
    return false;
  }

  const [salt, storedKey] = hashedPassword.split(':');
  const derivedKey = await scryptAsync(password, salt, 64);
  const storedBuffer = Buffer.from(storedKey, 'hex');

  if (storedBuffer.length !== derivedKey.length) {
    return false;
  }

  return crypto.timingSafeEqual(storedBuffer, derivedKey);
}

module.exports = {
  hashPassword,
  verifyPassword,
};
