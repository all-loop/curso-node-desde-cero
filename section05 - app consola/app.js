require("colors");

// importando nuestros propios módulos
const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

console.clear();

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  do {
    // despliegue del menú y devolución de la opción seleccionada
    opt = await inquirerMenu();

    switch (opt) {
      // opción 1 crear tarea
      case "1":
        const desc = await leerInput("Descripción de la tarea: ");
        tareas.crearTarea(desc);
        break;
      // opción 2 listar tareas
      case "2":
        console.log(tareas.listadoArr);
        break;
    }

    await pausa();
  } while (opt !== "0");
};

main();
