import About from "./About";
import Cta from "./Cta";
import Hero from "./Hero";
import Services from "./Services";
import WhyChooseUs from "./WhyChooseUs";

const HomePage = ({ posts }: any) => {
  return (
    <>
      <Hero />
      <About />
      <WhyChooseUs />
      {/* <Services /> */}
      <Cta />
    </>
  );
};

export default HomePage;
