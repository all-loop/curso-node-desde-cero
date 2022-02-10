// express es un módulo enfocado en la creación de servidores webs.
const express = require("express");

// Creamos una aplicación express (servidor)
const app = express();

const port = 8080;

// Configuraciones de nuestro servidor

// Conf: motor de plantillas
app.set("view engine", "hbs");

// Middleware: Son callbacks que vienen a complementar y modificar la cadena lógica, todo el proceso desde que se recibe una solicitud hasta que se le da respuesta, de nuestro servidor.

// Middleware para servir contenido estático
app.use(express.static("public"));

// Asociamos la ruta "/" de nuestro servidor a un callback y su lógica.
app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Goku",
    titulo: "curso de Node",
  });
});

app.get("/generic", (req, res) => {
  res.sendFile(__dirname + "/public/generic.html");
});

app.get("/elements", (req, res) => {
  res.sendFile(__dirname + "/public/elements.html");
});

// Capturamos toda petición que no haya coincido con una ruta de nuestro servidor.
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

// Definimos el puerto por el cuál recibiremos y escucharemos las solicitudes del cliente.
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
