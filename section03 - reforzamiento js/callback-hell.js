const empleados = [
  {
    id: 1,
    nombre: "usnavy",
  },
  {
    id: 2,
    nombre: "yeislinda",
  },
  {
    id: 3,
    nombre: "Jhon Mariosku",
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 1200,
  },
];

const id = 5;

const getEmpleado = (id, callback) => {
  const empleado = empleados.find((e) => e.id === id)?.nombre;
  if (empleado) {
    callback(null, empleado);
  } else {
    callback(`Empleado con id ${id} no existe.`);
  }
};

const getSalario = (id, callback) => {
  const salario = salarios.find((e) => e.id === id)?.salario;
  if (salario) {
    callback(null, salario);
  } else {
    callback(`No existe salario para el empleado con id ${id}`);
  }
};

getEmpleado(id, (error, empleado) => {
  if (error) {
    console.log("ERROR");
    return console.log(error);
  }

  getSalario(id, (error, salario) => {
    if (error) {
      console.log("ERROR");
      return console.log(error);
    }
    console.log(`El empleado: ${empleado} tiene un salario de: ${salario}`);
  });
});
