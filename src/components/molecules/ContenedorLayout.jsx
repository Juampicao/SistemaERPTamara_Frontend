import React from "react";

const ContenedorLayout = ({ children }) => {
  return (
    <>
      <div className="p-3 pb-24 xs:p-5 fade-left" data-aos="fade-left">
        {children}
      </div>
    </>
  );
};

export default ContenedorLayout;
