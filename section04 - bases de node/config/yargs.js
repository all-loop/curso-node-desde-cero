// módulo yargs: librería dedicada a facilitar la creación de herramientas dinámicas por consola.
const argv = require("yargs").options({
  b: {
    alias: "base",
    type: "number",
    demandOption: true,
    desc: "Es la base de la tabla de multiplicar",
  },
  l: {
    alias: "listar",
    type: "boolean",
    default: false,
    desc: "Muestra la tabla en consola",
  },
}).argv;

module.exports = argv;
