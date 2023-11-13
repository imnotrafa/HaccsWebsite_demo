import React from "react";
//import Button from "react-bootstrap/Button";
//import Card from "react-bootstrap/Card";
import eboard from "./eboard_style.module.css";

// This function gets all values from the folder
const images = require.context("../Eboard-Photos", true);
// what does the .keys().map() do?
const imageList = images.keys().map((image) => {
  const img_url = images(image);
  //Just get the names of each image added
  const img_name = image
    .split("/")
    .pop()
    .replace(/\.jpg$/, "");
  return { url: img_url, name: img_name };
});

const linkedins_and_names = {
  Rafael: {
    Position: "Public Relations",
    Linkedin: "https://www.linkedin.com/in/rafael--abreu/",
  },
  Michelle: {
    Position: "President",
    Linkedin: "https://www.linkedin.com/in/michelleabautista/",
  },
  Leslie: {
    Position: "Vice President",
    Linkedin: "https://www.linkedin.com",
  },
  Jason: {
    Position: "Educational Coordinator",
    Linkedin: "https://www.linkedin.com/in/jason-morales-d/",
  },
  Gabriel: {
    Position: "Secretary",
    Linkedin: "https://www.linkedin.com",
  },
  Angel:
  {
    Position: "Treasurer",
    Linkedin: "https://www.linkedin.com"
  },
  Nickole:
  {
    Position: "Social Media Coordinator",
    Linkedin: "https://www.linkedin.com"
  }
};
const Eboard = () => {
  return (
    <>
      <h1 className={eboard.haccs}>Meet Our Eboard 2023-2024</h1>
      <div className={eboard.main_container}>
        <div className={eboard.member}>
          <h1 id="Position">{linkedins_and_names[imageList[4].name].Position}</h1>
          <div>
            <a className={eboard.link} href={linkedins_and_names[imageList[4].name].Linkedin} target="_blank">
                      <img src={imageList[4].url} className={eboard.main_img}
                      alt="pic"></img></a>
          </div>
          <p id="Name" className={eboard.name}>{imageList[4].name}</p>
        </div>
        <div className={eboard.member}>
          <h1 id="Position">{linkedins_and_names[imageList[3].name].Position}</h1>
          <div>
            <a className={eboard.link} href={linkedins_and_names[imageList[3].name].Linkedin} target="_blank">
                      <img src={imageList[3].url} className={eboard.main_img}
                      alt="pic"></img></a>
          </div>
          <p id="Name" className={eboard.name}>{imageList[3].name}</p>
        </div>
        <div className={eboard.Secretary}>
          <h1 id="Position">{linkedins_and_names[imageList[1].name].Position}</h1>
          <div>
            <a className={eboard.link} href={linkedins_and_names[imageList[1].name].Linkedin} target="_blank">
                      <img src={imageList[1].url} className={eboard.main_img}
                      alt="pic"></img></a>
          </div>
          <p id="Name" className={eboard.name}>{imageList[1].name}</p>
        </div>
        <div className={eboard.member}>
          <h1 id="Position">{linkedins_and_names[imageList[0].name].Position}</h1>
          <div>
            <a className={eboard.link} href={linkedins_and_names[imageList[0].name].Linkedin} target="_blank">
                      <img src={imageList[0].url} className={eboard.main_img}
                      alt="pic"></img></a>
          </div>
          <p id="Name" className={eboard.name}>{imageList[0].name}</p>
        </div>
        <div className={eboard.member}>
          <h1 id="Position">{linkedins_and_names[imageList[2].name].Position}</h1>
          <div>
            <a className={eboard.link} href={linkedins_and_names[imageList[2].name].Linkedin} target="_blank">
                      <img src={imageList[2].url} className={eboard.main_img}
                      alt="pic"></img></a>
          </div>
          <p id="Name" className={eboard.name}>{imageList[2].name}</p>
        </div>

        <div className={eboard.member}>
          <h1 id="Position">{linkedins_and_names[imageList[6].name].Position}</h1>
          <div>
            <a className={eboard.link} href={linkedins_and_names[imageList[6].name].Linkedin} target="_blank">
                      <img src={imageList[6].url} className={eboard.main_img}
                      alt="pic"></img></a>
          </div>
          <p id="Name" className={eboard.name}>{imageList[6].name}</p>
        </div>
        <div className={eboard.member}>
          <h1 id="Position">{linkedins_and_names[imageList[5].name].Position}</h1>
          <div>
            <a className={eboard.link} href={linkedins_and_names[imageList[5].name].Linkedin} target="_blank">
                      <img src={imageList[5].url} className={eboard.main_img}
                      alt="pic"></img></a>
          </div>
          <p id="Name" className={eboard.name}>{imageList[5].name}</p>
        </div>
      </div>
      
    </>
  );
};
//make sure that links are adding dynamically to each image based on the names
export default Eboard;
