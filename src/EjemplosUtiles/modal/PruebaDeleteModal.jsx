import React from "react";
import iconoCerrar from "../../img/iconoCerrar.png";

const PruebaDeleteModal = () => {
  return (
    <div>
      <div
        id="ModalEliminado"
        data-aos="fade-right"
        className="top-10 right-20 fixed border shadow-lg rounded-md bg-white p-5 mx-auto"
      >
        <button onClick={() => {}}>
          <img
            src={iconoCerrar}
            alt="cerrar"
            className=" hover:scale-110 hover:duration-200 "
          />
        </button>
        <div className="mb-1 text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-slate-200">
            <svg
              className="h-6 w-6 text-green-600 mx-auto items-center absolute"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
            <img
              //   src={iconoDelete}
              alt="cerrar"
              className=" hover:scale-110 hover:duration-200 h-8 "
            />
          </div>

          <h3 className="text-lg mt-2 leading-6 font-medium text-gray-900">
            {/* {titleModal} */}
          </h3>
          <div className="mt-2 px-7 py-3">
            {/* <p className="text-sm text-gray-500">{subtitleModal}</p> */}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              ducimus libero molestiae voluptas rem totam quae sit debitis
              nulla, temporibus tenetur facilis veniam ullam eius deleniti enim
              quaerat facere aliquid illo at, itaque non odio neque veritatis?
              Repudiandae, alias molestiae.
            </p>
          </div>
          <div className="items-center px-4 py-3">
            <button
              //   onClick={handleClick}
              id="ok-btn"
              className="uppercase px-4 py-2 bg-slate-400 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-slate-500 hover:scale-105 hover:duration-200 focus:outline-none focus:ring-2 focus:ring-slate-300 active:hover:bg-slate-700 active:text-white"
            >
              {/* {buttonLabel} */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PruebaDeleteModal;
