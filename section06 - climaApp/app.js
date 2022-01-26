// importación de nuestros propios módulos
const terminal = require("./helpers/inquirer");

const main = async () => {
  while (true) {
    console.clear();

    const option = await terminal.menu();

    if (option === "0") {
      console.log("\nCerrando programa...");
      break;
    } else if (option === "1") {
      console.log({ option });
    } else {
      console.log({ option });
    }

    await terminal.stop();
  }
};

main();
