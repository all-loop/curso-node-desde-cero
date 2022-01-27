const fs = require("fs");
const axios = require("axios");
require("colors");

class Busquedas {
  historial = [];
  dbPath = "./db/database.json";

  constructor() {
    // TODO: lectura de la BD si existe
    this.leerBD();
  }

  get paramsMapbox() {
    return {
      language: "es",
      access_token: process.env.MAPBOX_KEY,
      limit: 5,
    };
  }

  get paramsWeather() {
    return {
      lang: "es",
      appid: process.env.OPENWEATHER_KEY,
      units: "metric",
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

  async climaLugar({ lat, lng }) {
    try {
      // Preparación de la consulta
      const instance = axios.create({
        baseURL: "https://api.openweathermap.org",
        params: { ...this.paramsWeather, lat, lon: lng },
      });

      // Ejecutamos la consulta y extraemos los datos incluidos en data
      const { data } = await instance.get("/data/2.5/weather");

      // Retiramos unicamente aquellos datos que nos son de interés
      const {
        main: { temp, temp_min, temp_max },
        weather,
      } = data;
      const { description } = weather[0];

      // Devolvemos el resultado como un objeto
      return {
        temp,
        temp_min,
        temp_max,
        description,
      };
    } catch (error) {
      console.log(error.message);
    }
  }

  agregarHistorial(lugar = "") {
    //TODO:prevenir duplicidad
    if (this.historial.includes(lugar.toLowerCase())) return;

    this.historial = this.historial.splice(0, 5);
    this.historial.unshift(lugar.toLowerCase());
    // persistencia de los datos
    this.guardarBD();
  }

  guardarBD() {
    const payload = {
      historial: this.historial,
    };
    fs.writeFileSync(this.dbPath, JSON.stringify(payload));
  }

  leerBD() {
    if (!fs.existsSync(this.dbPath)) return;

    const info = fs.readFileSync(this.dbPath, { encoding: "utf-8" });
    const { historial } = JSON.parse(info);
    this.historial = historial;
  }

  historialCapitzalizado() {
    return this.historial.map((lugar) => {
      let palabras = lugar.split(" ");
      palabras = palabras.map((w) => w[0].toUpperCase() + w.substr(1));
      return palabras.join(" ");
    });
  }
}

module.exports = Busquedas;
