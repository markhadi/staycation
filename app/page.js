import Footer from "@/components/Footer/Footer";
import Main from "@/components/Main/LandingPage/Main";
import Navbar from "@/components/Navbar/Navbar";

import data from "@/json/landingPage.json";

const page = () => {
  return (
    <>
      <Navbar />
      <Main data={data} />
      <Footer />
    </>
  );
};

export default page;
