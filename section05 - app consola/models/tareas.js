const Tarea = require("./tarea");

class Tareas {
  _listado = {};

  constructor() {
    this._listado = {};
  }

  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      listado.push(this._listado[key]);
    });

    return listado;
  }

  set cargarTareas(lista = []) {
    lista.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listarTareas() {
    console.log();

    Object.values(this._listado).forEach((tarea, i) => {
      const indice = `${i + 1}.`.green;
      const { desc, completadoEn } = tarea;
      const estado = completadoEn ? "Completado".green : "Pendiente".red;
      const mensaje = `${indice} ${desc} :: ${estado}`;

      console.log(mensaje);
    });
  }

  listarPorEstado(completado = true) {
    console.log();

    this.listadoArr
      .filter((tarea) => Boolean(tarea.completadoEn) === completado)
      .forEach((tarea, i) => {
        const indice = `${i + 1}.`.green;
        const { desc, completadoEn } = tarea;
        const estado = completadoEn ? "Completado".green : "Pendiente".red;
        console.log(`${indice} ${desc} :: ${estado}`);
      });
  }

  borrarTarea(id = "") {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }
}

module.exports = Tareas;
