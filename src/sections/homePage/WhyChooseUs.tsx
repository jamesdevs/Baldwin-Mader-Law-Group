import Image from "@/components/image";
import Title from "@/components/title";
import { motion } from "framer-motion";
import services from "@/constants/services";
import { fadeIn, staggerContainer } from "@/utils/motionVariants";
import {
  faCertificate,
  faHandshake,
  faToolbox,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const items = [
  {
    title: "Super Efficient",
    description:
      "By utilizing the house designers and builders, Blvd has optimized its process to be super efficient. This translates into projects being delivered on time and on budget at every phase of the project.",
    icon: faToolbox,
  },
  {
    title: "Deeply Committed",
    description:
      "BLVd is deeply committed to each project and takes pride in delivering high quality craftsmanship throughout the design build process.",
    icon: faHandshake,
  },
  {
    title: "Highly Skilled",
    description:
      "Our builders are true craftsmen who take pride and ownership in everything they do, leveraging their expertise to ensure impeccable quality and attention to detail in every aspect of the project.",
    icon: faUserCheck,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="padding-y bg-gray-100/80 mt-28">
      <div className="container">
        <Title
          title="Why Choose BLVD?"
          subTitle="Craftsmanship and Quality Guaranteed"
        />

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.5, 0.75)}
              className="relative shadow-xl p-6 pb-10 border border-gray-200 overflow-hidden bg-white"
            >
              <h3 className="text- text-2xl mb-3">{item.title}</h3>
              <p>{item.description}</p>
              <div className="absolute bg-primary/20 rounded-full flex items-start justify-start -bottom-6 -right-5 w-20 h-20 p-5">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="w-7 text-primary"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
