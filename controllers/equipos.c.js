const db = require('../models/conexion')

class EquiposController {
  // Mostrar Equipos
  Mostrar(res) {
    const sql = 'SELECT * FROM equipos';

    db.query(sql, (err, result) => {
      if (err) {
        console.log('Error al obtener equipos:', err);
        res.status(500).send('Error interno del servidor');
      } else {
        res.json(result);
      }
    });
  }

    // Buscar un Equipo según id
    Buscar(res, equipo) {
      const id = +equipo;
      const sql = 'SELECT * FROM equipos WHERE ID_EQUIPO = ?';
  
      db.query(sql, [id], (err, result) => {
        if (err) {
          console.log('Error al buscar equipo por ID:', err);
          res.status(500).send('Error interno del servidor');
        } else {
          res.json(result);
        }
      });
    }

      // Ingresar un Equipo
  Ingresar(res, equipo) {
    const sql = 'INSERT INTO equipos SET ?';

    db.query(sql, equipo, (err, result) => {
      if (err) {
        console.log('Error al ingresar equipo:', err);
        res.status(500).send('Error interno del servidor');
      } else {
        res.send(result);
      }
    });
  }

    // Modificar un Equipo
    Modificar(res, equipo, newEquipo) {
      const id = +equipo;
      const sql = 'UPDATE equipos SET ? WHERE ID_EQUIPO = ?';
  
      db.query(sql, [newEquipo, id], (err, result) => {
        if (err) {
          console.log('Error al modificar equipo:', err);
          res.status(500).send('Error interno del servidor');
        } else {
          res.send(result);
        }
      });
    }

      // Eliminar un Equipo
  Eliminar(res, equipo) {
    const id = +equipo;
    const sql = 'DELETE FROM equipos WHERE ID_EQUIPO = ?';

    db.query(sql, [id], (err, result) => {
      if (err) {
        console.log('Error al eliminar equipo:', err);
        res.status(500).send('Error interno del servidor');
      } else {
        res.send(result);
      }
    });
  }
}

const controller = new EquiposController();
module.exports = controller;