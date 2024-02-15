import Image from "@/components/image";
import Title from "@/components/title";
import Link from "next/link";
import motionVariants from "@/utils/motionVariants";
import { motion } from "framer-motion";

const About = () => {
  return (
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
            <Title title="GET TO KNOW US" subTitle="10 YEARS EXPERIENCE" />
            <p className="mb-3">
              BLVd was created from a thought of two like-minded, hard-working
              individuals and their mutual love of the built work through both
              the collaboration of design & the built environment.
            </p>

            <p className="mb-6">
              Whether you are considering updating your kitchen or bathroom, or
              increasing the size of your home with an addition, BLVd has the
              experience and expertise to assist you in your design build needs.
            </p>

            <div className="flex gap-2 sm:gap-4 flex-wrap">
              <Link
                className="btn btn-primary w-full sm:w-fit min-w-[8rem]"
                href="/contact-us"
              >
                Start Your Project
              </Link>

              <Link
                className="btn btn-secondary w-full sm:w-fit min-w-[8rem]"
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
