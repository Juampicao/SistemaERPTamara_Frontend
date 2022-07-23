import axios from "axios";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./BarraSearch.css";

import getActiveToken from "./../../helpers/getActiveToken.js";

const BarraSearch = ({ onClick, placeholder }) => {
  // const data = ["River", "Velez", "Boca"];

  return (
    <div>
      <div className="input-wrapper">
        <input
          type="search"
          className="input rounded-2xl p-3 pl-5 pr-10 cursor-pointer"
          placeholder={placeholder}
          // list="pruebaLista"
          onClick={onClick}
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
  /* MiduAutcomplete */
}
{
  /* <main className="container">
        <section className="box">
          <div className="box-body">
            <aside className="box-avatar">
              <img src="https://unavatar.io/twitter/midudev" alt="midudev" />
            </aside>

            <div className="box-compose">
              <form>
                <textarea
                  placeholder="¿Qué está pasando?"
                  className="box-textbox"
                  onKeyUp={() => {}}
                  onClick={() => {}}
                  // ref={inputRef}
                />
              </form>
              {showautoComplete && <autoComplete />}
            </div>
          </div>

          <footer className="box-footer">
            <button type="submit" className="tweet-button">
              Twittear
            </button>
          </footer>
        </section>
      </main> */
}
{
  /* MiduAutcomplete */
}

{
  /* <input
        className="my-3 w-full"
        type="text"
        onChange={(e) => onChangeHandler(e.target.value)}
        value={text}
      /> */
}
{
  /* Otro */
}
{
  /* <select name="" id="">
        <option value=""> --- </option>
        {data.map((el) => (
          <option value={el}> {el} </option>
        ))}
      </select> */
}

// const [users, setUsers] = useState([]);
// const [text, setText] = useState("");
// const [suggestions, setSuggestions] = useState([]);

// useEffect(() => {
//   const loadGastos = async () => {
//     const respuesta = await axios.get(
//       `${import.meta.env.VITE_API_URL}/gastos`
//     );
//     console.log(respuesta.data);
//     setUsers(respuesta.data);
//   };
//   loadGastos();
// }, []);

// const onChangeHandler = (text) => {
//   let matches = [];
//   if (text.length > 0) {
//     matches = users.filter((user) => {
//       const regex = new RegExp(`${text}`, "gi");
//       // return users.nombre.match(regex);
//       return (users.nombre = regex);
//       console.log((users.nombre = regex));
//       console.log(`matches`, matches);
//     });
//   }
//   setSuggestions(matches);
//   setText(text);
// };

// const [showautoComplete, setShowautoComplete] = useState(false);
// const inputRef = useRef();
// const handleInput = () => {
//   const { value, selectionEnd = 0 } = inputRef.current;
//   const { word } = getActiveToken(value, selectionEnd);
//   const shouldOpenautoComplete = /^@\w{1,15}$/.test(word);
//   setShowautoComplete(shouldOpenautoComplete);
// };
