const express = require("express");
const cors = require("cors");

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
    // CORS
    this.app.use(cors());

    // Directorio público
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.get("/api", (req, res) => {
      res.json({
        msg: "GET API",
      });
    });

    this.app.patch("/api", (req, res) => {
      res.json({
        msg: "PATCH API",
      });
    });

    this.app.post("/api", (req, res) => {
      res.status(201).json({
        msg: "POST API",
      });
    });

    this.app.put("/api", (req, res) => {
      res.json({
        msg: "PUT API",
      });
    });

    this.app.delete("/api", (req, res) => {
      res.json({
        msg: "DELETE API",
      });
    });
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log(`Servirdor corriendo en el puerto ${this.PORT}`);
    });
  }
}

module.exports = Server;
