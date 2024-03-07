import PageHead from "@/components/pageHead";
import Title from "@/components/title";
import { INFO } from "@/constants";
import formatPhone from "@/utils/formatPhone";
import motionVariants from "@/utils/motionVariants";
import {
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Link from "next/link";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <>
      <PageHead title="Contact Us" pageName="Contact Us" hasBreadCrumb />
      <div className="relative container padding-y">
        <div className="grid grid-cols-1 gap-6 lg:gap-8  lg:grid-cols-12">
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
                title="Contact Our Team"
                subTitle="Your legal needs matter"
              />
              <ContactForm />
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col py-6 sm:py-8 lg:col-span-5 overflow-hidden"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            exit="exit"
            variants={motionVariants.fadeUp(40)}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Title title="Get in touch" subTitle="NEED ANY HELP?" />
            <p className="text-lg">
              With over seven decades of collective expertise, Baldwin Mader Law
              Group specializes in recovering millions for defrauded investors.
              Contact us today to explore your options.
            </p>

            <div className="flex flex-col gap-6 mt-8">
              <Link
                href={`tel:${formatPhone(INFO.phone)}`}
                className="flex items-center gap-4 group"
                target="_blank"
              >
                <div
                  className={`inline-flex font-bold items-center text-lg gap-2 justify-center rounded-full`}
                >
                  <FontAwesomeIcon
                    icon={faPhoneVolume}
                    className="w-14 lg:w-16 h-14 lg:h-16 flex justify-center items-center p-4 lg:p-5 rounded-full bg-primary text-white shrink-0"
                  />
                </div>
                <div>
                  <p className="text-black text-lg lg:text-xl font-semibold">
                    Have any question?
                  </p>
                  <p
                    className={`font-medium break-all text-base lg:text-lg text-gray-500 transition-colors duration-300`}
                  >
                    {INFO.phone}
                  </p>
                </div>
              </Link>

              <Link
                href={`mailto:${INFO.email}`}
                className="flex items-center gap-4 group"
                target="_blank"
              >
                <div
                  className={`inline-flex font-semibold items-center text-lg gap-2 justify-center rounded-full`}
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="w-14 lg:w-16 h-14 lg:h-16 flex justify-center items-center p-4 lg:p-5 rounded-full bg-primary text-white shrink-0"
                  />
                </div>
                <div>
                  <p className="text-black text-lg lg:text-xl font-semibold">
                    Write email
                  </p>
                  <p
                    className={`font-medium break-all text-base lg:text-lg text-gray-500 transition-colors duration-300`}
                  >
                    {INFO.email}
                  </p>
                </div>
              </Link>

              <div className="text-lg">
                <div className="flex items-center gap-4 group">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="w-14 lg:w-16 h-14 lg:h-16 flex justify-center items-center p-4 lg:p-5 rounded-full bg-primary text-white shrink-0"
                  />{" "}
                  <div>
                    <p className="text-black text-lg lg:text-xl font-semibold">
                      Address
                    </p>

                    <p
                      className={`font-medium break-all text-base lg:text-lg text-gray-500 transition-colors duration-300`}
                    >
                      {INFO.address.split(",")[0]}
                      <br />
                      {INFO.address.split(",").slice(1).join(",")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="relative">
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
