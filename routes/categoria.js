const express = require("express");
const router = express.Router();
const CategoriaController = require("../controllers/categoria.c");

// Mostrar categoria
router.get('/', function(req, res, next) {
  CategoriaController.Mostrar(res);
});

// Buscar un categoria según id
router.get("/:id", function(req, res, next) {
  CategoriaController.Buscar(res, req.params.id);
});

// Ingresar un categoria
router.post('/', function(req, res, next) {
  CategoriaController.Ingresar(res, req.body);
});

// Modificar un categoria
router.put("/:id", function(req, res, next) {
  CategoriaController.Modificar(res, req.params.id, req.body);
});

// Eliminar un categoria
router.delete("/:id", function(req, res, next) {
  CategoriaController.Eliminar(res, req.params.id);
});

module.exports = router;