console.clear();

// módulo yargs: librería dedicada a facilitar la creación de herramientas dinámicas por consola.
const argv = require("./config/yargs");

// Importación de los módulos propios del proyecto
const crearTabla = require("./helpers/tabla-multiplicar");

// Desarrollo app
const { base, listar, hasta } = argv;
crearTabla(base, hasta, listar)
  .then((nombreArchivo) => console.log(`${nombreArchivo} creado`))
  .catch((error) => console.log(error.message));
