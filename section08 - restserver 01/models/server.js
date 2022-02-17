const express = require("express");

// Clase que representará nuestros servidores creados bajo express
class Server {
  constructor() {
    // Inicializamos un servidor express
    this.app = express();

    // Configuramos el puerto
    this.PORT = process.env.PORT || 3000;

    // Enlazamos los middlewares de nuestra aplicación
    this.middlewares();

    // Enlazando las rutas de nuestro servidor
    this.routes();
  }

  middlewares() {
    // Directorio público
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.get("/", (req, res) => {
      res.send("Hola Mundo!");
    });
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`Servirdor corriendo en el puerto ${this.PORT}`);
    });
  }
}

module.exports = Server;
