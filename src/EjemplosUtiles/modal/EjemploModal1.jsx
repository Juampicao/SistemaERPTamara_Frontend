import React, { useState } from "react";

const EjemploModal1 = () => {
  const [abierto, setAbierto] = useState(true);

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
      <div
        className={`${
          abierto === true ? `${flex}` : `${hidden}`
        } ${ambosTextoRojo} `}
      >
        MODAL ABIERTO
      </div>
    </div>
  );
};

export default EjemploModal1;
