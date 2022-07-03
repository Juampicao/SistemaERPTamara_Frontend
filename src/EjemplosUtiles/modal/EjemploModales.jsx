import React, { useState } from "react";
import EjemploModal from "./EjemploModal";
import HookUseModal from "./HookUseModal";
import Modal from "./Modal";

const Modales = () => {
  const [abierto, setAbierto] = useState(true);
  const [isOpenModal1, openModal1, closeModal1] = useState(false);
  const [isOpenModal2, openModal2, closeModal2] = useState(false);

  const hidden = "hidden";
  const flex = "flex";
  const ambosTextoRojo = "text-red-500";
  // Explicacion

  // Si el estado ABIERTO = TRUE, clase FLEX. si ABIERTO = FALSE, clase HIDDEN. Ambos tiene clase AMBOSTEXTOROJO.

  // Creo constante hidden / flex de esa forma para usar tailwind e invocarlas como constante,
  return (
    <div>
      {/* <div
        className={`${
          abierto === true ? `${flex}` : `${hidden}`
        } ${ambosTextoRojo} `}
      >
        MODAL ABIERTO
      </div> */}
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <EjemploModal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola ese es el contenido de mi modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="Animals" />
      </EjemploModal>
    </div>
  );
};

export default Modales;
