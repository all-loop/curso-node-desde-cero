const inquirer = require("inquirer");
require("colors");

const readInput = async (message) => {
  console.clear();
  const question = [
    {
      type: "input",
      name: "description",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Por favor, ingrese una entrada válida.";
        }
        return true;
      },
    },
  ];

  const { description } = await inquirer.prompt(question);
  return description;
};

const menu = async () => {
  console.log("=============================");
  console.log("   Seleccione una opción".green);
  console.log("=============================");
  console.log();

  const options = [
    {
      type: "list",
      name: "option",
      message: "¿Qué desea hacer?",
      choices: [
        {
          value: "1",
          name: `${"1".green}. Buscar ciudad`,
        },
        {
          value: "2",
          name: `${"2".green}. Historial`,
        },
        {
          value: "0",
          name: `${"0".green}. Cerrar aplicación`,
        },
      ],
    },
  ];

  const { option } = await inquirer.prompt(options);
  return option;
};

const stop = async () => {
  const question = [
    {
      type: "input",
      name: "description",
      message: `\n${"ENTER".green} para continuar o ${
        "CTRL-C".green
      } para salir del programa...\n`,
    },
  ];
  await inquirer.prompt(question);
  return;
};

const seleccionar = async (lugares) => {
  const choices = lugares.map((lugar, id) => {
    const idx = `${id + 1}.`.green;
    return {
      value: lugar.id,
      name: `${idx} ${lugar.nombre}`,
    };
  });

  choices.unshift({
    Value: "0",
    name: `${"0.".green} cancelar`,
  });

  const options = [
    {
      type: "list",
      name: "id",
      message: "Seleccionar",
      choices,
    },
  ];

  const { id } = await inquirer.prompt(options);
  return id;
};

module.exports = {
  readInput,
  menu,
  stop,
  seleccionar,
};
