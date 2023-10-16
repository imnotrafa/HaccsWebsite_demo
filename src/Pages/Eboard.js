import React from "react";
//import Button from "react-bootstrap/Button";
//import Card from "react-bootstrap/Card";
import eboard from "./eboard_style.module.css";
import { linearProgressClasses } from "@mui/material";

// This function gets all values from the folder
const images = require.context("../Eboard-Photos", true);
console.log(images.keys())
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
  Position:"President",
  Linkedin: "https://www.linkedin.com/in/michelleabautista/"
},
  "Leslie":{
    Position:"Vice-President",
    Linkedin:"https://www.linkedin.com"

  },
  "Jason":{
    Position:"Educational coordinator",
    Linkedin:"https://www.linkedin.com/in/jason-morales-d/"
  },
  "Gabriel":{
    Position:"Secretary",
    Linkedin:"https://www.linkedin.com"
  }
};
const Eboard = () => {
  return (
    <>
      <h1 className={eboard.haccs}>Meet Our Eboard 2023-2024</h1>
      <div className={eboard.container}>
          {imageList.map((image, index) => (
            <div>
              <h1 id="Position">{linkedins_and_names[image.name].Position}</h1>
              <div>
                <a className={eboard.link} href={linkedins_and_names[image.name].Linkedin} target="_blank"><img src={image.url} className={eboard.main_img} alt="pic"></img></a>
              </div>
              <p id="Name">{image.name}</p>
            </div>
          ))}
      </div>
    </>
  );
};
//make sure that links are adding dynamically to each image based on the names
export default Eboard;
