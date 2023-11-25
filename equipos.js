const express = require('express');
const router = express.Router();
const EquipoController = require('../controllers/equipos.c');
const { authenticateUser } = require('../tools/authMiddleware');
const { validarDatosModelo } = require('../tools/validation');

const EquipoController = new EquipoController();

router.get('/equipos', authenticateUser, EquipoController.listarEquipo);
router.get('/equipos/:id', authenticateUser, EquipoController.obtenerEquipoPorId);
router.post('/equipos', authenticateUser, validarDatosModelo('equipo'), EquipoController.agregarEquipo);
router.put('/equipos/:id', authenticateUser, validarDatosModelo('equipo'), EquipoController.editarEquipo);
router.delete('/equipos/:id', authenticateUser, EquipoController.eliminarEquipo);

module.exports = router;