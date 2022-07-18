import React from "react";
import { useModal } from "../hooks/useModal";
import UltimoModal from "./UltimoModal";

const InvocarModal = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false);

  return (
    <div>
      {/* Modal1 */}

      <h1>Abrir modal 1</h1>
      <button onClick={openModal} className="bg-blue-500 p-3 rounded-xl">
        Abrir Modal 1
      </button>
      <Modal isOpen={isOpenModal} closeModal={closeModal}>
        <h3>Modal 1</h3>
        <p>Hola ese es el contenido de mi modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" />
      </Modal>
      {/* Modal1 */}

      {/* Modal2 */}
      <h1>Abrir modal 2</h1>
      <button onClick={openModal2} className="bg-blue-500 p-3 rounded-xl">
        Abrir Modal 2
      </button>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Modal 2</h3>
        <p>Hola ese es el contenido de mi modal 2</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" />
      </Modal>
      {/* Modal2 */}
    </div>
  );
};

export default InvocarModal;
