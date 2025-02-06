'use client'

import { Tour } from "@/types/tours";
import Slider from "react-slick";
import { TourCard } from "./tourCard";
import { CustomNextArrow, CustomPrevArrow } from "./customArrows";

interface Props {
  name: string;
  options: Tour[];
}

export const CategorySlider: React.FC<Props> = ({ name, options }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="mb-10">
      <h2 className="font-bold text-[26px] mb-5">{name}</h2>

      <Slider {...settings}>
        {options.map((option) => (
          <TourCard tour={option} key={option.id} />
        ))}
      </Slider>
    </div>
  );
};
