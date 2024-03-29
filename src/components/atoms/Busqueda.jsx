import { Fragment, useState } from "react";
import { Combobox, Dialog, Transition } from "@headlessui/react";

import StaticContext from "../../contexts/StaticProvider";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Busqueda = ({ urlDestino }) => {
  const { gastos, ventas, productos, gasto, venta, producto, buscador, handleBuscador } =
    useContext(StaticContext);
  const [productoABuscar, setProductoABuscar] = useState();


  

  const urlActual = location.pathname;
  const navigate = useNavigate();

  const [busqueda, setBusqueda] = useState("");

  const ventasFiltradas =
    busqueda === ""
      ? []
      : ventas.filter((venta) =>
          venta.producto.toLowerCase().includes(busqueda.toLowerCase())
        );
  const gastosFiltrados =
    busqueda === ""
      ? []
      : gastos.filter((gasto) =>
          gasto.nombre.toLowerCase().includes(busqueda.toLowerCase())
        );

  const productosFiltrados =
    busqueda === ""
      ? []
      : productos.filter((producto) =>
          producto.nombreProducto.toLowerCase().includes(busqueda.toLowerCase())
        );

  return (
    <Transition.Root
      show={buscador}
      as={Fragment}
      afterLeave={() => setBusqueda("")}
    >
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto mt-20 p-4 sm:p-20 md:p-20"
        onClose={handleBuscador}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Combobox
            as="div"
            className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
            // onChange={
            //   urlActual.includes("producto")
            //     ? (producto) => {
            //         producto._id
            //           ? (window.location = `/productos/${producto._id}`)
            //           : (window.location = `/productos`);
            //       }
            //     : (gasto) => (window.location = `/gastos/`)
            // }

    

            onChange={()=> window.location = urlDestino}
         
            // onChange={() => window.location = `/ventas/${venta._id}`}
            // onChange={()=> window.location = `/productos/${producto._id}`}
            // onChange={()=> window.location = `/gastos/${gasto._id}`}
            

          >
            <div className="relative">
              <Combobox.Input
                className="h-12 w-full border-0 bg-transparent pl-4 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm"
                placeholder="Buscar..."
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </div>

            {urlActual.includes("gasto")
              ? gastosFiltrados.length > 0 && (
                  <Combobox.Options
                    static
                    className="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
                  >
                    {gastosFiltrados.map((gasto) => (
                      <Combobox.Option
                        key={gasto._id}
                        value={gasto}
                        className={({ active }) =>
                          classNames(
                            "cursor-default select-none px-4 py-2",
                            active && "bg-sky-600 text-white"
                          )
                        }
                      >
                        {gasto.nombre}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                )
              : urlActual.includes("venta")
              ? ventasFiltradas.length > 0 && (
                  <Combobox.Options
                    static
                    className="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
                  >
                    {ventasFiltradas.map((venta) => (
                      <Combobox.Option
                        key={venta._id}
                        value={venta.producto}
                        className={({ active }) =>
                          classNames(
                            "cursor-default select-none px-4 py-2",
                            active && "bg-sky-600 text-white"
                          )
                        }
                      >
                        {venta.producto}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                )
              : urlActual.includes("productos")
              ? productosFiltrados.length > 0 && (
                  <Combobox.Options
                    static
                    className="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
                  >
                    {productosFiltrados.map((producto) => (
                      <Combobox.Option
                        key={producto._id}
                        value={producto.nombreProducto}
                        className={({ active }) =>
                          classNames(
                            "cursor-default select-none px-4 py-2",
                            active && "bg-sky-600 text-white"
                          )
                        }
                      >
                        {producto.nombreProducto}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                )
              : ""}
            {/* const color = d.y >= 70 ? "green" : (d.y < 50 ? "red" : "yellow"); */}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default Busqueda;
