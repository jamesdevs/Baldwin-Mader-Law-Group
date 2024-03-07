import Image from "@/components/image";
import Title from "@/components/title";
import motionVariants from "@/utils/motionVariants";
import { motion } from "framer-motion";
import Link from "next/link";

const About2 = () => {
  return (
    <section className="padding-y">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-20 lg:gap-10">
          <motion.div
            className="flex flex-col lg:py-6 order-2 lg:order-1"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            exit="exit"
            variants={motionVariants.fadeUp(40)}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Title
              title="Baldwin Mader Law Group's Mission"
              subTitle="Get to Know Us"
            />
            <p className="mb-4">
              Patrick Baldwin, our founder, was an attorney at the SEC in
              Washington, D.C., Divisions of Marketing Regulation and Division
              of Corporation Finance. Christopher Mader was formerly a
              registered representative who worked at a major national broker
              dealers.
            </p>

            <p className="mb-4 relative before:absolute before:left-0 before:h-full before:w-[2px] before:bg-primary pl-4 ml-6">
              <span className="font-bold">We have only one mission:</span> To
              help victims of financial fraud recover their losses. Baldwin
              Mader Law Group has been involved in hundreds of cases at FINRA,
              District Courts nationwide and other forums. When you hire our
              team, you are represented by the firm’s principals, not an
              inexperienced associate.
            </p>

            <p className="mb-4">
              Securities transactions are often difficult to analyze.
              Determining whether you have been the victim of Investment fraud,
              securities fraud or financial elder abuse is daunting. You are
              welcome to contact us for a consultation. When you call, you will
              talk to a partner at the firm, not a non-lawyer administrative
              person.
            </p>

            <div className="flex gap-2 sm:gap-4 flex-wrap">
              <Link href="/contact-us" className="btn-after !text-black">
                Contact Us
              </Link>
            </div>
          </motion.div>
          <div className="flex w-full relative mx-auto max-w-xl min-h-[250px] sm:min-h-[350px] order-1 lg:order-2">
            <div className="flex w-full whitespace-nowrap relative">
              <Image
                src="/images/hero/image-22.jpg"
                alt="about"
                className="h-full w-full min-h-[200px]"
                imageClassName="object-cover"
              />
            </div>
            <div className="h-32 w-3/4 justify-center items-center !absolute border-l-0 -bottom-10 border-8 border-white sm:flex hidden bg-primary tetx-white">
              <p className="text-3xl text-white">+70 Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
