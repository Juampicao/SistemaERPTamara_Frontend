import React from "react";

const Boton = ({ titleButton, handleClick }) => {
  // Styles
  const BotonStyle =
    "bg-black hover:bg-white hover:text-black hover:border hover:border-black text-white px-2 py-3 w-full mx-auto uppercase text-xs  font-bold uppercase cursor-pointer hover:scale-x-105 hover:duration-150 duration-150 ";
  const BotonColorStyle = "";

  return (
    <>
      <input
        type="submit"
        className={BotonStyle}
        value={titleButton}
        onClick={handleClick}
      />
    </>
  );
};

export default Boton;
