'use client'

import Slider from "react-slick";
import { CustomNextArrow, CustomPrevArrow } from "./customArrows";
import { SkeletonCard } from "./skeletonCard";

interface Props {
  name: string;
}

export const skeletonCards = Array.from({ length: 10 }, (_, index) => (
  <SkeletonCard key={index} />
));


export const SkeletonSlider: React.FC<Props> = ({ name }) => {
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
        {skeletonCards}
      </Slider>
    </div>
  );
};
