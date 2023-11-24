const db = require('../models/conexion')

class PatrocinantesController {
  // Mostrar patrocinantes
  Mostrar(res) {
    const sql = 'SELECT * FROM patrocinantes';

    db.query(sql, (err, result) => {
      if (err) {s
        console.log('Error al obtener patrocinantes:', err);
        res.status(500).send('Error interno del servidor');
      } else {
        res.json(result);
      }
    });
  }

    // Buscar un patrocinantes según id
    Buscar(res, patrocinantes) {
      const id = +patrocinantes;
      const sql = 'SELECT * FROM patrocinantes WHERE ID_PATROCINANTE = ?';
  
      db.query(sql, [id], (err, result) => {
        if (err) {
          console.log('Error al buscar patrocinantes por ID:', err);
          res.status(500).send('Error interno del servidor');
        } else {
          res.json(result);
        }
      });
    }

      // Ingresar una patrocinantes
  Ingresar(res, patrocinantes) {
    const sql = 'INSERT INTO patrocinantes SET ?';

    db.query(sql, patrocinantes, (err, result) => {
      if (err) {
        console.log('Error al ingresar patrocinantes:', err);
        res.status(500).send('Error interno del servidor');
      } else {
        res.send(result);
      }
    });
  }

    // Modificar un patrocinantes
    Modificar(res, patrocinantes, newpatrocinantes) {
      const id = +patrocinantes;
      const sql = 'UPDATE patrocinantes SET ? WHERE ID_PATROCINANTE = ?';
  
      db.query(sql, [newpatrocinantes, id], (err, result) => {
        if (err) {
          console.log('Error al modificar patrocinantes:', err);
          res.status(500).send('Error interno del servidor');
        } else {
          res.send(result);
        }
      });
    }

    // Eliminar un patrocinantes
  Eliminar(res, patrocinantes) {
    const id = +patrocinantes;
    const sql = 'DELETE FROM patrocinantes WHERE ID_PATROCINANTE = ?';

    db.query(sql, [id], (err, result) => {
      if (err) {
        console.log('Error al eliminar patrocinantes:', err);
        res.status(500).send('Error interno del servidor');
      } else {
        res.send(result);
      }
    });
  }
}

const controller = new PatrocinantesController();
module.exports = controller;