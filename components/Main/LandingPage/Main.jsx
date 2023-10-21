"use client";

import Hero from "./Hero";
import MostPick from "./MostPick";
import { useRef } from "react";

const Main = ({ data }) => {
  const refMostPicked = useRef();

  return (
    <main className="flex flex-col gap-8 items-center sm:gap-16">
      <Hero refMostPicked={refMostPicked} data={data.hero} />
      <MostPick refMostPicked={refMostPicked} data={data.mostPicked} />
    </main>
  );
};

export default Main;
