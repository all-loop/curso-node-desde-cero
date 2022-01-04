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
    nombre: "yoni Mariko",
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

const getEmpleadoById = (id) =>
  new Promise((resolve, reject) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;
    empleado ? resolve(empleado) : reject(`No existe el empleado con id ${id}`);
  });

const getSalarioById = (id) =>
  new Promise((resolve, reject) => {
    const salario = salarios.find((e) => e.id === id)?.salario;
    salario
      ? resolve(salario)
      : reject(`El empleado con id ${id} no posee salario`);
  });

const getInfoUsuario = async (id) => {
  try {
    const empleado = await getEmpleadoById(id);
    const salario = await getSalarioById(id);
    return `El salario del empleado: ${empleado} es \$${salario} usd`;
  } catch (error) {
    throw error;
  }
};

const id = 2;
getInfoUsuario(id)
  .then(console.log)
  .catch((error) => {
    console.error(error);
  });
