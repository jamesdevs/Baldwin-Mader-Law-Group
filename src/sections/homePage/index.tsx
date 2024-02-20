import About from "./About";
import About2 from "./About2";
import Cta from "./Cta";
import Hero from "./Hero";
import Services from "./Services";
import Team from "./Team";
import Testimonial from "./Testimonial";

const HomePage = ({ posts }: any) => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <About2 />
      <Testimonial />
      <Team />
      <Cta />
    </>
  );
};

export default HomePage;
