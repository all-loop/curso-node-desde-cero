// configuración de nuestras variables de entorno
require("dotenv").config();

// importación de nuestros propios módulos y clases
const terminal = require("./helpers/inquirer");
const Busqueda = require("./models/Busqueda");

const main = async () => {
  const busqueda = new Busqueda();

  while (true) {
    console.clear();

    const option = await terminal.menu();

    if (option === "0") {
      console.log("\nCerrando programa...");
      break;
    } else if (option === "1") {
      // Buscamos un lugar
      //  1. Solicitar lugar
      const lugar = await terminal.readInput("Lugar a buscar: ");

      //  2. Buscar los lugares (5 resultados) con mapbox
      const resultado = await busqueda.lugar(lugar);
      //  3. Seleccionar uno de los lugares resultantes
      const id = await terminal.seleccionar(resultado);
      if (id === "0") continue;

      const seleccionado = resultado.find((l) => l.id === id);
      busqueda.agregarHistorial(seleccionado.nombre);

      //  4. Buscar y asociar clima del lugar seleccionado
      const infoClima = await busqueda.climaLugar(seleccionado);

      //  5. Mostrar resultado
      console.clear();
      console.log("\nInformación de la ciudad:\n".cyan);
      console.log("Ciudad:", seleccionado.nombre);
      console.log("Lat:", seleccionado.lat);
      console.log("Lng:", seleccionado.lng);
      console.log("¿Cómo se encuentra el día?:", infoClima.description);
      console.log("Temperatura (°C):", infoClima.temp);
      console.log("Mínima (°C):", infoClima.temp_min);
      console.log("Máxima (°C):", infoClima.temp_max);
    } else {
      // Mostramos el historial de búsqueda
      console.clear();
      console.log("HISTORIAL DE BÚSQUEDA: \n".cyan);
      busqueda.historialCapitzalizado().forEach((lugar, i) => {
        const idx = `${i + 1}.`.green;
        console.log(`${idx} ${lugar}`);
      });
    }

    await terminal.stop();
  }
};

main();
