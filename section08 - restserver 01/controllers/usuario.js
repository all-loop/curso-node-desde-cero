const usuarioGet = (req, res) => {
  const query = req.query;

  res.json({
    msg: "GET API",
    query,
  });
};

const usuarioPost = (req, res) => {
  const { nombre, edad } = req.body;

  res.status(201).json({
    msg: "POST API",
    nombre,
    edad,
  });
};

const usuarioPatch = (req, res) => {
  res.json({
    msg: "PATCH API",
  });
};

const usuarioPut = (req, res) => {
  const { id } = req.params;

  res.json({
    msg: "PUT API",
    id,
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
