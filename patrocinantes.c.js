const { patrocinantes } = require('../models/patrocinantes.m');

class PatrocinantesController {
  async listarpatrocinantes(req, res) {
    try {
      const listaP = await patrocinantes.obtenerPatrocinantes();
      if (req.xhr) {

        res.json(listaPatrocinantes);
      } else {

        res.render('patrocinantes/listarPatrocinantes', {listapatrocinantes });
      }  
    } catch (error) {
      console.error('Error al obtener la patrocinantes:', error);
      res.status(500).json({ message: 'Ocurrió un error al obtener la patrocinantes.' });
    }
  }

  async obtenerPatrocinantesPorId(req, res) {
    try {
      const id = parseInt(req.params.id);
      const Patrocinantes = await patrocinantes.obtenerPatrocinantesPorId(id); 
      if (req.xhr) {

        if (Patrocinantes) {
          res.json(Patrocinantes);
        } else {
          res.status(404).json({ message: 'Producto en la patrocinantes no encontrado' });
        }
      } else {

        res.render('patrocinantes/obtenerPatrocinantesPorId', { Patrocinantes });
      }
    } catch (error) {
      console.error('Error al obtener la patrocinantes por ID:', error);
      res.status(500).json({ message: 'Ocurrió un error al obtener la patrocinantes por ID.' });
    }
  }

  async agregarPatrocinantes(req, res) {
  const jwt = req.body.jwt;

  delete req.body.jwt;
    try {
      
      const nuevaPatrocinantes = { ...req.body };
      await patrocinantes.agregarPatrocinantes(nuevaPatrocinantes);

      if (req.xhr) {

        res.status(201).json({ message: 'Patrocinantes agregada exitosamente' });
      } else {

        res.render('patrocinantes/nuevaPatrocinantes', { message: 'Patrocinantes agregada exitosamente' });
      }

    req.body.jwt = jwt;
    } catch (error) {
      console.error('Error al agregar la patrocinantes:', error);
      if (req.xhr) {

        res.status(500).json({ message: 'Ocurrió un error al agregar la patrocinantes.' });
      } else {

        res.render('patrocinantes/nuevaPatrocinantes', { message: 'Agregue una nueva patrocinantes...' });
      }
    }
  }

  async editarPatrocinantes(req, res) {
    try {
      const id = parseInt(req.params.id);
      const nuevaInformacion = req.body;
      await catrocinantes.editarPatrocinantes(id, nuevaInformacion);
      res.json({ message:'Patrocinantes editada exitosamente' });
    } catch (error) {
      console.error('Error al editar la patrocinantes:', error);
      res.status(500).json({ message: 'Ocurrió un error al editar la patrocinantes.' });
    }
  }

  async eliminarPatrocinantes(req, res) {
    try {
      const id = parseInt(req.params.id);
      await patrocinantes.eliminarPatrocinantes(id);
      res.json({ message:'Patrocinantes eliminada exitosamente' });
    } catch (error) {
      console.error('Error al eliminar la Patrocinantes:', error);
      res.status(500).json({ message: 'Ocurrió un error al eliminar la Patrocinantes.' });
    }
  }
}

module.exports = PatrocinantesController;