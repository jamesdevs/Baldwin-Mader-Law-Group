import PageHead from "@/components/pageHead";
import Image from "@/components/image";
import Title from "@/components/title";
import { motion } from "framer-motion";
import services from "@/constants/services";
import { fadeIn, staggerContainer } from "@/utils/motionVariants";
import Link from "next/link";

const ServicesPage = () => {
  return (
    <>
      <PageHead title="Services" pageName="Services" hasBreadCrumb />

      <section className="padding-y relative bg-gray-100">
        <Image
          src={"/images/gallery/image-2.jpeg"}
          className="h-full inset-0 opacity-10 !absolute w-full group-hover:scale-110 transition-all duration-300"
          imageClassName="object-cover"
          alt="background"
        />
        <div className="container">
          <Title title="Our Services" subTitle="Building Dreams" center />

          <motion.div
            className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map((item, index) => (
              <Link href={`/services/${item.slug}`} key={item.slug}>
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
                    <h3 className="text-white text-xl sm:text-2xl">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative max-sm:mb-10 max-sm:mt-10 max-sm:px-4">
        <div className="grid sm:grid-cols-2 max-sm:shadow-lg">
          <Image
            src={"/images/gallery/image-2.jpeg"}
            className="h-full min-h-[300px] sm:min-h-[24rem] md:min-h-[32rem] xl:aspect-[16/9] w-full group-hover:scale-110 transition-all duration-300"
            imageClassName="object-cover"
            alt="kitchen-remodeling"
          />
          <div className="flex flex-col items-center justify-center gap-4 py-12 px-10 text-center max-w-xl mx-auto">
            <h2>KITCHEN REMODELING</h2>

            <p>
              Renew your kitchen with BLVd Design Build to create a welcoming
              gathering place.
            </p>

            <Link href="/contact-us" className="btn btn-primary min-w-[8rem]">
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="relative max-sm:mb-10 max-sm:px-4">
        <div className="grid sm:grid-cols-2 max-sm:shadow-lg">
          <div className="flex flex-col items-center justify-center gap-4 py-12 px-10 text-center max-w-xl mx-auto order-2 sm:order-1">
            <h2>NEW CONSTRUCTION</h2>

            <p>
              Explore the possibilities of a brand new space with BLVd Design
              Build's new construction services.
            </p>

            <Link href="/contact-us" className="btn btn-primary min-w-[8rem]">
              Get Quote
            </Link>
          </div>

          <Image
            src={"/images/gallery/image-14.jpg"}
            className="h-full min-h-[300px] sm:min-h-[24rem] md:min-h-[32rem] xl:aspect-[16/9] w-full group-hover:scale-110 transition-all duration-300 order-1 sm:order-2"
            imageClassName="object-cover"
            alt="new-construction"
          />
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
