require("colors");

// importando nuestros propios módulos
const {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar,
  mostrarListadoCheckList,
} = require("./helpers/inquirer");
const Tareas = require("./models/tareas");
const archivoDB = require("./helpers/archivo");

console.clear();

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  // Preparando la lista con nuestras tareas
  const infoTareas = archivoDB.leerDB();
  if (infoTareas) {
    tareas.cargarTareas = infoTareas;
  }

  do {
    // despliegue del menú y devolución de la opción seleccionada
    opt = await inquirerMenu();

    switch (opt) {
      // opción 1 crear tarea
      case "1":
        const desc = await leerInput("Descripción de la tarea: ");
        tareas.crearTarea(desc);
        archivoDB.guardarDB(JSON.stringify(tareas.listadoArr));
        break;
      // opción 2 listar tareas
      case "2":
        tareas.listarTareas();
        break;
      // opcion 3 listar tareas completadas
      case "3":
        tareas.listarPorEstado(true);
        break;
      // opcion 4 listar tareas pendientes
      case "4":
        tareas.listarPorEstado(false);
        break;
      // opcion 5 completar tareas
      case "5":
        const ids = await mostrarListadoCheckList(tareas.listadoArr);
        tareas.cambiarEstados(ids);
        archivoDB.guardarDB(JSON.stringify(tareas.listadoArr));
        break;
      // opcion 6 borrar tarea
      case "6":
        const id = await listadoTareasBorrar(tareas.listadoArr);
        if (id !== "0") {
          const ok = await confirmar("¿Estás seguro de borrar la tarea?");
          if (ok) {
            tareas.borrarTarea(id);
            console.log("Tarea borrada");
            archivoDB.guardarDB(JSON.stringify(tareas.listadoArr));
          }
        }
        break;
    }

    await pausa();
  } while (opt !== "0");
};

main();
