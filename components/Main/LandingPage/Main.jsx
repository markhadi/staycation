"use client";

import Hero from "./Hero";
import MostPicked from "./MostPicked";
import { useRef } from "react";

const Main = ({ data }) => {
  const refMostPicked = useRef();

  return (
    <main className="flex flex-col gap-8 items-center sm:gap-16">
      <Hero refMostPicked={refMostPicked} data={data.hero} />
      <MostPicked refMostPicked={refMostPicked} data={data.mostPicked} />
    </main>
  );
};

export default Main;
