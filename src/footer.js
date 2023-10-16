import logo from "./HACCS_Logo.png";
import React from "react";
import "./footer.css";

const footer = () => {
  return (
    <>
      <div className="contact-logo">
        <img src={logo} alt="HACCS Logo"></img>
      </div>
    </>
  );
};

export default footer;
