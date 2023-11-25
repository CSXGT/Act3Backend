const { modalidad } = require('../models/modalidad.m');

class ModalidadController {
  async listarModalidad(req, res) {
    try {
      const listaModalidad = await modalidad.obtenerModalidad();
      if (req.xhr) {

        res.json(listaModalidad);
      } else {

        res.render('modalidad/listarModalidad', { productosEnmodalidad: listaModalidad });
      }  
    } catch (error) {
      console.error('Error al obtener la modalidad:', error);
      res.status(500).json({ message: 'Ocurrió un error al obtener la modalidad.' });
    }
  }

  async obtenerModalidadPorId(req, res) {
    try {
      const id = parseInt(req.params.id);
      const Modalidad = await modalidad.obtenerModalidadPorId(id); 
      if (req.xhr) {

        if (Modalidad) {
          res.json(Modalidad);
        } else {
          res.status(404).json({ message: 'Producto en la modalidad no encontrado' });
        }
      } else {

        res.render('modalidad/obtenerModalidadPorId', { Modalidad });
      }
    } catch (error) {
      console.error('Error al obtener la modalidad por ID:', error);
      res.status(500).json({ message: 'Ocurrió un error al obtener la modalidad por ID.' });
    }
  }

  async agregarModalidad(req, res) {
  const jwt = req.body.jwt;

  delete req.body.jwt;
    try {
      
      const nuevaModalidad = { ...req.body };
      await modalidad.agregarModalidad(nuevaModalidad);

      if (req.xhr) {

        res.status(201).json({ message: 'Modalidad agregada exitosamente' });
      } else {

        res.render('modalidad/nuevaModalidad', { message: 'Modalidad agregada exitosamente' });
      }

    req.body.jwt = jwt;
    } catch (error) {
      console.error('Error al agregar la modalidad:', error);
      if (req.xhr) {

        res.status(500).json({ message: 'Ocurrió un error al agregar la modalidad.' });
      } else {

        res.render('modalidad/nuevaModalidad', { message: 'Agregue una nueva modalidad...' });
      }
    }
  }

  async editarModalidad(req, res) {
    try {
      const id = parseInt(req.params.id);
      const nuevaInformacion = req.body;
      await modalidad.editarModalidad(id, nuevaInformacion);
      res.json({ message:'Modalidad editada exitosamente' });
    } catch (error) {
      console.error('Error al editar la modalidad:', error);
      res.status(500).json({ message: 'Ocurrió un error al editar la modalidad.' });
    }
  }

  async eliminarModalidad(req, res) {
    try {
      const id = parseInt(req.params.id);
      await modalidad.eliminarModalidad(id);
      res.json({ message:'Modalidad eliminada exitosamente' });
    } catch (error) {
      console.error('Error al eliminar la modalidad:', error);
      res.status(500).json({ message: 'Ocurrió un error al eliminar la modalidad.' });
    }
  }
}

module.exports = ModalidadController;