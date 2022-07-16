import React from "react";

const CodigoPrueba = () => {
  // Includes
  if (urlActual.includes("editar")) {
    console.log("Si");
  } else {
    console.log("no");
  }

  // Formatear Fecha
  const fechaEdit = gasto.fecha.subs(0, 10);
  console.log(fechaEdit);

  // Prueba traer array simplificado.
  const prueba = [
    { categoria: "comida", value: 200 },
    { categoria: "comida", value: 200 },
    { categoria: "gastos", value: 100 },
  ];

  let totalComida = [];
  function verComida() {
    for (let i = 0; i < gastos.length; i++) {
      let result = gastos[i].valor;
      totalComida.push(result);
      console.log(totalComida);
    }
  }

  verComida();

  // Prueba 2 array.
  let totalComida2 = [];
  function verComida() {
    for (let i = 0; i < gastos.length; i++) {
      if ((gastos[i].categoria = "Comida")) {
        console.log("true");
      }

      let result = (gastos[i].categoria = "comida");
      totalComida2.push(result);
      console.log(totalComida);
    }
  }
  verComida();

  // Prueba Sumar Ventas como si fuera EGRESO para sumar al TOTAL GASTOS.
  useEffect(() => {
    const totalVentas = ventas.reduce((total, venta) => venta.valor + total, 0);
    console.log(totalVentas);
    console.log(totalGastos + totalVentas);
  }, [ventas]);

  // ------------- Crear arrays dinamicos y sumar los valores ------------------ //

  // 1) CrearArray de gastosComida.
  let arrayGastosComida = [];
  function buscarGastosComida(number) {
    // 1) Recorrer todo el array de gastos
    for (let i = 0; i < gastos.length; i++) {
      // 2) Identificar cual gasto contiene categoria.
      if (gastos[i].categoria === "Comida") {
        // 3) Agregarlo a un array diferente de gastosComida
        arrayGastosComida.push(gastos[i]);
      }
    }
  }
  buscarGastosComida();
  console.log(arrayGastosComida);

  // 2) Crear Array con los valores de gastosComida.
  let arrayGastosComidaValores = [];
  let arrayGastosVariosValores = [];
  let arrayGastosProveedorValores = [];
  function sumarValoresArray(oldArr, newArr) {
    for (let i = 0; i < oldArr.length; i++) {
      let result = oldArr[i].valor;
      newArr.push(result);
      // console.log(newArr);
    }
  }
  sumarValoresArray(arrayGastosComida, arrayGastosComidaValores);

  // 3) Sumar los valores del array de arrayValorGastosComida
  let sumaValoresGastosComida = [];
  function sumarValoresGastosComida(arr) {
    const reducer = (accumulator, curr) => accumulator + curr;
    console.log(arr.reduce(reducer));
    let resultado = arr.reduce(reducer);
    sumaValoresGastosComida.push(resultado);
  }

  sumarValoresGastosComida(arrayValorGastosComida);
  console.log(sumaValoresGastosComida);

  // ------------- Crear arrays dinamicos y sumar los valores ------------------ //

  // --- Funcion arrays nuevos y sumas dinamicas -----//
  let arrayGastosComida = [];
  let arrayGastosVarios = [];
  let arrayGastosProveedor = [];

  function crearArraysGastosSegmentados() {
    for (let i = 0; i < gastos.length; i++) {
      if (gastos[i].categoria === "Comida") {
        arrayGastosComida.push(gastos[i]);
      }
      if (gastos[i].categoria === "Gastos") {
        arrayGastosVarios.push(gastos[i]);
      }
      if (gastos[i].categoria === "Proveedor") {
        arrayGastosProveedor.push(gastos[i]);
      }
    }
  }
  crearArraysGastosSegmentados();
  console.log(arrayGastosComida, arrayGastosVarios, arrayGastosProveedor);
  // --- Funcion arrays nuevos y sumas dinamicas -----//

  return (
    <div>
      {/* Contiene includes */}
      <input
        type="text"
        defaultValue={urlActual.includes("editar") ? { toDay } : ""}
      />
    </div>
  );
};

export default CodigoPrueba;
