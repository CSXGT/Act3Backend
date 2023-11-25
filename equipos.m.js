const connection = require('../conexion');

class Equipos {
  obtenerEquipos() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM equipos', (error, rows) => {
        if (error) {
          console.error('Error al obtener los equipos:', error);
          return reject(error);
        }
        resolve(rows);
      });
    });
  }

  obtenerEquipoPorId(id) {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM equipos WHERE id = ?', [id], (error, rows) => {
        if (error) {
          console.error('Error al obtener el equipo por ID:', error);
          return reject(error);
        }
          resolve(rows[0]);
      });
    });
  }

  agregarEquipo(equipo) {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO equipos SET ?', [equipo], (error, result) => {
        if (error) {
          console.error('Error al agregar el equipo:', error);
          return reject(error);
        }
        resolve(result);
      });
    });
  }

  editarEquipo(id, nuevaInformacion) {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE equipos SET ? WHERE id = ?', [nuevaInformacion, id], (error, result) => {
        if (error) {
          console.error('Error al editar el equipo:', error);
          return reject(error);
        }
        resolve(result);
      });
    });
  }

  eliminarEquipo(id) {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM equipos WHERE id = ?', [id], (error, result) => {
        if (error) {
          console.error('Error al eliminar el equipo:', error);
          return reject(error);
        }
        resolve(result);
      });
    });
  }
}

const equipos = new Equipos();

module.exports = { equipos };