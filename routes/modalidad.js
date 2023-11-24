const express = require("express");
const router = express.Router();
const ModalidadController = require("../controllers/modalidad.c");

// Mostrar modalidad
router.get('/', function(req, res, next) {
  ModalidadController.Mostrar(res);
});

// Buscar un modalidad según id
router.get("/:id", function(req, res, next) {
  ModalidadController.Buscar(res, req.params.id);
});

// Ingresar un modalidad
router.post('/', function(req, res, next) {
  ModalidadController.Ingresar(res, req.body);
});

// Modificar un modalidad
router.put("/:id", function(req, res, next) {
  ModalidadController.Modificar(res, req.params.id, req.body);
});

// Eliminar un modalidad
router.delete("/:id", function(req, res, next) {
  ModalidadController.Eliminar(res, req.params.id);
});


module.exports = router;