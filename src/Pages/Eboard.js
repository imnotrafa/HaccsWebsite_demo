import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Eboard = () => {
  return (
    <>
      <h1>This is the Eboard page!</h1>
      {["src1", "src2", "src3", "src4", "src5", "src6"].map((img) => (
        <img src={img} alt="NA"></img>
      ))}
      <br></br>
    </>
  );
};

//Make a function that h

export default Eboard;
