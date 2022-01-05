// importando mis propios modulos
const crearTablaMultiplicar = require("./helpers/tabla-multiplicar");

console.clear();
const multiplo = 12;

crearTablaMultiplicar(multiplo)
  .then((archivo) => {
    console.log(`${archivo} creado`);
  })
  .catch((error) => {
    console.log("ERROR");
    console.log(error.message);
  });
