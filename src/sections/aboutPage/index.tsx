import Image from "@/components/image";
import PageHead from "@/components/pageHead";
import Title from "@/components/title";
import Link from "next/link";
import WhyChooseUs from "../homePage/WhyChooseUs";
import Cta from "../homePage/Cta";
import motionVariants from "@/utils/motionVariants";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <>
      <PageHead title="About Us" pageName="About Us" hasBreadCrumb />

      <section className="padding-y">
        <div className="container">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-10">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              exit="exit"
              variants={motionVariants.fadeUp(40)}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Image
                src="/images/about-2.jpg"
                alt="about"
                className="h-full w-full min-h-[200px]"
                imageClassName="object-cover"
              />
            </motion.div>
            <motion.div
              className="flex flex-col py-4"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              exit="exit"
              variants={motionVariants.fadeUp(40)}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Title title="Our Story" subTitle="Crafting Dreams" />
              <p className="mb-3">
                BLVd was created from a thought of two like-minded, hard-working
                individuals and their mutual love of the built work through both
                the collaboration of design & the built environment.
              </p>

              <p className="mb-6">
                Whether you are considering updating your kitchen or bathroom,
                or increasing the size of your home with an addition, BLVd has
                the experience and expertise to assist you in your design build
                needs.
              </p>

              <div className="flex gap-2 sm:gap-4 flex-wrap">
                <Link
                  className="btn btn-primary w-full sm:w-fit min-w-[8rem]"
                  href="/contact-us"
                >
                  Start Your Project
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="">
        <div id="cta" className="">
          <div className="relative isolate overflow-hidden">
            <div className="absolute inset-0 clip testimonial-background-container h-full w-full">
              <Image
                src="/images/cta-1.jpg"
                className="!fixed w-full h-full top-0 left-0"
                imageClassName="object-cover"
                alt="cta-logo"
              />
            </div>

            <div className="bg-gradient-to-r from-[rgba(0,0,0,0.3)] inset-0 via-[rgba(0,0,0,0.5)] sm:via-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.7)] absolute" />
            <div className="container z-10 relative  py-16 sm:py-24 gap-4 grid md:grid-cols-2 sm:items-center">
              <h2 className="text-white font-vidaloka mb-2 uppercase max-w-lg text-4xl sm:text-5xl lg:text-6xl">
                We are driven by values
              </h2>

              <p className="mb-4 text-white relative before:absolute before:left-0 before:h-full before:w-1 before:bg-primary pl-4">
                Our values include Service, Quality & Craftsmanship. Each of
                these words have specific meaning to the team and we live these
                values every day. The highest levels of customer service, high
                quality work product, and pure craftsmanship that shines on
                every project we engage in.
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <Cta />
    </>
  );
};

export default AboutPage;
