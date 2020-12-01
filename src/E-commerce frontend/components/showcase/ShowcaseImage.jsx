import React from "react";
import { useState } from "react";
import background2 from "../../assets/images/background2.jpg";
import back1 from "../../assets/images/back1.jpg";
import back2 from "../../assets/images/back2.jpg";
import back3 from "../../assets/images/back3.jpg";
import { useEffect } from "react";

const ShowcaseImage = () => {
  const [image, setImage] = useState(background2);
  const backgroundImages = [back1, back2, back3];

  const randomImages = () => {
    let rand = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    setImage(backgroundImages[rand]);
  };

  useEffect(() => {
    setTimeout(randomImages, 3000);
  });

  return (
    <div className="showCaseImage d-flex justify-content-center ">
      <img
        className="image-responsive image-fluid spotImage"
        src={image}
        alt="show case"
      />
    </div>
  );
};

export default ShowcaseImage;
