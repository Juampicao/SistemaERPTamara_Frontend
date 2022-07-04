import React from "react";
import FormularioGasto from "./FormularioGasto";
import ModalGasto from "./ModalGasto";

const EditarGasto = () => {
  return (
    <div>
      <div
        data-aos="fade-left"
        className="  bg-half-transparent w-screen fixed nav-item top-0 right-0  "
      >
        <div className="overflow-y-scroll	h-screen float-right h-screen  duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white  md:w-[300px] p-8">
          <FormularioGasto />
        </div>
      </div>
    </div>
  );
};

export default EditarGasto;
