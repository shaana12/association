import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

import bg1 from "../assets/bg--.png";
import bg2 from "../assets/bg-.png";
import bg3 from "../assets/bg-image.png";
import bg4 from "../assets/bg-image2.png";
import bg5 from "../assets/bg.png";

const images = [bg1, bg2, bg3, bg5];

const SampleNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="absolute top-1/2 right-2 z-10 cursor-pointer text-white" onClick={onClick}>
      <ChevronRight size={32} />
    </div>
  );
};

const SamplePrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="absolute top-1/2 left-2 z-10 cursor-pointer text-white" onClick={onClick}>
      <ChevronLeft size={32} />
    </div>
  );
};

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />, // Flèche personnalisée
    prevArrow: <SamplePrevArrow />, // Flèche personnalisée
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 md:max-h-[50vh]  sm:max-h-[40vh] max-h-[30vh]">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="flex  justify-center">
            <img 
              src={src} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-auto sm:max-h-[40vh] max-h-[30vh] rounded-lg object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;