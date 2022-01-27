const http = require("http");

// Creación de un servidor con http
const server = http.createServer((req, res) => {
  res.write("Hola Mundo");
  res.end();
});

// Habilitamos y colocamos disponiblos nuestro servidor
server.listen(8080, () => {
  console.log("Servidor corriendo en el puerto 8080");
});
