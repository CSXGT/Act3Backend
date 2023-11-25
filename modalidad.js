const express = require('express');
const router = express.Router();
const ModalidadController = require('../controllers/modalidad.c');
const { authenticateUser } = require('../tools/authMiddleware');
const { validarDatosModelo } = require('../tools/validation');

const ModalidadController = new ModalidadController();

router.get('/modalidad', authenticateUser, ModalidadController.listarModalidad);
router.get('/modalidad/:id', authenticateUser, ModalidadController.obtenerModalidadPorId);
router.post('/modalidad', authenticateUser, validarDatosModelo('modalidad'), ModalidadController.agregarModalidad);
router.put('/modalidad/:id', authenticateUser, validarDatosModelo('modalidad'), ModalidadController.editarModalidad);
router.delete('/modalidad/:id', authenticateUser, ModalidadController.eliminarModalidad);

module.exports = router;