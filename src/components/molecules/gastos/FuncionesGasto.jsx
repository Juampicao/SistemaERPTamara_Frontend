// // ObjetoGasto

// // Boton Enviar Formulario
// export const handleNuevoGasto = async (e) => {
//   e.preventDefault();
//   try {
//     let respuesta;
//     if (gasto.id) {
//       // Editando un registro
//       const url = `http://localhost:4000/gastos/${gasto.id}`;
//       respuesta = await fetch(url, {
//         method: "PUT",
//         body: JSON.stringify(objetoGasto),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//     } else {
//       // Nuevo Registro
//       const url = `http://localhost:4000/gastos/`;
//       respuesta = await fetch(url, {
//         method: "POST",
//         body: JSON.stringify(objetoGasto),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       // setTotalGastos(...totalGastos, valor);
//     }

//     await respuesta.json();
//     //   navigate("/ventas");
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default handleNuevoGasto;

const handleDeleteModal = () => {
  console.log("Eliminando..");
  setIsOpenConfirmModal(!isOpenConfirmModal);
  setIsOpenDeleteModal(!isOpenDeleteModal);
  handleDelete(id);
};
