import React from "react";
import { createContext, useState } from "react";

const StaticContext = createContext();

const StaticProvider = ({ children }) => {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenSaveModal, setIsOpenSaveModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const [isOpenErrorModal, setIsOpenErrorModal] = useState(true);

  const [producto, setProducto] = useState({});
  const [productos, setProductos] = useState([]);

  const [venta, setVenta] = useState([]);
  const [ventas, setVentas] = useState([]);

  const [gasto, setGasto] = useState([]);
  const [gastos, setGastos] = useState([]);
  const [totalGastos, setTotalGastos] = useState(500);

  const [isCargando, setIsCargando] = useState(true);
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
        isCargando,
        setIsCargando,
        venta,
        setVenta,
        ventas,
        setVentas,
        gasto,
        setGasto,
        gastos,
        setGastos,
        totalGastos,
        setTotalGastos,
      }}
    >
      {children}
    </StaticContext.Provider>
  );
};

export { StaticProvider };

export default StaticContext;
