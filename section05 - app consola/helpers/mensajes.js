require("colors");

const mostrarMenu = () => {
  return new Promise((resolve, reject) => {
    console.clear();
    console.log("=============================");
    console.log("   Seleccione una opción".green);
    console.log("=============================");
    console.log();

    console.log("1.".green, "Crear tarea");
    console.log("2.".green, "Listar tares");
    console.log("3.".green, "Listar tareas completadas");
    console.log("4.".green, "Listar tareas pendientes");
    console.log("5.".green, "Completar tarea(s)");
    console.log("6.".green, "Borrar tarea");
    console.log("0.".green, "Salir");
    console.log();

    // El módulo readline viene con nodejs por defecto. Nos permite
    // trabajar de manera más simple con la lectura y escritura de datos
    // por consola.
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Seleccione una opción: ", (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const pausa = () => {
  return new Promise((resolve, reject) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\nPresione ${"ENTER".green} para continuar...\n`, () => {
      readline.close();
      resolve();
    });
  });
};

module.exports = {
  mostrarMenu,
  pausa,
};
