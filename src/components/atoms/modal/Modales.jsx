// import React, { useState } from "react";
// import Modal from "./Modal";
// import FormularioGasto from "../../molecules/gastos/FormularioGasto";
// import { useModal } from "../../../hooks/useModal";
// import VerVenta from "../../molecules/VerVenta";
// import { useNavigate } from "react-router-dom";
// import { ModalGuardado } from "../ModalNotificacion";

// const Modales = () => {
//   // const [abierto, setAbierto] = useState(true);
//   const [isOpenModal1, openModal1, closeModal1] = useModal(false);
//   const [isSaveModalOpen, openSaveModal, closeSaveModal] = useModal(false);
//   const [isOpenVerProducto, openVerProducto, closeVerProducto] =
//     useModal(false);
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h2>Modales</h2>
//       <button onClick={openModal1}>Modal 1</button>
//       <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
//         <h3>Modal 1</h3>
//         <p>Hola ese es el contenido de mi modal 1</p>
//         <img src="https://placeimg.com/400/400/animals" alt="Animals" />
//       </Modal>
//       <button onClick={openSaveModal}> Save Modal </button>
//       <Modal
//         isOpen={isSaveModalOpen}
//         closeModal={closeSaveModal}
//         value="desde Modales"
//         onClick={() => navigate(`/ventas`)}
//       >
//         <ModalGuardado />
//       </Modal>
//       <button onClick={openVerProducto}> Ver Venta</button>
//       <Modal
//         isOpen={isOpenVerProducto}
//         closeModal={closeVerProducto}
//         onClick={() => navigate(`/gastos`)}
//       >
//         <VerVenta />
//       </Modal>
//     </div>
//   );
// };

// export default Modales;
