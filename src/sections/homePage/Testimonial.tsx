import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "@/components/image";
import Link from "next/link";
import React from "react";
import testimonials from "@/constants/testimonials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Title from "@/components/title";

const Testimonial = () => {
  return (
    <section className="mt-5 relative">
      <div id="cta" className="">
        <div className="relative isolate h-[30rem]">
          <div className="absolute inset-0 clip testimonial-background-container h-full w-full">
            <Image
              src="/images/cta/image-2.jpg"
              className="!fixed w-full h-full top-0 left-0"
              imageClassName="object-cover object-bottom"
              alt="cta-logo"
            />
          </div>
          <div className="bg-[rgba(0,0,0,0.6)] inset-0 absolute" />

          <div className="container absolute  -bottom-16 left-1/2 -translate-x-1/2 rounded-xl">
            <Title
              title="Our Legal Focus"
              subTitle="Protecting Your Investments"
              center
              white
            />

            <div className="bg-white max-w-4xl mx-auto shadow-md rounded-sm relative">
              <Swiper
                spaceBetween={20}
                slidesPerView={3}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                speed={4500}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  575: {
                    slidesPerView: 1,
                  },
                  767: {
                    slidesPerView: 1,
                  },
                  991: {
                    slidesPerView: 1,
                  },
                  1199: {
                    slidesPerView: 1,
                  },
                  1350: {
                    slidesPerView: 1,
                  },
                }}
                className=""
              >
                {testimonials.map((item, i) => (
                  <SwiperSlide
                    className="testimonial-block !h-auto px-0"
                    key={i}
                  >
                    <div className="flex justify-center items-center text-center flex-col h-full px-4 py-6 sm:px-6 my-2 sm:py-8">
                      <p className="max-w-2xl text-lg font-bold mb-4">
                        {item.testimonial}
                      </p>
                      <p className="max-w-2xl mb-4">{item.quote}</p>
                      <div className="flex items-center gap-3">
                        <p className="font-bold">{item.author}</p>
                      </div>
                      <FontAwesomeIcon
                        icon={faQuoteRight}
                        className="absolute top-0 left-1/2 -translate-x-1/2  w-28 text-gray-400 opacity-10"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
