const db = require('../models/conexion')

class CategoriaController {
  // Mostrar categoria
  Mostrar(res) {
    const sql = 'SELECT * FROM categoria';

    db.query(sql, (err, result) => {
      if (err) {
        console.log('Error al obtener categoria:', err);
        res.status(500).send('Error interno del servidor');
      } else {
        res.json(result);
      }
    });
  }

  // Buscar un categoria según id
  Buscar(res, categoria) {
    const id = +categoria;
    const sql = 'SELECT * FROM categoria WHERE ID_CATEGORIA = ?';

    db.query(sql, [id], (err, result) => {
      if (err) {
        console.log('Error al buscar categoria por ID:', err);
        res.status(500).send('Error interno del servidor');
      } else {
        res.json(result);
      }
    });
  }

    // Ingresar una categoria
    Ingresar(res, categoria) {
      const sql = 'INSERT INTO categoria SET ?';
  
      db.query(sql, categoria, (err, result) => {
        if (err) {
          console.log('Error al ingresar categoria:', err);
          res.status(500).send('Error interno del servidor');
        } else {
          res.send(result);
        }
      });
    }

  // Modificar un categoria
  Modificar(res, categoria, newcategoria) {
    const id = +categoria;
    const sql = 'UPDATE categoria SET ? WHERE ID_CATEGORIA = ?';

    db.query(sql, [newcategoria, id], (err, result) => {
      if (err) {
        console.log('Error al modificar categoria:', err);
        res.status(500).send('Error interno del servidor');
      } else {
        res.send(result);
      }
    });
  }

    // Eliminar un categoria
    Eliminar(res, categoria) {
      const id = +categoria;
      const sql = 'DELETE FROM categoria WHERE ID_CATEGORIA = ?';
  
      db.query(sql, [id], (err, result) => {
        if (err) {
          console.log('Error al eliminar categoria:', err);
          res.status(500).send('Error interno del servidor');
        } else {
          res.send(result);
        }
      });
    }
}

const controller = new CategoriaController();
module.exports = controller;