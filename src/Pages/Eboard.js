import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import eboard from './eboard_style.module.css';


// This function gets all values from the folder
const images = require.context('../Eboard-Photos', true);

// what does the .keys().map() do?
const imageList = images.keys().map(image => images(image));
const Eboard = () => {
  return <>
    <h1>Meet Our Eboard 2023-2024</h1>
    <div className={eboard.container}>
      {imageList.map((image,index)=> (
        <img src={image} className={eboard.main_img}></img>
      ))}
    </div>
  </>
};
//Make a function that style each photo of the page
export default Eboard;
