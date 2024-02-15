import Image from "@/components/image";
import Title from "@/components/title";
import { motion } from "framer-motion";
import services from "@/constants/services";
import { fadeIn, staggerContainer } from "@/utils/motionVariants";
import Link from "next/link";

const Services = () => {
  return (
    <section className="padding-y bg-bg-main relative">
      <Image
        src={"/images/gallery/image-1.jpeg"}
        className="h-full inset-0 opacity-10 !absolute w-full group-hover:scale-110 transition-all duration-300"
        imageClassName="object-cover"
        alt="background"
      />
      <div className="container">
        <Title title="Our Services" subTitle="Building Dreams" center white />

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((item, index) => (
            <Link href={`/services/${item.slug}`}>
              <motion.div
                key={item.slug}
                variants={fadeIn("up", "spring", index * 0.5, 0.75)}
                className="relative group overflow-hidden"
              >
                <Image
                  src={item.imgSrc}
                  className="h-[clamp(12rem,70vw,20rem)] lg:h-[26rem] w-full group-hover:scale-[107%] transition-all duration-500"
                  alt={item.slug}
                  imageClassName="object-cover"
                />
                <div className="bg-gradient-to-tr from-[rgba(0,0,0,0.8)] via-[rgba(0,0,0,0.2)] to-transparent absolute inset-0" />

                <div className="absolute bottom-4 left-0 px-5">
                  <h3 className="text-white text-2xl">{item.title}</h3>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
