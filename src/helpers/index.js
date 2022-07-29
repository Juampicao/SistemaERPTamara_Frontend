let date = new Date();
export let FechaHoyArgentina = date
  .toLocaleString("en-US", "America/Argentina/Buenos_Aires")
  .slice(0, 9);
console.log(FechaHoyArgentina);

export const FormatearNumero = function (number) {
  return "$" + number + ",00";
};

export function formatearFechaCorta(fecha) {
  // let fechaFormateada = fecha.slice(0, 10);
  let fechaFormateada = fecha;
  let fechaFormateadaFinal = fechaFormateada;
  return fechaFormateadaFinal;
}

// Generar ID
export const generarId = () => {
  const random = Math.random().toString(36);
  const fecha = Date.now().toString(2);
  return random + fecha;
};

// const toDay
export const toDay = new Date().toISOString().substring(0, 10);
console.log(toDay);

export const formatearFecha = (fecha) => {
  // let fechaFormateada = fecha.slice(0, 10);
  // let fechaFormateada = fecha;
  // let fechaFormateadaFinal = fechaFormateada;

  // return fechaFormateadaFinal;

  // // ExFormateado
  const fechaNueva = new Date(fecha);
  const opciones = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };

  return fechaNueva.toLocaleTimeString("es-ES", opciones);
  // return fechaNueva.toISOString("es-ES", opciones);
};

// Ordenar arrays
var numbers = [4, 2, 5, 1, 7];

numbers.sort(function (a, b) {
  return a - b;
});
// console.log(numbers);
// [1, 2, 3, 4, 5]

// Ordenar array con 2 propiedades.
// var items = [
//   { name: "Edward", value: 21 },
//   { name: "Sharpe", value: 37 },
//   { name: "And", value: 45 },
//   { name: "The", value: -12 },
//   { name: "Magnetic", value: 13 },
//   { name: "Zeros", value: 37 },
// ];
// console.log(
//   items.sort(function (a, b) {
//     if (a.name > b.name) {
//       return 1;
//     }
//     if (a.name < b.name) {
//       return -1;
//     }
//     // a must be equal to b
//     return 0;
//   })
// );

// Ordenar por VALOR.

// export function ordenarCualquierCosa(arr) {
//   arr.sort(function (a, b) {
//  return a - b
//   });
// }

// gastos.sort(function (a, b) {
//   if (a.valor > b.valor) {
//     return 1;
//   }
//   if (a.valor < b.valor) {
//     return -1;
//   }
//   // a must be equal to b
//   return 0;
// });

// forma corta de ordenar

// Ordenar por VALOR
// gastos.sort(function (a, b) {
//   return a.valor - b.valor;
// });

// Ordenar por Nombre
// gastos.sort(function (a, b) {
//   return a.nombre - b.nombre;
// });

// Ordenar por Categoria
// gastos.sort(function (a, b) {
//   return a.categoria - b.categoria;
// });


