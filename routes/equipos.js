const express = require("express");
const router = express.Router();
const EquiposController = require("../controllers/equipos.c");

// Mostrar Equipos
router.get('/', function(req, res, next) {
  EquiposController.Mostrar(res);
});

// Buscar un Equipo según id
router.get("/:id", function(req, res, next) {
  EquiposController.Buscar(res, req.params.id);
});

// Ingresar un Equipo
router.post('/', function(req, res, next) {
  EquiposController.Ingresar(res, req.body);
});

// Modificar un Equipo
router.put("/:id", function(req, res, next) {
  EquiposController.Modificar(res, req.params.id, req.body);
});

// Eliminar un Equipo
router.delete("/:id", function(req, res, next) {
  EquiposController.Eliminar(res, req.params.id);
});

module.exports = router;