import React from "react";
<<<<<<< HEAD
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
=======
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import eboard from './eboard_style.module.css';

>>>>>>> 0677d7cfee9c8721e56ed1b6ee07531698b3edcb

// This function gets all values from the folder
const images = require.context('../Eboard-Photos', true);

// what does the .keys().map() do?
const imageList = images.keys().map(image => images(image));
const Eboard = () => {
<<<<<<< HEAD
  return (
    <>
      <h1>This is the Eboard page!</h1>
      {["src1", "src2", "src3", "src4", "src5", "src6"].map((img) => (
        <img src={img} alt="NA"></img>
      ))}
      <br></br>
    </>
  );
=======
  return <>
    <h1>Meet Our Eboard 2023-2024</h1>
    <div className={eboard.container}>
      {imageList.map((image,index)=> (
        <img src={image} className={eboard.main_img}></img>
      ))}
    </div>
  </>
>>>>>>> 0677d7cfee9c8721e56ed1b6ee07531698b3edcb
};
//Make a function that style each photo of the page
export default Eboard;
