// Cargamos las variables de entorno desde el archivo .env
require("dotenv").config();

// Importamos nuestra clase servidor personalizada
const Server = require("./models/server");
const server = new Server();
server.listen();
