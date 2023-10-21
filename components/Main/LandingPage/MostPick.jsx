"use client";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const PlaceItem = ({ place, firstItemRef }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl group ${
        firstItemRef ? "md:row-span-2" : ""
      } group`}
    >
      <Image
        src={place.imageUrl}
        alt={place.name}
        width={327}
        height={215}
        draggable={false}
        className="w-full h-full object-auto scale-105 group-hover:scale-100 transition-all duration-300"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent  to-[rgba(0,0,0,0.50)] flex flex-col justify-between">
        <span className="bg-pink-500 rounded-bl-2xl w-max self-end py-2 px-7 text-white leading-[1.7em] font-light">
          <strong className="font-medium">{`$${place.price}`}</strong>
          {` per ${place.unit}`}
        </span>
        <Link
          href="/"
          className="flex flex-col text-white p-6 font-normal w-max"
        >
          <span className="text-[16px] sm:text-[20px]">{place.name}</span>
          <span className="font-light sm:text-[15px]">{`${place.city}, ${place.country}`}</span>
        </Link>
      </div>
    </div>
  );
};

const MostPick = ({ data, refMostPicked }) => {
  const firstItemRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section
      data-aos="fade-up"
      className="px-6 w-full max-w-1140 md:px-0"
      ref={refMostPicked}
    >
      <h2 className="font-medium text-blue-900 text-[16px] mb-3 sm:mb-6 sm:text-[24px]">
        Most Picked
      </h2>

      <Slider {...settings} className="md:!hidden">
        {data.map((place, index) => (
          <PlaceItem key={index} place={place} />
        ))}
      </Slider>

      <div className="hidden md:grid md:grid-cols-3 md:grid-rows-2 md:gap-[30px] md:auto-cols-auto">
        {data.map((place, index) => (
          <PlaceItem
            key={index}
            place={place}
            firstItemRef={index === 0 ? firstItemRef : null}
          />
        ))}
      </div>
    </section>
  );
};

export default MostPick;
