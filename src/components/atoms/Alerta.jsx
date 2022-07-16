// import React from "react";

// const Alerta = ({ children }) => {
//   return (
//     <div className=" text-center mt-3 bg-red-500  text-white font-bold p-2  uppercase">
//       {children}
//     </div>
//   );
// };

// export default Alerta;

const Alerta = ({ alerta }) => {
  return (
    <div
      className={`${
        alerta.error ? "from-red-400 to-red-600" : "from-sky-400 to-sky-600"
      } bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white font-bold text-sm  `}
    >
      {alerta.msg}
    </div>
  );
};

export default Alerta;
