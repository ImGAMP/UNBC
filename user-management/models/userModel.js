const pool = require('../config/db');
const bcrypt = require('bcryptjs');

const User = {
  create: async (user) => {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const result = await pool.query(
      'INSERT INTO users (nombre, apellido, correo, telefono, password) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [user.nombre, user.apellido, user.correo, user.telefono, hashedPassword]
    );
    return result.rows[0];
  },

  findByEmail: async (email) => {
    const result = await pool.query('SELECT * FROM users WHERE correo = $1', [email]);
    return result.rows[0];
  },

  findAll: async () => {
    const result = await pool.query('SELECT * FROM users');
    return result.rows;
  },

  update: async (id, user) => {
    const result = await pool.query(
      'UPDATE users SET nombre = $1, apellido = $2, correo = $3, telefono = $4 WHERE id = $5 RETURNING *',
      [user.nombre, user.apellido, user.correo, user.telefono, id]
    );
    return result.rows[0];
  },

  delete: async (id) => {
    await pool.query('DELETE FROM users WHERE id = $1', [id]);
  }
};

module.exports = User;

