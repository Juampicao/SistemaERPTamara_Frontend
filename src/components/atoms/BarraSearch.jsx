import React from "react";
// import { lista1 } from "../../helpers/listas";
import IconoSearch from "../../img/iconSearch.png";
import "./BarraSearch.css";
const BarraSearch = () => {
  const data = ["River", "Velez", "Boca"];

  return (
    <div>
      {/* <select name="" id="">
        <option value=""> --- </option>
        {data.map((el) => (
          <option value={el}> {el} </option>
        ))}
      </select> */}
      <datalist id="pruebaLista">
        <option value="Quilmes"></option>
        <option value="Comida hoy"></option>
        <option value="Heineken"></option>
      </datalist>

      <div className="input-wrapper">
        <input
          type="search"
          className="input rounded-2xl p-3 pl-5 pr-10 "
          placeholder="Search Here"
          list="pruebaLista"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="input-icon"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
    // </div>
  );
};

export default BarraSearch;
{
  /* <input
        type="search"
        className="border border-slate-500 rounded px-2"
        list="browsers"
      /> */
}

{
  /* <datalist className="">
  {producto.map((gasto) => (
    <Gasto key={gasto.id} gasto={gasto} />
  ))}
</datalist>; */
}
