class Busquedas {
  historial = ["Tegucigalpa", "La Serena", "Coquimbo", "Bogota", "San José"];
  constructor() {
    // TODO: lectura de la BD si existe
  }

  async ciudad(lugar = "") {
    // petición http
    console.log(lugar);
    return []; // regresar los lugares que coincidan con el lugar ingresado
  }
}

module.exports = Busquedas;
