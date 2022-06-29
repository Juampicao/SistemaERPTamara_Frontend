import React from "react";

const Header = ({ title }) => {
  const titleStyle =
    "text-4xl font-sans font-bold text-gray-800 text-center my-4";
  return (
    <div>
      <h1 className={titleStyle}>{title}</h1>
    </div>
  );
};

export default Header;
