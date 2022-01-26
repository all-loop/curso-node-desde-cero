const inquirer = require("inquirer");
require("colors");

const readInput = async (message) => {
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
      message: `${"ENTER".green} para continuar o ${
        "CTRL-C".green
      } para salir del programa...`,
    },
  ];
  await inquirer.prompt(question);
  return;
};

module.exports = {
  readInput,
  menu,
  stop,
};
