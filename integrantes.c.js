const { integrantes } = require('../models/integrantes.m');

class IntegrantesController {
  async listarIntegrantes(req, res) {
    try {
      const listaIntegrantes = await integrantes.obtenerIntegrantes();
      if (req.xhr) {

        res.json(listaIntegrantes);
      } else {

        res.render('integrantes/listarIntegrantes', { productosEncategoria: listaIntegrantes });
      }  
    } catch (error) {
      console.error('Error al obtener la integrantes:', error);
      res.status(500).json({ message: 'Ocurrió un error al obtener la integrantes.' });
    }
  }

  async obtenerIntegrantesPorId(req, res) {
    try {
      const id = parseInt(req.params.id);
      const Integrantes = await categoria.obtenerIntegrantesPorId(id); 
      if (req.xhr) {

        if (Integrantes) {
          res.json(Integrantes);
        } else {
          res.status(404).json({ message: 'Producto en la integrantes no encontrado' });
        }
      } else {

        res.render('integrantes/obtenerIntegrantesPorId', { Integrantes });
      }
    } catch (error) {
      console.error('Error al obtener la integrantes por ID:', error);
      res.status(500).json({ message: 'Ocurrió un error al obtener la integrantes por ID.' });
    }
  }

  async agregarIntegrantes(req, res) {
  const jwt = req.body.jwt;

  delete req.body.jwt;
    try {
      
      const nuevaIntegrantes = { ...req.body };
      await categoria.agregarCategoria(nuevaIntegrantes);

      if (req.xhr) {

        res.status(201).json({ message: 'integrantes agregada exitosamente' });
      } else {

        res.render('integrantes/nuevaIntegrantes', { message: 'integrantes agregada exitosamente' });
      }

    req.body.jwt = jwt;
    } catch (error) {
      console.error('Error al agregar la integrantes:', error);
      if (req.xhr) {

        res.status(500).json({ message: 'Ocurrió un error al agregar la integrantes.' });
      } else {

        res.render('integrantes/nuevaIntegrantes', { message: 'Agregue una nueva integrantes...' });
      }
    }
  }

  async editarIntegrantes(req, res) {
    try {
      const id = parseInt(req.params.id);
      const nuevaInformacion = req.body;
      await categoria.editarIntegrantes(id, nuevaInformacion);
      res.json({ message:'Integrantes editada exitosamente' });
    } catch (error) {
      console.error('Error al editar la integrantes:', error);
      res.status(500).json({ message: 'Ocurrió un error al editar la integrantes.' });
    }
  }

  async eliminarIntegrantes(req, res) {
    try {
      const id = parseInt(req.params.id);
      await integrantes.eliminarIntegrantes(id);
      res.json({ message:'Integrantes eliminada exitosamente' });
    } catch (error) {
      console.error('Error al eliminar la integrantes:', error);
      res.status(500).json({ message: 'Ocurrió un error al eliminar la integrantes.' });
    }
  }
}

module.exports = IntegrantesController;