// módulo para trabajar con el sistema de archivo del sistema
const fs = require("fs");

const rutaArchivo = "./db/data.json";

const guardarDB = (data) => {
  fs.writeFileSync(rutaArchivo, data);
};

const leerDB = () => {
  if (!fs.existsSync(rutaArchivo)) {
    return null;
  }
  const info = fs.readFileSync(rutaArchivo, { encoding: "utf-8" });
  const data = JSON.parse(info);
  return data;
};

module.exports = {
  guardarDB,
  leerDB,
};
