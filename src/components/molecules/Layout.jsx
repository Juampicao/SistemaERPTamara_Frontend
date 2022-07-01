import { Outlet, Link, useLocation } from "react-router-dom";
// import ImagenConfiguracion from "../atoms/ImagenConfiguracion";

// import ImagenTravertino from "../../img/icono-travertinoBlanco.png";
import iconoVentas from "../../img/iconoVentas.png";
import iconoBebida from "../../img/iconoBebida.png";
import iconoConfiguracion from "../../img/iconoConfiguracion.png";

const Layout = () => {
  const location = useLocation();
  const urlActual = location.pathname;

  // styles

  const activeStyles =
    "bg-indigo-500 rounded-lg ml-2 text-white pl-3 duration-200 p-2";
  const notActiveStyles = "text-2xl block mt-4 sm:mt-6";
  const hover =
    "text-white duration-200 hover:bg-indigo-500 hover:rounded-lg hover:p-2";

  return (
    <div className="sm:flex  ">
      <div className="sm:w-1/4 min-w-[250px] bg-indigo-700 px-5 py-10">
        <Link to="/presupuesto">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl uppercase font-black text-center text-white">
              Admistrador Tamara
            </h2>
            {/* <img src={ImagenTravertino} alt="" className="h-10 mt-1" /> */}
          </div>
        </Link>

        <nav className=" mt-5 sm:mt-10">
          <Link
            className={`${
              urlActual === "/productos" ? `${activeStyles}` : `${hover}`
            } ${notActiveStyles} `}
            to="/productos"
          >
            <div className="flex items-center space-x-4">
              <img src={iconoBebida} className="h-10" alt="" />
              <p>Inventario</p>
            </div>
          </Link>

          <Link
            className={`${
              urlActual === "/ventas" ? `${activeStyles}` : `${hover}`
            } ${notActiveStyles} `}
            to="/ventas"
          >
            <div className="flex items-center space-x-4">
              <img src={iconoVentas} className="h-10" alt="" />
              <p>Ventas</p>
            </div>
          </Link>

          <Link
            className={`${
              urlActual === "/configuraciones" ? `${activeStyles}` : `${hover}`
            } ${notActiveStyles} `}
            to="/configuraciones"
          >
            <div className="flex items-center space-x-4">
              <img src={iconoConfiguracion} className="h-10" alt="" />
              <p>Configuraciones</p>
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
              <div className="flex items-center space-x-4">
                <img src={iconoVentas} className="h-10" alt="" />
                <p>Gastos</p>
              </div>
            </Link>
          </div>
        </nav>
      </div>

      <div className="bg-slate-100 p-3 xs:p-5 sm:w-3/4 sm:p-10 sm:h-screen sm:overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
