import React from "react";
import "./lessonimage.css";
import cesar from "../images/cesar.png";
import coins from "../images/coins.png";
import romulus from "../images/romulus.png";
import whitestatues from "../images/whitestatues.png";
import dome from "../images/dome.png";
import collesium from "../images/collesium.png";
import agustus from "../images/agustus.png";

function LessonImage() {
  const images = [cesar, coins, romulus,whitestatues,dome,collesium,agustus];

  // Generate a random index within the range of the images array
  const randomIndex = Math.floor(Math.random() * images.length);

  // Get the random image using the random index
  const randomImage = images[randomIndex];

  return (
    <div className="LessonImage-box">
      <img src={randomImage} alt="Description of the image" className="LessonImage" />
    </div>
  );
}

export default LessonImage;
