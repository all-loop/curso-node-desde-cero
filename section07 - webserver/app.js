// Cargamos nuestras variables de entorno previamente configuradas en el archivo .env
require("dotenv").config();

// express es un módulo enfocado en la creación de servidores webs.
const express = require("express");
const hbs = require("hbs");

// Creamos una aplicación express (servidor)
const app = express();

const port = process.env.PORT || 8080;

// Configuraciones de nuestro servidor

// Conf: motor de plantillas
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials", function (err) {});

// Middleware: Son callbacks que vienen a complementar y modificar la cadena lógica, todo el proceso desde que se recibe una solicitud hasta que se le da respuesta, de nuestro servidor.

// Middleware para servir contenido estático
app.use(express.static("public"));

const argumentos = {
  nombre: "Fernando Herrera",
  titulo: "Curso de Node",
};

// Asociamos la ruta "/" de nuestro servidor a un callback y su lógica.
app.get("/", (req, res) => {
  res.render("home", argumentos);
});

app.get("/generic", (req, res) => {
  res.render("generic", argumentos);
});

app.get("/elements", (req, res) => {
  res.render("elements", argumentos);
});

// Capturamos toda petición que no haya coincido con una ruta de nuestro servidor.
app.get("*", (req, res) => {
  res.render("404", argumentos);
});

// Definimos el puerto por el cuál recibiremos y escucharemos las solicitudes del cliente.
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
