// módulo para trabajar con el sistema de archivo del sistema
const fs = require("fs");

const guardarDB = (data) => {
  const rutaArchivo = "./db/data.json";

  fs.writeFileSync(rutaArchivo, data);
};

module.exports = {
  guardarDB,
};
