import FormularioGasto from "./FormularioGasto";
import iconoCerrar from "../../../img/IconoCerrar.png";
import { Outlet, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import StaticContext from "../../../contexts/StaticProvider";
import Header from "../Header";
import { BotonAzulClasico } from "../../../helpers/colores";

const EditarGasto = () => {
  const { gasto, setGasto, gastos } = useContext(StaticContext);
  const { id } = useParams();

  // Usenavigate
  const navigate = useNavigate();

  // Llamado a la base de datos
  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/gastos/${id}`;
        // const url = `${import.meta.env.API_URL}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setGasto(resultado);
        // console.log(gasto);
      } catch (error) {
        console.log(error);
      }
      // setIsCargando(!isCargando);
    };
    obtenerClienteAPI();
  }, []);
  return (
    <div data-aos="fade-left">
      <Header title={gasto?.nombre ? "Editar Gasto" : "Agregar Gasto"} />
      {gasto?.nombre ? "Editar Gasto" : "Agregar Gasto"}

      <FormularioGasto />
    </div>
  );
};

export default EditarGasto;

//  <div
//    data-aos="fade-left"
//    className="  bg-half-transparent w-screen fixed nav-item top-0 right-0  "
//  >
//    <div className="overflow-y-scroll	h-screen float-right h-screen  duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white  md:w-[300px] p-8">
//      <div className="flex justify-between">
//        <div className="flex items-center  justify-center h-10 w-10 rounded-full bg-slate-200">
//          <button onClick={handleClickClose}>
//            <img
//              src={iconoCerrar}
//              alt="cerrar"
//              className=" hover:scale-110 hover:duration-200  "
//            />
//          </button>
//        </div>

//        <div className="flex justify-between items-center">
//          <p className="font-semibold text-lg">Editar Gastos</p>
//        </div>
//      </div>
//      <FormularioGasto />
//    </div>
//  </div>;
