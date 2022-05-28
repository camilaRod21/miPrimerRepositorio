let fechaHoy = new Date ()

let fechaDeCumpleaños = new Date (1997,3,28)

/* dia*/
/* console.log(fechaHoy.getDate());
console.log(fechaHoy.getMonth());
console.log(fechaHoy.getFullYear());
console.log(fechaHoy.getUTCHours()); */

console.log(fechaDeCumpleaños.toDateString());
console.log(fechaDeCumpleaños.toLocaleDateString());
console.log(fechaDeCumpleaños.toLocaleTimeString());