import Image from "@/components/image";
import Title from "@/components/title";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const WhyChooseUs = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1 1", "0 1"],
  });

  const distance = useTransform(scrollYProgress, [0, 0.5], [1.3, 1]);

  return (
    <section className="relative flex flex-col py-40">
      <div className="overflow-hidden ">
        <Image
          src="/images/cta/image-6.jpg"
          className="!absolute h-full inset-0 overflow-hidden"
          imageClassName="object-cover object-bottom"
          style={{ scale: distance }}
          alt="cta-logo"
          ref={ref}
        />
      </div>
      <div className="absolute left-0 top-0 bottom-0 z-10 w-full bg-gradient-to-br from-[rgba(0,0,0,0.65)] via-[rgba(0,0,0,0.4)] to-transparent" />

      <div className="container grid lg:grid-cols-1 relative z-10 lg:items-center">
        <div className="flex flex-col max-lg:text-center max-lg:items-center items-center">
          <Title
            title="Why Choose Us?"
            white
            className="items-center lg:items-start"
          />

          <p className="text-gray-100 text-lg max-w-lg text-center">
            With over 70 years of combined experience, Baldwin Mader Law Group
            recovered millions for victims nationwide. Trust our seasoned team
            to fight for you and recover your investment losses.
          </p>
        </div>
        {/* <div className="flex justify-center flex-wrap max-sm:gap-10 lg:grid lg:grid-cols-3 lg:gap-5  max-lg:gap-20 max-lg:mt-14">
          {stats.map((stat, index) => (
            <div className="flex flex-col items-center gap-5">
              <div className="w-16 lg:w-20 h-16 lg:h-20 rounded-full flex justify-center items-center">
                <Image
                  src={stat.icon}
                  alt={stat.title}
                  className=" text-white w-16 h-16"
                />
              </div>
              <div key={index} className="flex flex-col gap-2 bg-bg-light">
                <h3 className="text-base lg:text-lg font-semibold leading-6 text-white whitespace-nowrap">
                  {stat.title}
                </h3>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseUs;
