import Testimonials from "@/components/testimonials";
import About from "./About";
import About2 from "./About2";
import Cta from "./Cta";
import Hero from "./Hero";
import Services from "./Services";
import Team from "./Team";
import WhyChooseUs from "./WhyChooseUs";

const HomePage = ({ posts }: any) => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <About2 />
      <WhyChooseUs />
      <Testimonials />
      <Team />
      <Cta />
    </>
  );
};

export default HomePage;
