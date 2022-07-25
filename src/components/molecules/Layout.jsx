import { Outlet, Link, useLocation } from "react-router-dom";

import iconoVentas from "../../img/iconoVentas.png";
import iconoBebida from "../../img/iconoBebida.png";
import iconoConfiguracion from "../../img/iconoConfiguracion.png";
import IconoCerrarBlanco from "../../img/iconoCerrarBlanco.png";
import IconoBills from "../../img/iconoBills.png";
import IconoLogout from "../../img/iconoLogout.png";
import Imagenpersona from "../../img/newIcons/fotoMujer2.png";

import { useContext, useEffect, useState } from "react";
import StaticContext from "../../contexts/StaticProvider";
import useAuth from "../../hooks/useAuth";
import BotonFlotante from "../atoms/BotonFlotante";
import Header from "../molecules/Header";

import layout from "./layout.css";

const Layout = () => {
  const { isActiveMenu, setActiveMenu, screenSize, setScreenSize } =
    useContext(StaticContext);

  const { auth, setAuth, cerrarSesionAuth } = useAuth();

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

  
  // Computer Styles
  const activeStyles = `text-white  duration-200 border-l-4  hover:border-r-lime-50 p-1   ${
    isActiveMenu ? "pl-5" : "pl-3"
  }`;

  const notActiveStyles = "text-2xl block mt-10 sm:mt-10 text-slate-300";
  const hover =
    "text-white duration-200 hover:pl-2 hover:border-l-2  hover:border-r-lime-50 ";

  const activeMenuStyles = "w-72 fixed sidebar ";
  const notActiveMenuStyles = "0";
  
  const hiddenTitles = `${
    isActiveMenu ? "" : "hidden"
  } origin-left duration-300 `;
  
  const imagenPersonaStyle = `flex items-center rounded-full float-left max-h-20 my-10 text-white cursor-pointer hover:scale-105 hover:duration-150 duration-200${
    isActiveMenu ? "h-16 w-16" : "h-10 w-10"
  }`;

  // // Phone Styles  
  const navStyles =
    "absolute inset-x-0 bottom-0 bg-gradient-to-t flex from-gray-700 via-gray-900 to-black  duration-300 rounded-t-2xl absolute bottom-0 w-full z-50 justify-evenly items-center text-white text-xs";
  // const ulStyles = "flex    ";
  const liStyles =
    "block items-center pt-2 hover:cursor-pointer transition duration-200 ease-in-out hover:duration-200  cursor-pointer hover:scale-105 active:scale-105";
  const imgStyles = "h-8 mx-auto  ";
  
  return (
    <>
      {/* Inciio Celular Layout */}
      <nav className=" xs:hidden ">
        <div className="w-full origin-left duration-300 bg-slate-100 h-screen  xs:p-5  overflow-y-scroll ">
          <Outlet />
        </div>
        <ul className={navStyles}>
            <Link to="/ventas">
              <li className={liStyles}>
                <img src={iconoVentas} className={imgStyles} alt="" />
                <p className="">Ventas</p>
              </li>
            </Link>
            <Link to="/gastos">
              <li className={liStyles}>
                <img src={iconoVentas} className={imgStyles} alt="" />
                <p className="">Gastos</p>
              </li>
            </Link>
            <li>
              <BotonFlotante />
            </li>
            <Link to="/productos">
              <li className={liStyles}>
                <img src={iconoVentas} className={imgStyles} alt="" />
                <p className="">Stock</p>
              </li>
            </Link>
            <Link to="/configuraciones">
              <li className={liStyles}>
                <img src={iconoConfiguracion} className={imgStyles} alt="" />
                <p className="">Menu</p>
              </li>
            </Link>
        </ul>

      
      </nav>

      {/* Final Celular Layout */}

      {/* Inicio Computador Layout */}
      <div className="hidden  xs:flex ">
        <div
          className={`${
            isActiveMenu
              ? "w-72 bg-gradient-to-r from-cyan-900 to-blue-700  p-5 py-3 duration-300"
              : "w-24 bg-gradient-to-r from-cyan-900 to-blue-700 p-5 py-3 duration-300 "
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
                Admistrador Bebidas
              </h2>
            </div>
          </Link>

          <nav className=" mt-5 sm:mt-24">
            <Link
              className={`${
                urlActual === "/productos" ? `${activeStyles}` : `${hover}`
              } ${notActiveStyles} `}
              to="/productos"
            >
              <div className="flex items-center space-x-4 text-base xs:text-lg">
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
              <div className="flex items-center space-x-4 text-base xs:text-lg">
                <img src={iconoVentas} className="h-6 sm:h-8 " alt="" />
                <p className={hiddenTitles}>Ventas</p>
              </div>
            </Link>
            <div className=" ">
              {/* <Link to="/configuraciones"></Link> */}
              <Link
                className={`${
                  urlActual === "/gastos" ? `${activeStyles}` : `${hover}`
                } ${notActiveStyles} `}
                to="/gastos"
              >
                <div className="flex items-center space-x-4 text-base xs:text-lg">
                  <img src={IconoBills} className="h-6 sm:h-8 " alt="" />
                  <p className={hiddenTitles}>Gastos</p>
                </div>
              </Link>
            </div>
            <Link
              className={`${
                urlActual === "/configuraciones"
                  ? `${activeStyles}`
                  : `${hover}`
              } ${notActiveStyles} `}
              to="/configuraciones"
            >
              <div className="flex items-center space-x-4 text-base xs:text-lg">
                <img src={iconoConfiguracion} className="h-6 sm:h-8 " alt="" />
                <p className={hiddenTitles}>Configuraciones</p>
              </div>
            </Link>

            <div className="float-end bottom-0 mb-20 fixed ">
            <Link to="/">
              <div className="flex items-center rounded-full float-left max-h-20  text-white   ">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp"
                  class={`origin-left duration-300 rounded-xl ${
                    !isActiveMenu ? "h-10" : "h-12"
                  }`}
                  alt="Avatar"
                />

                <p className={hiddenTitles}>
                  <span className="text-white pl-2"> Tamara </span>
                  <span className="text-slate-400 "> Owner </span>
                </p>
              </div>
            </Link>
                  </div>

            <div className="float-end bottom-0 fixed mb-10 flex">
              <Link to="/" className="text-white">
                <p className={hiddenTitles}>
               Cerrar Sesion
                </p>
                
            </Link>
            </div>
            <button
              onClick={handleClickClose}
              className="hover:scale-105  hover:duration-200 duration-200"
            >
              {/* <img src={IconoLogout} alt="cerrar" className="h-6 sm:h-8  " /> */}
            </button>
          </nav>
        </div>

        {/* <div className="bg-slate-100 p-3 xs:p-5 sm:w-3/4 sm:p-10 sm:h-screen sm:overflow-y-scroll"> */}
        {/* <div className="w-full origin-left duration-300 bg-slate-100 p-3 xs:p-5  sm:p-10 sm:h-screen overflow-y-scroll"> */}
        <div className="w-full origin-left duration-300 bg-slate-100 h-screen p-5  overflow-y-scroll">
          <BotonFlotante />

          <Outlet />
        </div>
        {/* Fina Computador Layout */}
      </div>
    </>
  );
};

export default Layout;

// import { Outlet, Link, useLocation } from "react-router-dom";

// import iconoVentas from "../../img/iconoVentas.png";
// import iconoBebida from "../../img/iconoBebida.png";
// import iconoConfiguracion from "../../img/iconoConfiguracion.png";
// import IconoCerrarBlanco from "../../img/iconoCerrarBlanco.png";
// import IconoBills from "../../img/iconoBills.png";
// import IconoLogout from "../../img/iconoLogout.png";
// import Imagenpersona from "../../img/newIcons/fotoMujer2.png";

// import { useContext, useEffect, useState } from "react";
// import StaticContext from "../../contexts/StaticProvider";
// import useAuth from "../../hooks/useAuth";
// import BotonFlotante from "../atoms/BotonFlotante";
// import Header from "../molecules/Header";

// // import layout from "./layout.css";

// const Layout = () => {
//   const urlActual = location.pathname;

//   // var prevScrollpos = window.pageYOffset;
//   // window.onscroll = function () {
//   //   var currentScrollPos = window.pageYOffset;
//   //   if (prevScrollpos > currentScrollPos) {
//   //     document.getElementById("navbar").style.top = "0";
//   //   } else {
//   //     document.getElementById("navbar").style.top = "-50px";
//   //   }
//   //   prevScrollpos = currentScrollPos;
//   // };

//   // styles
//   const navStyles =
//     "xs:hidden bg-gradient-to-t from-gray-700 via-gray-900 to-black  duration-300 rounded-t-2xl absolute bottom-0 w-full z-50";
//   const ulStyles = "flex  justify-evenly items-center text-white text-sm  ";
//   const liStyles =
//     "block items-center pt-2 hover:cursor-pointer transition duration-200 ease-in-out hover:duration-200  cursor-pointer hover:scale-105 active:scale-105";
//   const imgStyles = "h-8 mx-auto  ";

//   return (
//     <div>
//       {/* <div id="navbar">
//         <a href="#home">Home</a>
//         <a href="#news">News</a>
//         <a href="#contact">Contact</a>
//       </div> */}

//       <nav className={navStyles}>
//         <ul className={ulStyles} id="navbar">
//           <Link to="/ventas">
//             <li className={liStyles}>
//               <img src={iconoVentas} className={imgStyles} alt="" />
//               <p className="">Ventas</p>
//             </li>
//           </Link>
//           <Link to="/gastos">
//             <li className={liStyles}>
//               <img src={iconoVentas} className={imgStyles} alt="" />
//               <p className="">Gastos</p>
//             </li>
//           </Link>
//           <li>
//             <BotonFlotante />
//           </li>
//           <Link to="/productos">
//             <li className={liStyles}>
//               <img src={iconoVentas} className={imgStyles} alt="" />
//               <p className="">Stock</p>
//             </li>
//           </Link>
//           <Link to="/configuraciones">
//             <li className={liStyles}>
//               <img src={iconoVentas} className={imgStyles} alt="" />
//               <p className="">Menu</p>
//             </li>
//           </Link>
//         </ul>
//       </nav>

//       <div className="w-full origin-left duration-300 bg-slate-100 h-screen  xs:p-5  overflow-y-scroll ">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Layout;
