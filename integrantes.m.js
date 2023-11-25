const connection = require('../conexion');

class Integrantes {
  obtenerIntegrantes() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM integrantes', (error, rows) => {
        if (error) {
          console.error('Error al obtener los integrantes:', error);
          return reject(error);
        }
        resolve(rows);
      });
    });
  }

  obtenerIntegrantesPorId(id) {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM integrantes WHERE id = ?', [id], (error, rows) => {
        if (error) {
          console.error('Error al obtener el integrantes por ID:', error);
          return reject(error);
        }
          resolve(rows[0]);
      });
    });
  }

  agregarIntegrantes(integrantes) {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO integrantes SET ?', [integrantes], (error, result) => {
        if (error) {
          console.error('Error al agregar el integrantes:', error);
          return reject(error);
        }
        resolve(result);
      });
    });
  }

  editarIntegrantes(id, nuevaInformacion) {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE integrantes SET ? WHERE id = ?', [nuevaInformacion, id], (error, result) => {
        if (error) {
          console.error('Error al editar el integrantes:', error);
          return reject(error);
        }
        resolve(result);
      });
    });
  }

  eliminarIntegrantes(id) {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM integrantes WHERE id = ?', [id], (error, result) => {
        if (error) {
          console.error('Error al eliminar al integrante:', error);
          return reject(error);
        }
        resolve(result);
      });
    });
  }
}

const integrantes = new Integrantes();

module.exports = { integrantes };