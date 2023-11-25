const { equipo } = require('../models/equipos.m');

class EquipoController {
  async listarEquipo(req, res) {
    try {
      const listaEquipo = await categoria.obtenerEquipo();
      if (req.xhr) {

        res.json(listaEquipo);
      } else {

        res.render('equipo/listarEquipo', { listaEquipo });
      }  
    } catch (error) {
      console.error('Error al obtener la equipo:', error);
      res.status(500).json({ message: 'Ocurrió un error al obtener el equipo.' });
    }
  }

  async obtenerEquipoPorId(req, res) {
    try {
      const id = parseInt(req.params.id);
      const Equipo = await equipo.obtenerEquipoPorId(id); 
      if (req.xhr) {

        if (Equipo) {
          res.json(Equipo);
        } else {
          res.status(404).json({ message: 'Producto en la equipo no encontrado' });
        }
      } else {

        res.render('equipo/obtenerEquipoPorId', { Equipo });
      }
    } catch (error) {
      console.error('Error al obtener la equipo por ID:', error);
      res.status(500).json({ message: 'Ocurrió un error al obtener el equipo por ID.' });
    }
  }

  async agregarEquipo(req, res) {
  const jwt = req.body.jwt;

  delete req.body.jwt;
    try {
      
      const nuevaEquipo = { ...req.body };
      await equipo.agregarEquipo(nuevoEquipo);

      if (req.xhr) {

        res.status(201).json({ message: 'Equipo agregado exitosamente' });
      } else {

        res.render('equipo/nuevoEquipo', { message: 'Equipo agregado exitosamente' });
      }

    req.body.jwt = jwt;
    } catch (error) {
      console.error('Error al agregar la equipo:', error);
      if (req.xhr) {

        res.status(500).json({ message: 'Ocurrió un error al agregar el equipo.' });
      } else {

        res.render('equipo/nuevoEquipo', { message: 'Agregue una nueva equipo...' });
      }
    }
  }

  async editarEquipo(req, res) {
    try {
      const id = parseInt(req.params.id);
      const nuevaInformacion = req.body;
      await equipo.editarEquipo(id, nuevaInformacion);
      res.json({ message:'Equipo editado exitosamente' });
    } catch (error) {
      console.error('Error al editar la equipo:', error);
      res.status(500).json({ message: 'Ocurrió un error al editar el equipo.' });
    }
  }

  async eliminarEquipo(req, res) {
    try {
      const id = parseInt(req.params.id);
      await equipo.eliminarEquipo(id);
      res.json({ message:'Equipo eliminada exitosamente' });
    } catch (error) {
      console.error('Error al eliminar la equipo:', error);
      res.status(500).json({ message: 'Ocurrió un error al eliminar el equipo.' });
    }
  }
}

module.exports = EquipoController;