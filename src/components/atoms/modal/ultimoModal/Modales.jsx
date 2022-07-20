import { useModal } from "../hooks/useModal";

const Modales = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(true);
  //   const [isOpenModal2, openModal2, closeModal2] = useModal(false);

  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1} className="bg-blue-500 p-3 rounded-xl">
        Abrir Modal 1
      </button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola ese es el contenido de mi modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" />
      </Modal>
    </div>
  );
};

export default Modales;
