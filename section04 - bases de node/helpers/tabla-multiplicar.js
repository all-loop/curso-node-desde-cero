const fs = require("fs");
const colors = require("colors");

const tablaMultiplicar = (multiplo, to = 10) => {
  let salida = "";
  let consola = "";
  for (let i = 1; i <= to; i++) {
    salida += `${multiplo} x ${i} = ${multiplo * i}\n`;
    consola += `${multiplo} ${"x".green} ${i} ${"=".green} ${multiplo * i}\n`;
  }
  return { salida, consola };
};

const mensaje = (tabla, multiplo) => {
  console.log("=======================".green);
  console.log("   Tabla del: ".green, colors.cyan(multiplo));
  console.log("=======================".green);
  console.log(tabla);
};

const crearTablaMultiplicar = (multiplo, to = 10, verMensaje = true) => {
  const { salida, consola } = tablaMultiplicar(multiplo, to);
  if (verMensaje) {
    mensaje(consola, multiplo);
  }

  return new Promise((resolve, reject) => {
    fs.writeFile(`tabla-${multiplo}.txt`, salida, (error, res) => {
      if (error) {
        console.log(error.message);
        reject(error);
      }
      resolve(`tabla-${multiplo}.txt`);
    });
  });
};

module.exports = crearTablaMultiplicar;
