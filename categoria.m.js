const connection = require('./conexion');

class Categoria {
  obtenerCategoria() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM categoria', (error, rows) => {
        if (error) {
          console.error('Error al obtener la categoria:', error);
          return reject(error);
        }
        resolve(rows);
      });
    });
  }

  obtenerCategoriaPorId(id) {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM categoria WHERE id = ?', [id], (error, rows) => {
        if (error) {
          console.error('Error al obtener la categoria por ID:', error);
          return reject(error);
        }
        resolve(rows[0]);
      });
    });
  }

  agregarCategoria(producto) {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO categoria SET ?', [producto], (error, result) => {
        if (error) {
          console.error('Error al agregar la categoria:', error);
          return reject(error);
        }
        resolve(result);
      });
    });
  }

  editarCategoria(id, nuevaInformacion) {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE categoria SET ? WHERE id = ?', [nuevaInformacion, id], (error, result) => {
        if (error) {
          console.error('Error al editar la categoria:', error);
          return reject(error);
        }
        resolve(result);
      });
    });
  }

  eliminarCategoria(id) {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM categoria WHERE id = ?', [id], (error, result) => {
        if (error) {
          console.error('Error al eliminar la categoria:', error);
          return reject(error);
        }
        resolve(result);
      });
    });
  }
}

const Categoria = new Categoria();

module.exports = { Categoria };