const fs = require("fs");

const tablaMultiplicar = (multiplo, to = 10) => {
  let salida = "";
  for (let i = 1; i <= to; i++) {
    salida += `${multiplo} x ${i} = ${multiplo * i}\n`;
  }
  return salida;
};

const mensaje = (tabla, multiplo) => {
  console.log("======================================");
  console.log(` Tabla de Multiplicar del ${multiplo} `);
  console.log("======================================");
  console.log(tabla);
};

const crearTablaMultiplicar = (multiplo, verMensaje = true) => {
  const tabla = tablaMultiplicar(multiplo);
  if (verMensaje) {
    mensaje(tabla, multiplo);
  }

  return new Promise((resolve, reject) => {
    fs.writeFile(`tabla-${multiplo}.txt`, tabla, (error, res) => {
      if (error) {
        console.log(error.message);
        reject(error);
      }
      resolve(`tabla-${multiplo}.txt`);
    });
  });
};

module.exports = crearTablaMultiplicar;
