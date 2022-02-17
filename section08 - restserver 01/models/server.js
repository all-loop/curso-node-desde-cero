const express = require("express");
const cors = require("cors");

// Clase que representará nuestros servidores creados bajo express
class Server {
  constructor() {
    // Inicializamos un servidor express
    this.app = express();

    // Configuramos el puerto
    this.PORT = process.env.PORT || 3000;

    // Definición de nuestras rutas
    this.usuariosPath = "/api/usuarios";

    // Enlazamos los middlewares de nuestra aplicación
    this.middlewares();

    // Enlazando las rutas de nuestro servidor
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Directorio público
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuario"));
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`Servirdor corriendo en el puerto ${this.PORT}`);
    });
  }
}

module.exports = Server;
