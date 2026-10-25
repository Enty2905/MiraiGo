const { pool } = require('../config/db');

async function findUserByEmail(email) {
  const query = `
    SELECT
      id,
      email,
      password_hash AS "passwordHash",
      full_name AS "fullName",
      display_name AS "displayName",
      role,
      status,
      timezone
    FROM users
    WHERE LOWER(email) = LOWER($1)
    LIMIT 1
  `;

  const { rows } = await pool.query(query, [email]);
  return rows[0] || null;
}

async function createUser({ email, passwordHash, fullName }) {
  const query = `
    INSERT INTO users (
      email,
      password_hash,
      full_name,
      display_name,
      role,
      status,
      timezone,
      created_at,
      updated_at
    )
    VALUES ($1, $2, $3, $4, 'student', 'active', 'Asia/Ho_Chi_Minh', NOW(), NOW())
    RETURNING
      id,
      email,
      full_name AS "fullName",
      display_name AS "displayName",
      role,
      status,
      timezone
  `;

  const values = [email, passwordHash, fullName, fullName];
  const { rows } = await pool.query(query, values);

  return rows[0];
}

async function findUserById(userId) {
  const query = `
    SELECT
      id,
      email,
      full_name AS "fullName",
      display_name AS "displayName",
      role,
      status,
      timezone,
      current_level AS "currentLevel",
      avatar_url AS "avatarUrl",
      created_at AS "createdAt",
      last_login_at AS "lastLoginAt"
    FROM users
    WHERE id = $1
    LIMIT 1
  `;

  const { rows } = await pool.query(query, [userId]);
  return rows[0] || null;
}

async function findUserWithPasswordById(userId) {
  const query = `
    SELECT
      id,
      email,
      password_hash AS "passwordHash",
      full_name AS "fullName",
      role,
      status
    FROM users
    WHERE id = $1
    LIMIT 1
  `;

  const { rows } = await pool.query(query, [userId]);
  return rows[0] || null;
}

async function updateUserPassword(userId, newPasswordHash) {
  const query = `
    UPDATE users
    SET password_hash = $2, updated_at = NOW()
    WHERE id = $1
    RETURNING id, email, full_name AS "fullName"
  `;

  const { rows } = await pool.query(query, [userId, newPasswordHash]);
  return rows[0] || null;
}

async function updateUserProfile(userId, { fullName, displayName, avatarUrl, currentLevel, timezone } = {}) {
  const fields = [];
  const values = [userId];
  let idx = 2;

  if (fullName !== undefined) {
    fields.push(`full_name = $${idx++}`);
    values.push(fullName);
  }
  if (displayName !== undefined) {
    fields.push(`display_name = $${idx++}`);
    values.push(displayName);
  }
  if (avatarUrl !== undefined) {
    fields.push(`avatar_url = $${idx++}`);
    values.push(avatarUrl);
  }
  if (currentLevel !== undefined) {
    fields.push(`current_level = $${idx++}`);
    values.push(currentLevel);
  }
  if (timezone !== undefined) {
    fields.push(`timezone = $${idx++}`);
    values.push(timezone);
  }

  if (fields.length === 0) {
    return findUserById(userId);
  }

  fields.push('updated_at = NOW()');

  const query = `
    UPDATE users
    SET ${fields.join(', ')}
    WHERE id = $1
    RETURNING
      id,
      email,
      full_name AS "fullName",
      display_name AS "displayName",
      role,
      status,
      timezone,
      current_level AS "currentLevel",
      avatar_url AS "avatarUrl",
      created_at AS "createdAt",
      last_login_at AS "lastLoginAt"
  `;

  const { rows } = await pool.query(query, values);
  return rows[0] || null;
}

module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
  findUserWithPasswordById,
  updateUserPassword,
  updateUserProfile,
};

