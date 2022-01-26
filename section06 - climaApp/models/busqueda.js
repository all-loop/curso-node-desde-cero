const axios = require("axios");
class Busquedas {
  historial = ["Tegucigalpa", "La Serena", "Coquimbo", "Bogota", "San José"];

  constructor() {
    // TODO: lectura de la BD si existe
  }

  get paramsMapbox() {
    return {
      language: "es",
      access_token: process.env.MAPBOX_KEY,
      limit: 5,
    };
  }

  async lugar(lugar = "") {
    try {
      // petición http
      const instance = axios.create({
        baseURL: "https://api.mapbox.com",
        params: this.paramsMapbox,
      });
      const {
        data: { features },
      } = await instance.get(`/geocoding/v5/mapbox.places/${lugar}.json`);

      // regresar los lugares que coincidan con el lugar ingresado
      return features.map((lugar) => ({
        id: lugar.id,
        nombre: lugar.place_name,
        lng: lugar.center[0],
        lat: lugar.center[1],
      }));
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}

module.exports = Busquedas;
