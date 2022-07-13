import React from "react";
import { createContext, useState } from "react";

const StaticContext = createContext();

const StaticProvider = ({ children }) => {
  const [isActiveMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const [isOpenSaveModal, setIsOpenSaveModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);
  const [isOpenErrorModal, setIsOpenErrorModal] = useState(false);
  const [modalCaja, setModalCaja] = useState(false);

  const [producto, setProducto] = useState({});
  const [productos, setProductos] = useState([]);

  const [venta, setVenta] = useState([]);
  const [ventas, setVentas] = useState([]);

  const [gasto, setGasto] = useState({});
  const [gastos, setGastos] = useState([]);
  const [totalGastos, setTotalGastos] = useState(500);

  const [isCargando, setIsCargando] = useState(false);

  const [inicioCaja, setInicioCaja] = useState(Number(""));

  // Borrar Gastos
  // const handleDelete = async (id) => {
  //   console.log("Borrando");
  //   try {
  //     const url = `${import.meta.env.VITE_API_URL}/gastos/${_id}`;

  //     const respuesta = await fetch(url, {
  //       method: "DELETE",
  //     });
  //     await respuesta.json();

  //     const arrayGastos = gastos.filter((gasto) => gasto.id !== id);
  //     setGastos(arrayGastos);
  //     setIsOpenDeleteModal(!isOpenDeleteModal);
  //   } catch (error) {
  //     console.log(error);
  //     setIsOpenErrorModal(!isOpenErrorModal);
  //   }
  // };

  return (
    <StaticContext.Provider
      value={{
        isActiveMenu,
        setActiveMenu,
        screenSize,
        setScreenSize,
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
        modalCaja,
        setModalCaja,
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
        // handleModalClick,
        // handleDeleteModal,
        // handleDelete,
        inicioCaja,
        setInicioCaja,
      }}
    >
      {children}
    </StaticContext.Provider>
  );
};

export { StaticProvider };

export default StaticContext;
