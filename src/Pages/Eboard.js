import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import eboard from "./eboard_style.module.css";

// This function gets all values from the folder
const images = require.context("../Eboard-Photos", true);
// what does the .keys().map() do?
const imageList = images.keys().map((image) => {
  const img_url =images(image)
  //Just get the names of each image added
  const img_name = image.split('/').pop().replace(/\.jpg$/,'');
  return {url:img_url,name: img_name};
});
  
const linkedins_and_names = {
  "Rafael":{
  Position:"Publics Relations",
  Linkedin: "https://www.linkedin.com/in/rafael--abreu/",
},
  "Michelle":{
  FirstName:"President",
  Linkedin: "https://www.linkedin.com/in/michelleabautista/"
},
}
const Eboard = () => {
  return (
    <>
      <h1>Meet Our Eboard 2023-2024</h1>
      <div className={eboard.container}>
          {imageList.map((image, index) => (
            <div key={index}>
              <h1>{image.name}</h1>
              
              <a href={linkedins_and_names[image.name]}><img src={image.url} className={eboard.main_img} alt="pic"></img></a>
            </div>
          ))}
      </div>
    </>
  );
};
//make sure that links are adding dynamically to each image based on the names
export default Eboard;
