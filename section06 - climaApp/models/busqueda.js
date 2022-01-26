const axios = require("axios");
class Busquedas {
  historial = ["Tegucigalpa", "La Serena", "Coquimbo", "Bogota", "San José"];
  constructor() {
    // TODO: lectura de la BD si existe
  }

  async lugar(lugar = "") {
    try {
      // petición http
      // console.log(lugar);
      const { data } = await axios.get("https://reqres.in/api/users?page=2");
      console.log(data);
      return []; // regresar los lugares que coincidan con el lugar ingresado
    } catch (error) {
      return [];
    }
  }
}

module.exports = Busquedas;
