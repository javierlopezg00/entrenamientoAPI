const connection = require('../../config/database');

/* OBTENER TODOS LOS USUARIOS */
const getAllUsers = () => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM users';
      connection.query(sql, (error, results) => {
        if (error) {
          console.error('Error al obtener los usuarios: ', error);
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  };
/* OBTENER UN USUARIO */
const getOneUser = (userId) => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM users WHERE id = ?';
      connection.query(sql, [userId], (error, results) => {
        if (error) {
          console.error('Error al obtener los usuarios: ', error);
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  };

  const login = async (user) => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM users WHERE id = ? and password = ?';
      connection.query(sql, [user.userId,user.password], (error, results) => {
        if (error) {
          console.error('Error al obtener los usuarios: ', error);
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  };


  
  const createUser = (user) => {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO users  (user, firstName, LastName, mail, password, birthday) VALUES (?, ?, ?, ?, ?, ?)`;
      connection.query(sql, [user.userN, user.firstName, user.lastName, user.mail, user.password, user.birthday], (error, results) => {
        if (error) {
          console.error('Error al crear el usuario: ', error);
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  };
  
  const updateUser = (user, id) => {
    return new Promise((resolve, reject) => {
      const sql = `UPDATE users SET user = ?, firstName = ?, LastName = ?, mail = ?, password = ?, birthday = ? WHERE id = ?`;
      connection.query(sql, [user.userN, user.firstName, user.lastName, user.mail, user.password, user.birthday, id], (error, results) => {
        if (error) {
          console.error('Error al actualizar el usuario: ', error);
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  };
  
const deleteUser = (userId) => {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM users WHERE id = ?';
      connection.query(sql, [userId], (error, results) => {
        if (error) {
          console.error('Error al obtener los usuarios: ', error);
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  };

module.exports = {
    getAllUsers,
    getOneUser,
    login,
    createUser,
    updateUser,
    deleteUser
}