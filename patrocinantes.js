const express = require('express');
const router = express.Router();
const PatrocinantesController = require('../controllers/patrocinantes.c');
const { authenticateUser } = require('../tools/authMiddleware');
const { validarDatosModelo } = require('../tools/validation');

const PatrocinantesController = new PatrocinantesController();

router.get('/patrocinantes', authenticateUser, PatrocinantesController.listarPatrocinantes);
router.get('/patrocinantes/:id', authenticateUser, PatrocinantesController.obtenerPatrocinantesPorId);
router.post('/patrocinantes', authenticateUser, validarDatosModelo('patrocinantes'), PatrocinantesController.agregarPatrocinantes);
router.put('/patrocinantes/:id', authenticateUser, validarDatosModelo('patrocinantes'), PatrocinantesController.editarPatrocinantes);
router.delete('/patrocinantes/:id', authenticateUser, PatrocinantesController.eliminarPatrocinantes);

module.exports = router;