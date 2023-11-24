const express = require('express');
const router = express.Router();
const CategoriaController = require('../controllers/categoria.c');
const { authenticateUser } = require('../tools/authMiddleware');
const { validarDatosModelo } = require('../tools/validation');

const CategoriaController = new CategoriaController();

router.get('/categoria', authenticateUser, CategoriaController.listarCategoria);
router.get('/categoria/:id', authenticateUser, CategoriaController.obtenerCategoriaPorId);
router.post('/categoria', authenticateUser, validarDatosModelo('categoria'), CategoriaController.agregarCategoria);
router.put('/categoria/:id', authenticateUser, validarDatosModelo('categoria'), CategoriaController.editarCategoria);
router.delete('/categoria/:id', authenticateUser, CategoriaController.eliminarCategoria);

module.exports = router;
