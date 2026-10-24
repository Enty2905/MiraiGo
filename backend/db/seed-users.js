const { pool } = require('../src/config/db');
const { hashPassword } = require('../src/utils/password');

async function seedUsers() {
  const adminHash = await hashPassword('admin123');
  const studentHash = await hashPassword('student123');

  await pool.query(
    `INSERT INTO users (email, password_hash, full_name, display_name, role, status)
     VALUES ($1, $2, $3, $4, $5, $6)
     ON CONFLICT (email) DO UPDATE SET password_hash = EXCLUDED.password_hash`,
    ['admin@miraigo.com', adminHash, 'Admin User', 'Admin User', 'admin', 'active']
  );

  await pool.query(
    `INSERT INTO users (email, password_hash, full_name, display_name, role, status)
     VALUES ($1, $2, $3, $4, $5, $6)
     ON CONFLICT (email) DO UPDATE SET password_hash = EXCLUDED.password_hash`,
    ['student@miraigo.com', studentHash, 'Học viên MiraiGo', 'Học viên', 'student', 'active']
  );

  console.log('Successfully seeded default users: admin@miraigo.com and student@miraigo.com');
  await pool.end();
}

seedUsers().catch(err => {
  console.error('Failed to seed users:', err);
  process.exit(1);
});
