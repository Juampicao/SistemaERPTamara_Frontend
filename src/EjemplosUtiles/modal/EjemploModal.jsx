import "./Modal.css";

const EjemploModal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  // Sacar el article=onClick Close Modal para obligar a aceptar.

  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close" onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default EjemploModal;

// import {  BotonSecundario } from "../Botones";
// import "./Modal.css";

// const Modal = ({ children, isOpen, closeModal, onClick, value }) => {
//   const handleModalContainerClick = (e) => e.stopPropagation();

//   return (
//     <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
//       <div className="modal-container" onClick={handleModalContainerClick}>
//         <button className="modal-close" onClick={closeModal}>
//           X
//         </button>
//         {children}
//         <BotonSecundario value={value} onClick={onClick} />
//
//       </div>
//     </article>
//   );
// };

// export default Modal;
