import React from "react";
import { createContext, useState } from "react";

const StaticContext = createContext();

const StaticProvider = ({ children }) => {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenSaveModal, setIsOpenSaveModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const [isOpenErrorModal, setIsOpenErrorModal] = useState(true);

  const [producto, setProducto] = useState([]);

  const [productos, setProductos] = useState([]);

  isOpenSaveModal;
  isOpenSaveModal;
  return (
    <StaticContext.Provider
      value={{
        isOpenEdit,
        setIsOpenEdit,
        isOpenSaveModal,
        setIsOpenSaveModal,
        isOpenDeleteModal,
        setIsOpenDeleteModal,
        isOpenConfirmModal,
        setIsOpenConfirmModal,
        isOpenErrorModal,
        setIsOpenErrorModal,
        producto,
        setProducto,
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
