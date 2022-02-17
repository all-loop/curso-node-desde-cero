const { response, request } = require("express");

const usuarioGet = (req, res) => {
  res.json({
    msg: "GET API",
  });
};

const usuarioPost = (req, res) => {
  res.status(201).json({
    msg: "POST API",
  });
};

const usuarioPatch = (req, res) => {
  res.json({
    msg: "PATCH API",
  });
};

const usuarioPut = (req, res) => {
  res.json({
    msg: "PUT API",
  });
};

const usuarioDelete = (req, res) => {
  res.json({
    msg: "DELETE API",
  });
};

module.exports = {
  usuarioGet,
  usuarioPost,
  usuarioPatch,
  usuarioPut,
  usuarioDelete,
};
