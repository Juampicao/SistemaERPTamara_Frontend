import React from "react";
// import { lista1 } from "../../helpers/listas";

const BarraSearch = () => {
  return (
    <div>
      <div>
        <label htmlFor="lista"> Buscar </label>
        {/* <img src={IconoSearch} alt="" /> */}
        <input
          className=""
          type="list"
          name=""
          id="lista"
          placeholder=" Escriba su busqueda.."
          list="pruebaLista"
          // value={valor}
          // onChange={(e) => setValor(e.target.value)}
        />
        <datalist id="pruebaLista">
          <option value="Quilmes"></option>
          <option value="Comida hoy"></option>
          <option value="Heineken"></option>
        </datalist>
      </div>
    </div>
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
