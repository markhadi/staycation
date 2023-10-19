"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const PlaceItem = ({ place, firstItemRef }) => {
  return (
    <div
      className={`w-full snap-start relative rounded-2xl overflow-hidden ${
        firstItemRef ? "md:row-span-2" : ""
      } group`}
      ref={firstItemRef}
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

const MostPicked = ({ data, refMostPicked }) => {
  const carouselRef = useRef(null);
  const firstItemRef = useRef(null);
  const [firstItemWidth, setFirstItemWidth] = useState(0);

  useEffect(() => {
    if (firstItemRef.current) {
      setFirstItemWidth(firstItemRef.current.offsetWidth);
    }
  }, [firstItemRef, data]);

  const goToPlace = (direction) => {
    if (carouselRef.current) {
      const scrollAmount =
        direction === "next" ? firstItemWidth : -firstItemWidth;
      carouselRef.current.scrollLeft += scrollAmount;
    }
  };

  let isDragging = useRef(false);
  let startX = useRef(0);
  let startScrollLeft = useRef(0);

  const dragStart = (e) => {
    isDragging.current = true;

    if (carouselRef.current) {
      carouselRef.current.classList.add("dragging");
      startX.current = e.pageX;
      startScrollLeft.current = carouselRef.current.scrollLeft;
    }
  };

  const dragStop = () => {
    isDragging.current = false;

    if (carouselRef.current) {
      carouselRef.current.classList.remove("dragging");
    }
  };

  const dragging = (e) => {
    if (carouselRef.current && isDragging.current) {
      carouselRef.current.scrollLeft =
        startScrollLeft.current - (e.pageX - startX.current);
    }
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

      <div className="w-full relative">
        <div
          onClick={() => goToPlace("previous")}
          className={`absolute h-6 w-6 grid place-content-center rounded-full top-2/4 -translate-y-2/4 bg-white z-10 cursor-pointer hover:bg-blue-600 transition-colors duration-300 md:hidden`}
        >
          <FaAngleLeft size={12} />
        </div>

        <div
          ref={carouselRef}
          onMouseMove={dragging}
          onMouseDown={dragStart}
          onMouseUp={dragStop}
          style={{ scrollbarWidth: "none" }}
          className={`grid grid-flow-col auto-cols-[100%]  xs:auto-cols-[calc((100%/2)-8px)] sm-800:auto-cols-[calc((100%/3)-11px)] xs:gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth md:grid-cols-3 md:grid-rows-2 md:gap-[30px] md:auto-cols-auto`}
        >
          {data.map((place, index) => (
            <PlaceItem
              key={index}
              place={place}
              firstItemRef={index === 0 ? firstItemRef : null}
            />
          ))}
        </div>

        <div
          onClick={() => goToPlace("next")}
          className={`absolute h-6 w-6 grid place-content-center rounded-full top-2/4 -translate-y-2/4 bg-white z-10 right-0 cursor-pointer hover:bg-blue-600 transition-colors duration-300 md:hidden`}
        >
          <FaAngleRight size={12} />
        </div>
      </div>
    </section>
  );
};

export default MostPicked;
