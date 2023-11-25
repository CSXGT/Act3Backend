const express = require('express');
const router = express.Router();
const IntegrantesController = require('../controllers/integrantes.c');
const { authenticateUser } = require('../tools/authMiddleware');
const { validarDatosModelo } = require('../tools/validation');

const IntegrantesController = new IntegrantesController();

router.get('/integrantes', authenticateUser, IntegrantesController.listarIntegrantes);
router.get('/integrantes/:id', authenticateUser, IntegrantesController.obtenerIntegrantesPorId);
router.post('/integrantes', authenticateUser, validarDatosModelo('integrantes'), IntegrantesController.agregarIntegrantes);
router.put('/integrantes/:id', authenticateUser, validarDatosModelo('integrantes'), IntegrantesController.editarIntegrantes);
router.delete('/integrantes/:id', authenticateUser, IntegrantesController.eliminarIntegrantes);

module.exports = router;