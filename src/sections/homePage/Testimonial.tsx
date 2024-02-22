import Image from "@/components/image";
import Title from "@/components/title";
import testimonials from "@/constants/testimonials";
import { faQuoteRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

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

          <div className="container absolute  -bottom-40 left-1/2 -translate-x-1/2 rounded-xl">
            <Title
              title="Our Testimonials"
              subTitle="What Our Clients Are Saying"
              center
              white
            />

            <div className="bg-white max-w-4xl mx-auto shadow-md rounded-sm relative">
              <Swiper
                spaceBetween={20}
                slidesPerView={3}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                speed={4500}
                breakpoints={{
                  0: {
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
                      <div className="flex items-center gap-3">
                        <Image
                          src="/icons/quote.svg"
                          alt="quote"
                          className="h-20 w-16"
                        />
                      </div>
                      <p className="max-w-2xl text-2xl font-bold mb-4">
                        "{item.testimonial}"
                      </p>
                      <p className="max-w-2xl mb-4">{item.quote}</p>

                      <div className="flex flex-col gap-1">
                        <p className="font-bold text-lg shrink-0">
                          {item.author}
                        </p>
                        {/* <div className="flex">
                          {new Array(5).fill(0).map((item, index) => (
                            <FontAwesomeIcon
                              icon={faStar}
                              key={index}
                              className="text-yellow-500 w-4 h-4"
                            />
                          ))}
                        </div> */}
                      </div>
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
