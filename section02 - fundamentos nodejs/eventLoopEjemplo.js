// Visualizando como funciona el event loop
// ¿Cómo será el orden de respuesta?

console.log("Inicio");

setTimeout(() => {
  console.log("Primer timeout.");
}, 3000);

setTimeout(() => {
  console.log("Segundo timeout.");
}, 0);

setTimeout(() => {
  console.log("Tercer timeout.");
}, 0);

console.log("Fin");
