export const generarId = () => {
  const random = Math.random().toString(36);
  const fecha = Date.now().toString(2);
  return random + fecha;
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

export let DiaActual = new Date();
console.log(DiaActual.toLocaleDateString());

export default formatearFecha(DiaActual);

// Buscar reset a todos los estados de un form. Para hacerlo global para ventas, gastos y productos formulario.
function resetForm() {
  setValor("");
}

// Ordenar arrays
var numbers = [4, 2, 5, 1, 7];

numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);
// [1, 2, 3, 4, 5]

// Ordenar array con 2 propiedades.
var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];
console.log(
  items.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a must be equal to b
    return 0;
  })
);

// Ordenar por VALOR.

// export function ordenarCualquierCosa(arr) {
//   arr.sort(function (a, b) {
//     if (a > b) {
//       return 1;
//     }
//     if (a < b) {
//       return -1;
//     }
//     // a must be equal to b
//     return 0;
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
