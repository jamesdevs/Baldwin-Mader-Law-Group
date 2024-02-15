import PageHead from "@/components/pageHead";
import ContactForm from "./ContactForm";
import { INFO } from "@/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import formatPhone from "@/utils/formatPhone";
import { motion } from "framer-motion";
import motionVariants from "@/utils/motionVariants";
import Title from "@/components/title";
import socialLinks from "@/constants/socialLinks";
import Image from "@/components/image";

const ContactPage = () => {
  return (
    <>
      <PageHead title="Contact Us" pageName="Contact Us" hasBreadCrumb />
      <div className="relative container padding-y">
        <div className="grid grid-cols-1 gap-6 lg:gap-12 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-7 py-6 px-4 sm:p-8 bg-white shadow-lg border border-gray-200"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            exit="exit"
            variants={motionVariants.fadeUp(40)}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="mx-auto">
              <Title
                title="Let's Start"
                subTitle="Begin your project with BLVd Design Build"
              />
              <ContactForm />
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col py-6 px-4 sm:p-8 bg-bg-main gap-4 lg:col-span-5 overflow-hidden"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            exit="exit"
            variants={motionVariants.fadeUp(40)}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="mb-4">
              <Image
                className="aspect-square h-20 mb-4"
                src="/logo-transparent.png"
                alt="logo"
              />
              <h2 className="text-white text-3xl mb-4">{INFO.companyName}</h2>
              <p className="text-gray-100">
                Crafting Exceptional Living Spaces. From renovations to custom
                builds, we bring your unique vision to life with passion,
                precision, and unparalleled expertise.
              </p>
            </div>

            <Link
              href={`tel:${formatPhone(INFO.phone)}`}
              className="flex items-center gap-2 group"
              target="_blank"
            >
              <div
                className={`inline-flex font-bold items-center text-lg gap-2 justify-center rounded-full`}
              >
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  className="w-4 text-primary shrink-0"
                />
              </div>
              <p
                className={`text-white font-medium break-all text-lg transition-colors duration-300`}
              >
                {INFO.phone}
              </p>
            </Link>

            <Link
              href={`mailto:${INFO.email}`}
              className="flex items-center gap-2 group"
              target="_blank"
            >
              <div
                className={`inline-flex font-semibold items-center text-lg gap-2 justify-center rounded-full`}
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-4 text-primary shrink-0"
                />
              </div>
              <p
                className={`text-white font-medium break-all text-lg transition-colors duration-300`}
              >
                {INFO.email}
              </p>
            </Link>

            <div className="text-lg">
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="w-4 text-primary shrink-0"
                />{" "}
                <div className="font-semibold text-white">
                  Alameda:
                  <span className="text-gray-300 ">
                    {" "}
                    1226 Park St Alameda CA 94501
                  </span>
                </div>
              </div>
            </div>

            <div className="text-lg">
              <div className="flex gap-2 items-center">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="w-4 text-primary shrink-0"
                />{" "}
                <div className="font-semibold text-white">
                  Palo Alto:
                  <span className="text-gray-300">
                    {" "}
                    1055 Cowper St Palo Alto CA 94301
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-2">
              <div className="flex flex-col gap-2">
                <div className="font-semibold text-white text-xl">
                  Follow Us
                </div>
                <div className="mt-1 gap-2 flex">
                  {socialLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-base leading-6 hover:text-gray-900 justify-center flex items-start gap-2"
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="w-10 h-10 bg-primary hover:bg-gray-600 hover:text-white transition-all duration-300 text-secondary rounded-full p-2.5"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="relative bg-white">
        <iframe
          src={INFO.iframeLocationUrl}
          width="600"
          height="350"
          className="w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="lg:absolute lg:inset-0 lg:right-1/2"></div>
      </div>
    </>
  );
};

export default ContactPage;
