import React, { useState, useContext } from "react";

import { ModalGuardado } from "../atoms/ModalNotificacion";

import iconoCerrar from "../../img/iconoCerrar.png";
import Fernet from "../../img/fernet.jpg";
import SignoMas from "../../img/signoMas.png";
import SignoMenos from "../../img/signoResta.png";
import IconoCosto from "../../img/iconoCosto.png";
import iconoPrecio from "../../img/iconoPrecio.png";
import iconoCantidad from "../../img/iconoCantidad.png";
import iconoEtiqueta from "../../img/iconoEtiqueta.png";
import iconoExclamacion from "../../img/iconoExclamacion3.png";

import StaticContext from "../../contexts/StaticProvider";
import { BotonPrincipal, BotonSecundario } from "../atoms/Botones";

const Editar = () => {
  const { isOpenEdit, setIsOpenEdit, isOpenModal, setIsOpenModal } =
    useContext(StaticContext);

  const [cantidad, setCantidad] = useState(59);

  const handleGuardar = () => {
    console.log("guardando..");
    setIsOpenModal(true);
    setIsOpenEdit(!isOpenEdit);
  };

  const handleClickClose = () => {
    console.log("cerrando..");
    setIsOpenEdit(!isOpenEdit);
  };

  // Funcion Sumar Cantidad
  const sumar = () => {
    setCantidad(cantidad + 1);
  };

  const resta = () => {
    setCantidad(cantidad - 1);
  };
  // Styles
  const contenedores = "flex justify-between items-center ";
  const titulos = "font-semibold";
  const resultados = "text-gray-500 dark:text-gray-200";
  const inputText = "px-2 py-2 w-1/2 text-center content-end	 ";
  const iconoStyle = "h-5 items-center my-auto pr-2";

  const linea = <div className="h-[2px] w-full mx-auto bg-slate-500"> </div>;

  return (
    <div
      data-aos="fade-left"
      className="  bg-half-transparent w-screen fixed nav-item top-0 right-0  "
    >
      <div className="float-right h-screen  duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-slate-200 border border-2	 border-x-black md:w-[300px] p-8">
        <div className="flex items-center  justify-center h-10 w-10 rounded-full bg-slate-200">
          <button onClick={handleClickClose}>
            <img
              src={iconoCerrar}
              alt="cerrar"
              className=" hover:scale-110 hover:duration-200 mb-5 "
            />
          </button>
        </div>

        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Editar Producto</p>
        </div>

        <div className="my-3 space-y-5">
          <div className="flex">
            <div className="mx-auto border border-black  ">
              <input
                type="image"
                src={Fernet}
                className="h-32 cursor-pointer hover:scale-110 duration-150"
              />
            </div>
          </div>
          <div className={contenedores}>
            <p className={titulos}>Producto</p>
            <p className={resultados}>Fernet 750ML</p>
          </div>
          {linea}

          <div className={contenedores}>
            <div className="flex">
              <img src={iconoCantidad} className={iconoStyle} alt="" />
              <p className={titulos}>Cantidad</p>
            </div>
            <div className="flex items-center mx-auto justify-center">
              <img
                src={SignoMas}
                className="h-10 hover:scale-105 cursor-pointer"
                onClick={sumar}
              />
              <p className="px-3">{cantidad}</p>

              <img
                src={SignoMenos}
                className="h-10 hover:scale-105 cursor-pointer"
                onClick={resta}
              />
            </div>
          </div>
          {linea}

          <div className={contenedores}>
            <div className="flex">
              <img src={IconoCosto} className={iconoStyle} alt="" />
              <p className={titulos}>Costo</p>
            </div>
            <input type="text" placeholder="$500" className={inputText} />
          </div>

          {linea}

          <div className={contenedores}>
            <div className="flex">
              <img src={iconoPrecio} className={iconoStyle} alt="" />
              <p className={titulos}>Precio</p>
            </div>
            <input type="text" placeholder="$1000" className={inputText} />
          </div>
          {linea}

          <div className={contenedores}>
            <div className="flex">
              <img src={iconoEtiqueta} className={iconoStyle} alt="" />
              <p className={titulos}>Categoria</p>
            </div>

            <select name="" id="" className="px-2 py-1 ">
              <option value="Bebidas">Bebidas</option>
              <option value="Bebidas">Comidas</option>
            </select>
          </div>
          {linea}

          <div className="mt-3">
            <div className="flex">
              <img src={iconoExclamacion} className={iconoStyle} alt="" />
              <p className={titulos}>Descripcion</p>
            </div>
            <textarea
              className="w-full p-2 h-24 mt-3"
              placeholder="Aca pones una descripcion que te guste
            "
            ></textarea>
          </div>
        </div>
        <div className="mt-10">
          <BotonPrincipal onClick={handleGuardar} value="Guardar" />
        </div>
      </div>
      {isOpenModal ? (
        <ModalGuardado
          titleModal="Guardado!"
          subtitleModal="Puedes ver los cambios en el Listado."
          buttonLabel="Ir al listado"
          handleClick={handleModalClick}
          handleClickClose={closeModal}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Editar;
