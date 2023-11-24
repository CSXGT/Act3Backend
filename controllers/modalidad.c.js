const db = require('../models/conexion')

class ModalidadController {
  // Mostrar modalidad
  Mostrar(res) {
    const sql = 'SELECT * FROM modalidad';

    db.query(sql, (err, result) => {
      if (err) {
        console.log('Error al obtener modalidad:', err);
        res.status(500).send('Error interno del servidor');
      } else {
        res.json(result);
      }
    });
  }
  
  // Buscar un modalidad según id
  Buscar(res, modalidad) {
    const id = +modalidad;
    const sql = 'SELECT * FROM modalidad WHERE ID_MODALIDAD = ?';

    db.query(sql, [id], (err, result) => {
      if (err) {
        console.log('Error al buscar modalidad por ID:', err);
        res.status(500).send('Error interno del servidor');
      } else {
        res.json(result);
      }
    });
  }

    // Ingresar una modalidad
    Ingresar(res, modalidad) {
      const sql = 'INSERT INTO modalidad SET ?';
  
      db.query(sql, modalidad, (err, result) => {
        if (err) {
          console.log('Error al ingresar modalidad:', err);
          res.status(500).send('Error interno del servidor');
        } else {
          res.send(result);
        }
      });
    }

      // Modificar un modalidad
  Modificar(res, modalidad, newmodalidad) {
    const id = +modalidad;
    const sql = 'UPDATE modalidad SET ? WHERE ID_MODALIDAD = ?';

    db.query(sql, [newmodalidad, id], (err, result) => {
      if (err) {
        console.log('Error al modificar modalidad:', err);
        res.status(500).send('Error interno del servidor');
      } else {
        res.send(result);
      }
    });
  }

    // Eliminar un modalidad
    Eliminar(res, modalidad) {
      const id = +modalidad;
      const sql = 'DELETE FROM modalidad WHERE ID_MODALIDAD = ?';
  
      db.query(sql, [id], (err, result) => {
        if (err) {
          console.log('Error al eliminar modalidad:', err);
          res.status(500).send('Error interno del servidor');
        } else {
          res.send(result);
        }
      });
    }
}

const controller = new ModalidadController();
module.exports = controller;