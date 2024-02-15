import Image from "@/components/image";
import Title from "@/components/title";
import motionVariants from "@/utils/motionVariants";
import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  return (
    <section className="padding-y">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-40 lg:gap-16">
          <div className="flex w-full relative mx-auto max-w-xl min-h-[250px] sm:min-h-[350px]">
            <div className="flex w-full whitespace-nowrap relative">
              <p className="font-archivo h-max font-bold text-lg lg:text-2xl text-[#2F373D] absolute top-0 left-0 sm:relative sm:-rotate-90 mt-14 lg:mt-20">
                <span className="text-5xl lg:text-8xl">60+</span> <br />
                Year Experience
              </p>
              <Image
                src="/images/about/image-8.jpg"
                alt="about"
                className="h-full w-full min-h-[200px]"
                imageClassName="object-cover"
              />
            </div>
            <Image
              src="/images/about/image-7.jpg"
              alt="about"
              className="h-[72%] w-7/12 !absolute -bottom-32 border-8 border-white sm:block hidden"
              imageClassName="object-cover"
            />
          </div>
          <motion.div
            className="flex flex-col pb-0 lg:pt-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            exit="exit"
            variants={motionVariants.fadeUp(40)}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Title
              title="Our Commitment to Exceptional Quality"
              subTitle="About Us"
            />
            <p className="mb-4">
              Welcome to AAA Construction Services, LLC, your premier
              destination for top-tier kitchen and bathroom renovation and
              remodel services. We specialize exclusively in these two essential
              spaces, allowing us to deliver unparalleled expertise in every
              project.
            </p>

            {/* <p className="mb-2 font-bold font-titilliumWeb text-black text-xl">
              Our Guaranteed:
            </p>
            <ul className="mb-4 flex flex-col gap-1 ml-3">
              <li className="font-archivo flex items-center gap-2 font-normal text-base text-gray-600">
                <FontAwesomeIcon icon={faCircle} className="w-1 " />
                Competitive Pricing
              </li>
              <li className="font-archivo flex items-center gap-2 font-normal text-base text-gray-600">
                <FontAwesomeIcon icon={faCircle} className="w-1 " />
                Quality Craftsmanship
              </li>
              <li className="font-archivo flex items-center gap-2 font-normal text-base text-gray-600">
                <FontAwesomeIcon icon={faCircle} className="w-1 " />
                Top Rated Contractors
              </li>
            </ul> */}
            <p className="mb-6">
              Our commitment to excellence is unwavering, with a dedicated team
              of professionals who take pride in their attention to detail and
              craftsmanship. We don’t just create beautiful spaces; we build
              them to last.
            </p>

            <div className="flex gap-2 sm:gap-4 flex-wrap">
              <Link
                className="btn btn-primary w-fit min-w-[8rem]"
                href="/contact"
              >
                Start Your Project
              </Link>

              <Link
                className="btn btn-secondary w-fit min-w-[8rem]"
                href="/about-us"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
