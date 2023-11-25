const connection = require('../conexion');

class Modalidad {
  obtenerModalidad() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM modalidad', (error, rows) => {
        if (error) {
          console.error('Error al obtener los modalidad:', error);
          return reject(error);
        }
        resolve(rows);
      });
    });
  }

  obtenerModalidadPorId(id) {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM modalidad WHERE id = ?', [id], (error, rows) => {
        if (error) {
          console.error('Error al obtener el modalidad por ID:', error);
          return reject(error);
        }
          resolve(rows[0]);
      });
    });
  }

  agregarModalidad(modalidad) {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO modalidad SET ?', [modalidad], (error, result) => {
        if (error) {
          console.error('Error al agregar el modalidad:', error);
          return reject(error);
        }
        resolve(result);
      });
    });
  }

  editarModalidad(id, nuevaInformacion) {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE modalidad SET ? WHERE id = ?', [nuevaInformacion, id], (error, result) => {
        if (error) {
          console.error('Error al editar el modalidad:', error);
          return reject(error);
        }
        resolve(result);
      });
    });
  }

  eliminarModalidad(id) {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM modalidad WHERE id = ?', [id], (error, result) => {
        if (error) {
          console.error('Error al eliminar la modalidad:', error);
          return reject(error);
        }
        resolve(result);
      });
    });
  }
}

const modalidad = new Modalidad();

module.exports = { modalidad };