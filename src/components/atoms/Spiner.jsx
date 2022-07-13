import React from "react";
import { useContext } from "react";
import StaticContext from "../../contexts/StaticProvider";

import "./spiner.css";

export const Spiner = () => {
  const { setIsCargando, isCargando } = useContext(StaticContext);

  return (
    <div>
      <div className="sk-circle p-5">
        <div className="sk-circle1 sk-child"></div>
        <div className="sk-circle2 sk-child"></div>
        <div className="sk-circle3 sk-child"></div>
        <div className="sk-circle4 sk-child"></div>
        <div className="sk-circle5 sk-child"></div>
        <div className="sk-circle6 sk-child"></div>
        <div className="sk-circle7 sk-child"></div>
        <div className="sk-circle8 sk-child"></div>
        <div className="sk-circle9 sk-child"></div>
        <div className="sk-circle10 sk-child"></div>
        <div className="sk-circle11 sk-child"></div>
        <div className="sk-circle12 sk-child"></div>
      </div>
    </div>
  );
};

export default Spiner;
