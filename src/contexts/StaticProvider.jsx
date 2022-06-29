import React from "react";
import { createContext, useState } from "react";

const StaticContext = createContext();

const StaticProvider = ({ children }) => {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);

  const [productos, setProductos] = useState([]);

  return (
    <StaticContext.Provider
      value={{
        isOpenEdit,
        setIsOpenEdit,
        isOpenModal,
        setIsOpenModal,
        isOpenDeleteModal,
        setIsOpenDeleteModal,
        productos,
        setProductos,
      }}
    >
      {children}
    </StaticContext.Provider>
  );
};

export { StaticProvider };

export default StaticContext;
