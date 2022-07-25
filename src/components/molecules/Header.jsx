import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = ({ title }) => {
  const urlActual = location.pathname;

  const titleStyle =
    "text-slate-300 text-3xl sm:text-4xl font-sans font-bold xs:text-gray-800 text-center xs:py-4";

  return (
    <div>
      {/* <div className="text-white w-full  bg-gradient-to-t  from-gray-700 via-gray-900 to-black rounded-b-2xl xs:rounded-none duration-300 py-3  xs:py-0 xs:bg-slate-100 fixed top-0 relative"> */}
     
      <div className="text-white w-full  bg-gradient-to-t  from-gray-700 via-gray-900 to-black rounded-b-2xl xs:rounded-none duration-300 py-3  xs:py-0 xs:bg-slate-100 xs:from-slate-100 xs:via-gray-slate-100 xs:to-slate-100 fixed top-0 relative">
        <h1 className={`${titleStyle}`}>{title}</h1>
      </div>
    </div>
  );
};

export default Header;
