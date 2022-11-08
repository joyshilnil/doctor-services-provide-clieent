import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../../../assets/slide1.jpg";
import slide2 from "../../../assets/slide2.jpg";
import slide3 from "../../../assets/slide3.jpg";

const Banner = () => {
  return (
    // style={{ width: '100vh' }}
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 h-100" src={slide1} alt="First slide" />
        <Carousel.Caption>
          <h1 style={{ fontSize: "90px" }} className="text-black fw-bolder">
            Friendly Gentle Dentist
          </h1>
          <p className="text-black">
            Our number one goal is to make sure every one of our patients leaves
            100% <br /> happy and with a bright, white smile on their face!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide2} alt="Second slide" />

        <Carousel.Caption>
          <h1 style={{ fontSize: "90px" }} className="text-black fw-bolder">
            Friendly Gentle Dentist
          </h1>
          <p className="text-black">
            Our number one goal is to make sure every one of our patients leaves
            100% <br /> happy and with a bright, white smile on their face!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide3} alt="Third slide" />

        <Carousel.Caption>
          <h1 style={{ fontSize: "90px" }} className="text-black fw-bolder">
            Friendly Gentle Dentist
          </h1>
          <p className="text-black">
            Our number one goal is to make sure every one of our patients leaves
            100% <br /> happy and with a bright, white smile on their face!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
