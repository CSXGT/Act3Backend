const connection = require('../conexion');

class Patrocinantes {
  obtenerPatrocinantes() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM patrocinantes', (error, rows) => {
        if (error) {
          console.error('Error al obtener los patrocinantes:', error);
          return reject(error);
        }
        resolve(rows);
      });
    });
  }

  obtenerPatrocinantesPorId(id) {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM patrocinantes WHERE id = ?', [id], (error, rows) => {
        if (error) {
          console.error('Error al obtener el patrocinantes por ID:', error);
          return reject(error);
        }
          resolve(rows[0]);
      });
    });
  }

  agregarPatrocinante(equipo) {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO patrocinantes SET ?', [equipo], (error, result) => {
        if (error) {
          console.error('Error al agregar el patrocinantes:', error);
          return reject(error);
        }
        resolve(result);
      });
    });
  }

  editarPatrocinante(id, nuevaInformacion) {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE patrocinantes SET ? WHERE id = ?', [nuevaInformacion, id], (error, result) => {
        if (error) {
          console.error('Error al editar el patrocinantes:', error);
          return reject(error);
        }
        resolve(result);
      });
    });
  }

  eliminarPatrocinante(id) {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM patrocinantes WHERE id = ?', [id], (error, result) => {
        if (error) {
          console.error('Error al eliminar el equipo:', error);
          return reject(error);
        }
        resolve(result);
      });
    });
  }
}

const patrocinantes = new Patrocinantes();

module.exports = {patrocinantes};