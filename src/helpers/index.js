export const aumentar = "aumentar";
export const disminuir = "disminuir";

// Generar ID
export const generarId = () => {
  const random = Math.random().toString(36);
  const fecha = Date.now().toString(2);
  return random + fecha;
};

// const toDay
export const toDay = new Date().toISOString().substring(0, 10);
console.log(toDay);
export const formatearFechaCorta = (fecha) => {
  const fechaNueva = new Date(fecha);
  const opciones = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  return fechaNueva.toLocaleDateString("es-ES", opciones);
};

export const formatearFecha = (fecha) => {
  const fechaNueva = new Date(fecha);
  const opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return fechaNueva.toLocaleDateString("es-ES", opciones);
};

// Formatear numero a moneda.
export const FormatearNumero = function (number) {
  // return "$" + +new Intl.NumberFormat().format(number) + ",00";
  return "$" + number + ",00";
};
// console.log(FormatearNumero(1000));

// export default formatearFecha(DiaActual);
export let DiaActual = new Date();
console.log(DiaActual.toLocaleDateString());
const pruebaDia = DiaActual.toLocaleDateString();

console.log(pruebaDia);

export const formatearFecha2 = (fecha) => {
  const nuevaFecha = new Date(fecha.split("T")[0].split("-"));
  const opciones = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return nuevaFecha.toLocaleDateString("es-ES", opciones);
};

console.log(formatearFecha2("10/20/2022"));

// export const formatter = new Intl.NumberFormat("en-US", {
//   style: "currency",
//   currency: "USD",
//   minimumFractionDigits: 0,
// });

// var value = 10000000;

// console.log(formatter.format(value)); // "$10,000

// export const formatter = (numero) => {
//   let numero2 = numero;
//   numero2 = new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//     minimumFractionDigits: 0,
//   });
//   console.log(numero2);
//   return numero2;
// };

// let a = 10;
// formatter(a);

// Ordenar arrays
var numbers = [4, 2, 5, 1, 7];

numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);
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

// // Ordenar por VALOR
// gastos.sort(function (a, b) {
//   return a.valor - b.valor;
// });

// // Ordenar por Nombre
// gastos.sort(function (a, b) {
//   return a.nombre - b.nombre;
// });

// // Ordenar por Categoria
// gastos.sort(function (a, b) {
//   return a.categoria - b.categoria;
// });
