const inquirer = require("inquirer");
require("colors");

// Construyendo el menú
const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "¿Qué desea hacer?",
    choices: [
      {
        value: "1",
        name: "1. Crear tarea",
      },
      {
        value: "2",
        name: "2. Listar tareas",
      },
      {
        value: "3",
        name: "3. Listar tareas completadas",
      },
      {
        value: "4",
        name: "4. Listar tareas pendientes",
      },
      {
        value: "5",
        name: "5. Completar tarea(s)",
      },
      {
        value: "6",
        name: "6. Borrar tarea",
      },
      {
        value: "0",
        name: "0. Salir",
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("=============================");
  console.log("   Seleccione una opción".green);
  console.log("=============================");
  console.log();

  const { opcion } = await inquirer.prompt(preguntas);
  return opcion;
};

const pausa = async () => {
  await inquirer.prompt([
    {
      type: "input",
      name: "continuar",
      message: `Presione ${"ENTER".green} para continuar\n`,
    },
  ]);
  return;
};

module.exports = {
  inquirerMenu,
  pausa,
};
