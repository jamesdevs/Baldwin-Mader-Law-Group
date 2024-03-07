import Image from "@/components/image";
import Title from "@/components/title";
import services from "@/constants/services";
import { fadeIn, staggerContainer } from "@/utils/motionVariants";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="padding-y bg-bg-primary/50 relative xl:mt-28">
      <div className="container">
        <Title title="Our Legal Focus" center />

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 mt-10"
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((item, index) => (
            <motion.div
              key={item.slug}
              variants={fadeIn("up", "spring", 0.2, 0.75)}
              className="relative group overflow-hidden flex items-center gap-4"
            >
              <Image
                src={item.icon}
                className="h-11 lg:h-12 w-11 lg:w-12 shrink-0"
                alt={item.slug}
                imageClassName="object-contain"
              />

              <div className="">
                <h3 className="text-black font-lato text-xl mb-2">
                  {item.title}
                </h3>

                {/* <p className="">{item.description}</p> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
