import React from "react";
import { Carousel } from "react-bootstrap";

export const Slider: React.FC = () => {
  return (
    <div className="slider">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/slider-imgs/slider-img-1.webp"
            alt="First Shoe"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/slider-imgs/slider-img-2.webp"
            alt="Second Shoe"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/slider-imgs/slider-img-3.webp"
            alt="Third Shoe"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
