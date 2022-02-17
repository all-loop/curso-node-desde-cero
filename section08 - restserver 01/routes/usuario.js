const express = require("express");
const router = express.Router();

// Módulo que contiene la lógica asociada a la ruta del usuario
const usuarioController = require("../controllers/usuario");

router.get("/", usuarioController.usuarioGet);

router.patch("/", usuarioController.usuarioPatch);

router.post("/", usuarioController.usuarioPost);

router.put("/:id", usuarioController.usuarioPut);

router.delete("/", usuarioController.usuarioDelete);

module.exports = router;
