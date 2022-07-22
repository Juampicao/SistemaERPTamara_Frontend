import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { toDay } from "../../../helpers";

import StaticContext from "../../../contexts/StaticProvider";

import iconoCerrar from "../../../img/iconoCerrar.png";

import IconoCosto from "../../../img/iconoCosto.png";
import iconoPrecio from "../../../img/iconoPrecio.png";
import iconoCantidad from "../../../img/iconoCantidad.png";
import iconoEtiqueta from "../../../img/iconoEtiqueta.png";
import iconoExclamacion from "../../../img/iconoExclamacion3.png";
import { BotonPrimario } from "../../atoms/Botones";
import { BotonNegroRedondeado } from "../../../helpers/colores";

import Error from "../../atoms/Error";

const FormularioProducto = () => {
  const {
    producto,
    setProducto,
    isOpenSaveModal,
    setIsOpenSaveModal,
    isOpenErrorModal,
    setIsOpenErrorModal,
  } = useContext(StaticContext);

  const navigate = useNavigate();
  const location = useLocation();
  const urlActual = location.pathname;

  // Resetear el state Gasto.
  if (urlActual.includes("nuevoproducto")) {
    setProducto("");
  }

  const [nombreProducto, setNombreProducto] = useState("");
  const [imagen, setImagen] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState("");
  const [costo, setCosto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [error, setError] = useState(false);

  const { _id } = producto;

  useEffect(() => {
    if (producto?._id) {
      setNombreProducto(producto.nombreProducto);
      setImagen(producto.imagen);
      setCantidad(producto.cantidad);
      setPrecio(producto.precio);
      setCosto(producto.costo);
      setCategoria(producto.categoria);
      setFecha(producto.fecha);
      setDescripcion(producto.descripcion);

      return;
    }
    setNombreProducto("");
    setImagen("");
    setCantidad(1);
    setPrecio("");
    setCosto("");
    setCategoria("Bebidas");
    setFecha("");
    setDescripcion("");
  }, [producto]);

  // Funcion Cerrar Edit
  const handleClickClose = () => {
    console.log("cerrando..");
    setProducto("");
    navigate(`/productos`);
  };

  // Funcion Sumar y RestarCantidad
  const sumar = () => {
    setCantidad(cantidad + 1);
    console.log("sumando ");
  };
  const resta = () => {
    setCantidad(cantidad - 1);
    console.log("Restando.. ");
  };

  // Prueba con AXIOS
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (_id) {
        const respuesta = await axios.put(
          `${import.meta.env.VITE_API_URL}/productos/${_id}`,
          {
            nombreProducto,
            cantidad,
            precio,
            costo,
            categoria,
            fecha,
            descripcion,
          }
        );
        console.log(respuesta);
        setProducto("");
        navigate("/productos");
        setIsOpenSaveModal(true);
      } else {
        // Validacion del formulario
        if (
          [nombreProducto, cantidad, precio, costo, categoria, fecha].includes(
            ""
          )
        ) {
          console.log("Completa todos los casilleros por favor.");
          setError(true);
        }
        const respuesta = await axios.post(
          `${import.meta.env.VITE_API_URL}/productos`,
          {
            nombreProducto,
            cantidad,
            precio,
            costo,
            categoria,
            fecha,
            descripcion,
          }
        );
        console.log(respuesta);
        navigate("/productos");
        setIsOpenSaveModal(true);
        setProducto("");
      }
    } catch (error) {
      console.log(error);
      setIsOpenErrorModal(!isOpenErrorModal);
    }
  };

  // Styles
  const contenedores = "flex justify-between items-center ";
  const titulos = "font-semibold";
  const resultados = "text-gray-500 dark:text-gray-200";
  const inputText = "px-2 py-2 w-1/2 text-center content-end	 ";
  const iconoStyle = "h-5 items-center my-auto pr-2";

  const linea = <div className="h-[2px] w-full mx-auto bg-slate-500"> </div>;

  return (
    <div>
      <Outlet />
      <div
        data-aos="fade-left"
        className="  bg-half-transparent w-screen fixed nav-item top-0 right-0  "
      >
        <div className="overflow-y-scroll	h-screen float-right duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white  md:w-[300px] p-8">
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
              <p className="font-semibold text-lg">
                {producto?._id ? "Editar Producto" : "Nuevo Producto"}
              </p>
            </div>
          </div>

          <div className="my-3 space-y-5">
            <div className="flex">
              <div className="mx-auto border border-black  ">
                <input
                  type="image"
                  src={imagen}
                  alt={`imagen de ${nombreProducto}`}
                  className="h-32 mx-auto cursor-pointer hover:scale-110 duration-150"
                />
              </div>
            </div>
            {error && <Error mensaje="Completa todos los campos" />}

            <div className={contenedores}>
              <p className={titulos}>Producto</p>
              {/* <p className={resultados}>Fernet 750ML</p> */}
              <input
                id="empresa"
                type="text"
                placeholder="Nombre"
                className={inputText}
                name="nombre"
                value={nombreProducto}
                onChange={(e) => setNombreProducto(e.target.value)}
              />
            </div>
            {linea}

            <div className={contenedores}>
              <div className="flex">
                <img src={iconoCantidad} className={iconoStyle} alt="" />
                <p className={titulos}>Cantidad</p>
              </div>
              {/* <div className="flex items-center mx-auto justify-center"> */}

              <input
                className={inputText}
                type="number"
                placeholder="1"
                value={cantidad}
                onChange={(e) => setCantidad(Number(e.target.value))}
              />
              {/* <img
                  src={SignoMas}
                  className="h-10 hover:scale-105 cursor-pointer"
                  onClick={sumar}
                />

                <img
                  src={SignoMenos}
                  className="h-10 hover:scale-105 cursor-pointer"
                  onClick={resta}
                  /> */}
              {/* <p className="px-3">{producto.cantidad}</p> */}
            </div>
            {linea}

            <div className={contenedores}>
              <div className="flex">
                <img src={IconoCosto} className={iconoStyle} alt="" />
                <p className={titulos}>Costo</p>
              </div>
              <input
                type="text"
                placeholder="$"
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
                placeholder="$"
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

              <select
                name=""
                id=""
                className="px-2 py-1 "
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="Bebidas">Bebidas</option>
                <option value="Comidas">Comidas</option>
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
                value={producto.descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="mt-10">
            <BotonPrimario
              onClick={handleSubmit}
              value={
                urlActual.includes("editar")
                  ? "Guardar Producto"
                  : "Crear Producto"
              }
              Color={BotonNegroRedondeado}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioProducto;
