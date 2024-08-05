import Image from "@/components/image";
import Title from "@/components/title";
import testimonials from "@/constants/testimonials";
import {
  faArrowLeftLong,
  faArrowRightLong,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  return (
    <section className="grid lg:grid-cols-2 overflow-hidden">
      <div className="max-lg:hidden">
        <Image
          src="/images/about/image-11.jpg"
          className="h-[40rem] w-full"
          imageClassName="object-cover"
          alt="testimonials"
        />
      </div>
      <div className="container max-lg:py-10 flex flex-col justify-center relative">
        <Title title="Testimonials" subTitle="what our clients say​" />
        <div className="relative">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            speed={5500}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
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
              <SwiperSlide className="testimonial-block !h-auto px-0" key={i}>
                <div className="flex flex-col h-full justify-between">
                  <div className="flex flex-col max-sm:max-w-sm max-md:max-w-md">
                    <p className="max-w-2xl text-xl text-black font-bold mb-4">
                      "{item.testimonial}"
                    </p>
                    <p className="max-w-2xl mb-4">{item.quote}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/icons/quote.svg"
                      alt="quote"
                      className="h-20 w-16"
                    />

                    <div className="flex flex-col gap-1">
                      <p className="font-bold shrink-0">{item.author}</p>
                      <div className="flex">
                        {new Array(5).fill(0).map((item, index) => (
                          <FontAwesomeIcon
                            icon={faStar}
                            key={index}
                            className="text-yellow-500 w-4 h-4"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="sm:flex hidden h-fit absolute right-0 bottom-5 z-20 flex-row-reverse items-center gap-1.5">
              <div className="relative flex h-10 w-10 items-center justify-center bg-primary hover:bg-black transition-all duration-300">
                <span className="swiper-button-next !opacity-0 w-full right-0"></span>
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  className="swiper-button-next !opacity-1  text-white w-4 !absolute !left-1/2 !-translate-x-1/2"
                />
              </div>
              <div className="flex h-10 w-10 items-center relative justify-center bg-primary hover:bg-black transition-all duration-300">
                <span className="swiper-button-prev !opacity-0 w-full left-0"></span>
                <FontAwesomeIcon
                  icon={faArrowLeftLong}
                  className="swiper-button-prev !opacity-1 w-4 text-white !absolute !left-1/2 !-translate-x-1/2"
                />
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
