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
      const seleccionado = resultado.find((l) => l.id === id);

      //  4. Buscar y asociar clima del lugar seleccionado

      //  5. Mostrar resultado
      console.log("\nInformación de la ciudad:\n".cyan);
      console.log("Ciudad:", seleccionado.nombre);
      console.log("Lat:", seleccionado.lat);
      console.log("Lng:", seleccionado.lng);
      console.log("Temperatura (°C):");
      console.log("Mínima (°C):");
      console.log("Máxima (°C):");
    } else {
      // Mostramos el historial de búsqueda
      console.log({ option });
    }

    await terminal.stop();
  }
};

main();
