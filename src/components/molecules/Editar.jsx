import React, { useState, useContext, useEffect } from "react";

import { Outlet, useNavigate, useParams } from "react-router-dom";

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
import { BotonPrimario } from "../atoms/Botones";
import { BotonNegroClasicoSinZoom } from "../../helpers/colores";

const Editar = () => {
  const {
    isOpenEdit,
    setIsOpenEdit,
    isOpenSaveModal,
    setIsOpenSaveModal,
    producto,
    setProducto,
    isCargando,
    setIsCargando,
    handleModalClick,
  } = useContext(StaticContext);
  // Estados locales
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [costo, setCosto] = useState("");
  const [precio, setPrecio] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState("");

  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  const { id } = useParams();

  // Llamado a la base de datos
  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/productos/${id}`;
        // const url = `${import.meta.env.API_URL}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setProducto(resultado);
        // console.log(resultado);
      } catch (error) {
        console.log(error);
      }
      setIsCargando(!isCargando);
    };
    obtenerClienteAPI();
  }, []);

  useEffect(() => {
    if (Object.keys(producto).length > 0) {
      setNombre(producto.nombre);
      setCantidad(producto.cantidad);
      setCosto(producto.costo);
      setPrecio(producto.precio);
      setCategoria(producto.categoria);
      setDescripcion(producto.descripcion);
      setImagen(producto.imagen);
    }
  }, [producto]);

  const objetoProducto = {
    nombre,
    cantidad,
    costo,
    precio,
    categoria,
    descripcion,
    imagen,
  };

  // Guardando en base de datos
  // const handleGuardar = async (valores) => {
  //   try {
  //     // let respuesta;
  //     // if (producto.id) {
  //     // Editando un registro
  //     const url = `http://localhost:4000/productos/${producto.id}`;
  //     let respuesta = await fetch(url, {
  //       method: "PUT",
  //       body: JSON.stringify(valores),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     // }

  //     await respuesta.json();
  //     navigate("/productos");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // Funcion Guardar Edit
  const handleGuardar = () => {
    console.log("guardando..");
    setIsOpenSaveModal(true);
    setIsOpenEdit(!isOpenEdit);
    navigate(`/productos`);
  };
  // Funcion Cerrar Edit
  const handleClickClose = () => {
    console.log("cerrando..");
    setIsOpenEdit(!isOpenEdit);
    navigate(`/productos`);
  };

  // Funcion Sumar y RestarCantidad
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

  // console.log(producto);
  // console.log(objetoProducto);

  return (
    <>
      <Outlet />
      <div
        data-aos="fade-left"
        className="  bg-half-transparent w-screen fixed nav-item top-0 right-0  "
      >
        <div className="overflow-y-scroll	h-screen float-right h-screen  duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white  md:w-[300px] p-8">
          <div className="flex justify-between">
            <div className="flex items-center  justify-center h-10 w-10 rounded-full bg-slate-200">
              <button onClick={handleClickClose}>
                <img
                  src={iconoCerrar}
                  alt="cerrar"
                  className=" hover:scale-110 hover:duration-200  "
                />
              </button>
            </div>

            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg">Editar Producto</p>
            </div>
          </div>

          <div className="my-3 space-y-5">
            <div className="flex">
              <div className="mx-auto border border-black  ">
                <input
                  type="image"
                  src={imagen}
                  alt={`imagen de ${nombre}`}
                  className="h-32 mx-auto cursor-pointer hover:scale-110 duration-150"
                />
              </div>
            </div>
            <div className={contenedores}>
              <p className={titulos}>Producto</p>
              {/* <p className={resultados}>Fernet 750ML</p> */}
              <input
                id="empresa"
                type="text"
                placeholder="Nombre"
                className={inputText}
                name="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
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
              <input
                type="text"
                placeholder="$500"
                className={inputText}
                value={costo}
                onChange={(e) => setCosto(e.target.value)}
              />
            </div>

            {linea}

            <div className={contenedores}>
              <div className="flex">
                <img src={iconoPrecio} className={iconoStyle} alt="" />
                <p className={titulos}>Precio</p>
              </div>
              <input
                type="text"
                placeholder="$1000"
                className={inputText}
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
              />
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
                className="w-full p-2 h-24 mt-3 border border-slate-300"
                placeholder="Aca pones una descripcion que te guste
            "
              ></textarea>
            </div>
          </div>
          <div className="mt-10">
            <BotonPrimario
              onClick={handleGuardar}
              value="Guardar"
              Color={BotonNegroClasicoSinZoom}
            />
          </div>
        </div>
        {isOpenSaveModal ? (
          <ModalGuardado
            titleModal="Guardado!"
            subtitleModal="Puedes ver los cambios en el Listado."
            buttonLabel="Ir al listado"
            handleClick={handleModalClick}
            // handleClickClose={closeModal}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Editar;
