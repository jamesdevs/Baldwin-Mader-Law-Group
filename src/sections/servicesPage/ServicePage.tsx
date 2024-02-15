import Image from "@/components/image";
import ServiceSidebar from "./ServiceSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import PageHead from "@/components/pageHead";
import { INFO } from "@/constants";
import formatPhone from "@/utils/formatPhone";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

const ServicePage = ({ service }: any) => {
  return (
    <>
      <PageHead
        title={service.title}
        pageName={service.title}
        hasBreadCrumb
        secondLink="/services"
        secondTitle="Services"
      />

      <section className="padding-y">
        <div className="container">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
            <div className="xl:col-span-8">
              <div className="flex flex-col">
                {service.imgArray.length > 1 ? (
                  <Swiper
                    centeredSlides={true}
                    autoplay={{
                      delay: 6000,
                      disableOnInteraction: false,
                    }}
                    effect={"fade"}
                    speed={2000}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation, EffectFade]}
                    className="w-full h-[14rem] sm:h-[20rem] lg:h-[26rem] overflow-hidden border border-gray-100"
                  >
                    {service.imgArray?.map((item: any, index: number) => (
                      <SwiperSlide key={index} className="overflow-hidden">
                        <Image
                          src={item}
                          alt="bg-hero"
                          className={`h-full w-full`}
                          imageClassName="object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <Image
                    src={service.imgArray[0]}
                    alt="bg-hero"
                    className="w-full h-[14rem] sm:h-[20rem] lg:h-[26rem] overflow-hidden border border-gray-100"
                    imageClassName="object-cover"
                  />
                )}
              </div>

              <h2 className="mt-8 text-3xl lg:text-4xl uppercase">{`${service.title}`}</h2>
              <p className="text-lg mt-4">{service.description}</p>

              <h2 className="text-xl lg:text-2xl mt-6 capitalize">
                Services Offered:
              </h2>

              <ul className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
                {service.bulletpoints?.map((item: any) => (
                  <li key={item} className="flex gap-2 items-start">
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="text-black w-4 shrink-0 mt-1"
                    />
                    <h3 className="text-lg font-medium">{item}</h3>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-lg">{service.conclusion}</p>

              {/* <div className="mt-6 flex flex-wrap justify-center sm:justify-start items-center gap-4 gap-x-4">
                <Link
                  href={`tel:${formatPhone(INFO.phone)}`}
                  target="_blank"
                  className="btn min-w-[8rem] btn-primary"
                >
                  Call Now
                </Link>
                <Link
                  href={"/contact-us"}
                  className="btn min-w-[8rem] btn-secondary"
                >
                  Contact Us
                </Link>
              </div> */}
            </div>

            <div className="xl:col-span-4">
              <ServiceSidebar {...{ service }} />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-4 lg:mt-10">
            <div className="flex flex-col py-8 px-4 sm:px-6 bg-bg-main">
              <h2 className="text-white text-3xl mb-3">
                Start Your Project Now!
              </h2>

              <p className="text-gray-100 mb-5">
                BLVd Design Build, Your Trusted Visionaries. Crafting dreams
                into reality with expertise and care.
              </p>

              <div className="flex flex-col gap-4 mb-10">
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
              </div>

              <Link
                href={"/contact-us"}
                className="btn btn-primary mt-auto"
                id="book-appointment"
              >
                Start Your Project Now
              </Link>
            </div>

            <iframe
              src={INFO.iframeLocationUrl}
              width="600"
              height="400"
              loading="lazy"
              className="w-full h-full min-h-[300px] overflow-hidden"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
