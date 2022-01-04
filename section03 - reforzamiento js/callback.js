const getUserById = (id, callback) => {
  const usuario = {
    id,
    nombre: "GFU",
  };

  setTimeout(() => {
    callback(usuario);
  }, 1000);
};

getUserById(1, (usuario) => {
  console.log(usuario.id);
  console.log(usuario.nombre);
});
