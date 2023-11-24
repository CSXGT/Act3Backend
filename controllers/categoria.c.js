const { categoria } = require('../models/categoria.m');

class CategoriaController {
  async listarCategoria(req, res) {
    try {
      const listaCategoria = await categoria.obtenerCategoria();
      if (req.xhr) {

        res.json(listaCategoria);
      } else {

        res.render('categoria/listarCategoria', { productosEncategoria: listaCategoria });
      }  
    } catch (error) {
      console.error('Error al obtener la categoria:', error);
      res.status(500).json({ message: 'Ocurrió un error al obtener la categoria.' });
    }
  }

  async obtenerCategoriaPorId(req, res) {
    try {
      const id = parseInt(req.params.id);
      const Categoria = await categoria.obtenerCategoriaPorId(id); 
      if (req.xhr) {

        if (Categoria) {
          res.json(Categoria);
        } else {
          res.status(404).json({ message: 'Producto en la categoria no encontrado' });
        }
      } else {

        res.render('categoria/obtenerCategoriaPorId', { Categoria });
      }
    } catch (error) {
      console.error('Error al obtener la categoria por ID:', error);
      res.status(500).json({ message: 'Ocurrió un error al obtener la categoria por ID.' });
    }
  }

  async agregarCategoria(req, res) {
  const jwt = req.body.jwt;

  delete req.body.jwt;
    try {
      
      const nuevaCategoria = { ...req.body };
      await categoria.agregarCategoria(nuevaCategoria);

      if (req.xhr) {

        res.status(201).json({ message: 'Categoria agregada exitosamente' });
      } else {

        res.render('categoria/nuevaCategoria', { message: 'Categoria agregada exitosamente' });
      }

    req.body.jwt = jwt;
    } catch (error) {
      console.error('Error al agregar la categoria:', error);
      if (req.xhr) {

        res.status(500).json({ message: 'Ocurrió un error al agregar la categoria.' });
      } else {

        res.render('categoria/nuevaCategoria', { message: 'Agregue una nueva categoria...' });
      }
    }
  }

  async editarCategoria(req, res) {
    try {
      const id = parseInt(req.params.id);
      const nuevaInformacion = req.body;
      await categoria.editarCategoria(id, nuevaInformacion);
      res.json({ message:'Categoria editada exitosamente' });
    } catch (error) {
      console.error('Error al editar la categoria:', error);
      res.status(500).json({ message: 'Ocurrió un error al editar la categoria.' });
    }
  }

  async eliminarCategoria(req, res) {
    try {
      const id = parseInt(req.params.id);
      await categoria.eliminarCategoria(id);
      res.json({ message:'Categoria eliminada exitosamente' });
    } catch (error) {
      console.error('Error al eliminar la categoria:', error);
      res.status(500).json({ message: 'Ocurrió un error al eliminar la categoria.' });
    }
  }
}

module.exports = CategoriaController;