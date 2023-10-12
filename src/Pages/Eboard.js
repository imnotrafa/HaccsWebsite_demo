import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


// This function gets all values from the folder
const images = require.context('../Eboard-Photos', true);

// what does the .keys().map() do?
const imageList = images.keys().map(image => images(image));
const Eboard = () => {
  return <>
    <h1>This is the Eboard page!</h1>
      {imageList.map((image,index)=> (
        <img src={image}></img>
      ))}
  </>
};

//Make a function that style each photo of the page
export default Eboard;
