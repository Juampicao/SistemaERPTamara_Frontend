import { Outlet, Link, useLocation } from "react-router-dom";
// import ImagenConfiguracion from "../atoms/ImagenConfiguracion";

// import ImagenTravertino from "../../img/icono-travertinoBlanco.png";
import iconoVentas from "../../img/iconoVentas.png";
import iconoBebida from "../../img/iconoBebida.png";
import iconoConfiguracion from "../../img/iconoConfiguracion.png";
import IconoCerrarBlanco from "../../img/iconoCerrarBlanco.png";
import IconoLogout from "../../img/iconoLogout.png";
import Imagenpersona from "../../img/imagenPersona.jpg";

import { useContext, useEffect, useState } from "react";
import StaticContext from "../../contexts/StaticProvider";

const Layout = () => {
  const { isActiveMenu, setActiveMenu, screenSize, setScreenSize } =
    useContext(StaticContext);
  const location = useLocation();
  const urlActual = location.pathname;

  // Funcion Cerrar Edit
  const handleClickClose = () => {
    console.log("cerrando..");
    setActiveMenu(!isActiveMenu);
    // setIsOpenEdit(!isOpenEdit);
    // navigate(`/productos`);
  };

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!isActiveMenu);

  // {
  //   isActiveMenu ? (
  //     <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
  //       <Sidebar />
  //     </div>
  //   ) : (
  //     <div className="w-0 dark:bg-secondary-dark-bg">
  //       <Sidebar />
  //     </div>
  //   );
  // }
  // styles

  const activeStyles = "bg-indigo-700 rounded-lg  text-white  duration-200 p-3";
  const notActiveStyles = "text-2xl block mt-4 sm:mt-6 text-slate-300";
  const hover =
    "text-white duration-200 hover:bg-indigo-700 hover:rounded-lg hover:p-2";

  const activeMenuStyles = "w-72 fixed sidebar ";
  const notActiveMenuStyles = "0";

  const hiddenTitles = `${
    isActiveMenu ? "" : "hidden"
  } origin-left duration-300 `;

  return (
    <>
      {/* <div className="sm:flex  "> */}
      <div className="flex ">
        {/* <div className="sm:w-1/4 min-w-[280px] bg-indigo-900 px-5 py-5 "> */}
        <div
          className={`${
            isActiveMenu
              ? "w-72 bg-indigo-900 p-5 py-3 duration-300"
              : "w-20 bg-indigo-900 p-5 py-3 duration-300 "
          }`}
        >
          <div className="flex justify-end mb-4">
            <div className="flex items-center  justify-center h-10 w-10 rounded-full ">
              <button onClick={handleClickClose} className="hover:scale-105">
                <img
                  src={IconoCerrarBlanco}
                  alt="cerrar"
                  className=" hover:scale-110 hover:duration-300 duration-150  "
                />
              </button>
            </div>
          </div>
          <Link to="/productos">
            <div className="flex flex-col items-center">
              <h2
                className={`text-xl xs:text-2xl uppercase font-black text-center origin-left text-white duration-300 ${
                  !isActiveMenu && `scale-0`
                }`}
              >
                Admistrador Tamara
              </h2>
            </div>
          </Link>

          <nav className=" mt-5 sm:mt-10 ">
            <Link
              className={`${
                urlActual === "/productos" ? `${activeStyles}` : `${hover}`
              } ${notActiveStyles} `}
              to="/productos"
            >
              <div className="flex items-center space-x-4 text-base xs:text-xl">
                <img src={iconoBebida} className="h-6 sm:h-8 " alt="" />
                <p className={hiddenTitles}>Inventario</p>
              </div>
            </Link>

            <Link
              className={`${
                urlActual === "/ventas" ? `${activeStyles}` : `${hover}`
              } ${notActiveStyles} `}
              to="/ventas"
            >
              <div className="flex items-center space-x-4 text-base xs:text-xl">
                <img src={iconoVentas} className="h-6 sm:h-8 " alt="" />
                <p className={hiddenTitles}>Ventas</p>
              </div>
            </Link>

            <Link
              className={`${
                urlActual === "/configuraciones"
                  ? `${activeStyles}`
                  : `${hover}`
              } ${notActiveStyles} `}
              to="/configuraciones"
            >
              <div className="flex items-center space-x-4 text-base xs:text-xl">
                <img src={iconoConfiguracion} className="h-6 sm:h-8 " alt="" />
                <p className={hiddenTitles}>Configuraciones</p>
              </div>
            </Link>
            <div className=" ">
              <Link to="/configuraciones"></Link>
              <Link
                className={`${
                  urlActual === "/gastos" ? `${activeStyles}` : `${hover}`
                } ${notActiveStyles} `}
                to="/gastos"
              >
                <div className="flex items-center space-x-4 text-base xs:text-xl">
                  <img src={iconoVentas} className="h-6 sm:h-8 " alt="" />
                  <p className={hiddenTitles}>Gastos</p>
                </div>
              </Link>
            </div>

            <div className="flex items-center rounded-full float-left max-h-20 my-10 text-white">
              <img
                src={Imagenpersona}
                className="rounded-full h-6 sm:h-8 pr-2 hover:scale-105 cursor-pointer duration-150"
                alt="imagen persona"
              />
              <p className={hiddenTitles}> Tamara </p>
            </div>

            <button
              onClick={handleClickClose}
              className="hover:scale-105  hover:duration-200 duration-200"
            >
              <img src={IconoLogout} alt="cerrar" className="h-6 sm:h-8  " />
            </button>
          </nav>
        </div>

        {/* <div className="bg-slate-100 p-3 xs:p-5 sm:w-3/4 sm:p-10 sm:h-screen sm:overflow-y-scroll"> */}
        <div className="w-full origin-left duration-300 bg-slate-100 p-3 xs:p-5  sm:p-10 sm:h-screen overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
