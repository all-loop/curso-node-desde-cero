// importación de nuestros propios módulos y clases
const terminal = require("./helpers/inquirer");
const Busqueda = require("./models/busqueda");

const main = async () => {
  const busqueda = new Busqueda();

  while (true) {
    console.clear();

    const option = await terminal.menu();

    if (option === "0") {
      console.log("\nCerrando programa...");
      break;
    } else if (option === "1") {
      // Buscamos una ciudad
      // TODO:
      //  1. Mostrar mensaje
      const lugar = await terminal.readInput("Lugar a buscar: ");
      await busqueda.lugar(lugar);

      //  2. Buscar los lugares
      //  3. Seleccionar el lugar
      //  4. Clima
      //  5. Mostrar resultados
      console.log("\nInformación de la ciudad:\n".cyan);
      console.log("Ciudad:");
      console.log("Lat:");
      console.log("Lng:");
      console.log("Temperatura (°C):");
    } else {
      // Mostramos el historial de búsqueda
      console.log({ option });
    }

    await terminal.stop();
  }
};

main();
