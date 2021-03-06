import React, { useState } from "react";
import Modal from "./Modal";
import FormularioGasto from "../../molecules/gastos/FormularioGasto";
import { useModal } from "../../../hooks/useModal";
import VerVenta from "../../molecules/VerVenta";
import { useNavigate } from "react-router-dom";

const Modales = () => {
  // const [abierto, setAbierto] = useState(true);
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);
  const [isOpenVerProducto, openVerProducto, closeVerProducto] =
    useModal(false);
  const navigate = useNavigate();

  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola ese es el contenido de mi modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" />
      </Modal>
      <button onClick={openModal2}> Modal 2 </button>
      <Modal
        isOpen={isOpenModal2}
        closeModal={closeModal2}
        value="desde Modales"
        onClick={() => navigate(`/ventas`)}
      >
        <FormularioGasto />
      </Modal>
      <button onClick={openVerProducto}> Ver Producto</button>
      <Modal
        isOpen={isOpenVerProducto}
        closeModal={closeVerProducto}
        onClick={() => navigate(`/gastos`)}
      >
        <VerVenta />
      </Modal>
    </div>
  );
};

export default Modales;
