import Hero from "./Hero";
import data from "@/json/landingPage.json";

const Main = () => {
  return (
    <main className="flex flex-col items-center">
      <Hero data={data.hero} />
    </main>
  );
};

export default Main;
