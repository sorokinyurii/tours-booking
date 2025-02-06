"use client";

import Slider from "react-slick";
import slide1 from "@/assets/images/slide1.jpg";
import slide2 from "@/assets/images/slide2.jpg";
import slide3 from "@/assets/images/slide3.jpg";
import slide4 from "@/assets/images/slide4.jpg";
import slide5 from "@/assets/images/slide5.jpg";
import slide6 from "@/assets/images/slide6.jpg";
import Image from "next/image";

export const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    dotsClass: "slick-dots custom-dots",
    customPaging: () => (
      <div className="w-4 h-4 bg-white rounded-full opacity-50 hover:opacity-100 transition" />
    ),
  };

  const images = [slide1, slide2, slide3, slide4, slide5, slide6];

  return (
    <div className="w-[100%] h-[550px] overflow-hidden">
      <Slider {...settings}>
        {images.map((img) => (
          <Image
            key={img.toString()}
            src={img}
            alt="slide picture"
            className="object-cover"
            height={1250}
            width={1250}
          />
        ))}
      </Slider>
    </div>
  );
};
