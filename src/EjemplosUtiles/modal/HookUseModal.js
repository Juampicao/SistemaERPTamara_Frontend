import React, { useState } from "react";

export const HookuseModal = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  // Explicacion
  // Si no hay valor en el componente, initialValue == False.

  const openModal = () => setIsOpen(!isOpen);
  const closeModal = () => setIsOpen(!isOpen);

  return [isOpen, openModal, closeModal];
  // Retornamos las 3 funciones/estado. luego la importamos.
};
