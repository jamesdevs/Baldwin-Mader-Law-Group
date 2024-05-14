import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo";
import { INFO } from "@/constants";
import Image from "@/components/image";
import Title from "@/components/title";
import motionVariants from "@/utils/motionVariants";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const heroSliderImages = [
  // "/images/hero/image-20.jpg",
  // "/images/hero/image-1.png",
  // "/images/hero/test-4.jpg",
  "/images/hero/image-14.jpg",
  // "/images/hero/image-18.jpg",
  // "/images/hero/image-19.jpg",
  "/images/hero/image-21.jpg",
  "/images/hero/image-22.jpg",
];
export default function SecuritiesLitigationAttorney() {
  const [activeSlide, setActiveSlide] = useState(-1);
  const firstTime = useRef(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveSlide(0);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  const handleSlideChange = (swiper: any) => {
    firstTime.current = false;
    setActiveSlide(swiper.activeIndex);
  };
  return (
    <Layout>
      <SEO title={`Securities Litigation Attorney | ${INFO.companyName}`}
        description={`Seeking seasoned legal counsel? Baldwin Law Group boasts expert securities litigation attorneys dedicated to safeguarding your investments. Trust our experienced team to navigate complex legal landscapes with precision and integrity. Contact us today for comprehensive representation.`}
      />
       <section className="relative z-10 -mt-[128px]">
      <div className="relative isolate overflow-hidden min-h-[calc(100vh+10px)] flex flex-col">
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          effect={"fade"}
          speed={2000}
          modules={[Autoplay, Pagination, EffectFade]}
          className="!absolute inset-0 z-10 h-full w-full hero-slider"
          onSlideChange={handleSlideChange}
        >
          {heroSliderImages.map((item, index) => (
            <SwiperSlide key={index} className="overflow-hidden">
              <Image
                src={item}
                alt="bg-hero"
                className={`h-full w-full ${
                  activeSlide === index
                    ? firstTime.current
                      ? "zoom-in-2"
                      : "zoom-in"
                    : "zoom-out"
                }`}
                imageClassName="object-cover"
              />
              <div className="absolute left-0 top-0 bottom-0 z-10 w-full bg-gradient-to-br from-[rgba(0,0,0,0.5)] via-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.2)]" />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="container z-10 relative h-full flex flex-col justify-center flex-1">
          <div className="max-w-4xl mt-[60px]">
            <div className="text-center sm:text-left max-w-xl">

              <motion.h1
                className="text-gray-200 mt-4 text-[42px]"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                exit="exit"
                variants={motionVariants.fadeUp(40)}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
               Baldwin Mader Law Group – <br className="sm:block hidden" /> Protecting Your Interests in <br className="sm:block hidden" /> Securities
                Litigation and Arbitration
              </motion.h1>

              <motion.p
                className="text-gray-200 mt-4 text-lg"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                exit="exit"
                variants={motionVariants.fadeUp(40)}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
               Baldwin Mader Law Group is a leading securities litigation law firm with over 70 years of combined 
experience representing victims of investment fraud. Our seasoned securities litigation attorney team 
has a successful track record of recovering millions of dollars in hundreds of cases for individuals and 
institutions
              </motion.p>

             
            </div>
          </div>
        </div>
      </div>
    </section>
      <section className="padding-y">
      <div className="container">
        <div className="grid xl:grid-cols-2 gap-6 sm:gap-40 lg:gap-16">
          <div className="flex w-full relative mx-auto max-w-xl min-h-[250px] sm:min-h-[350px]">
            <div className="flex w-full whitespace-nowrap relative">
              
              <Image
                src="/images/about/image-16.jpg"
                alt="about"
                className="h-full w-full min-h-[200px]"
                imageClassName="object-cover"
              />
            </div>
            <Image
              src="/images/about/image-14.jpeg"
              alt="about"
              className="h-[72%] w-7/12 !absolute -bottom-32 border-8 border-white sm:block hidden"
              imageClassName="object-cover"
            />
          </div>
          <motion.div
            className="flex flex-col pb-0 lg:pt-20"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            exit="exit"
            variants={motionVariants.fadeUp(40)}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            
            <p className="mb-6">
            When you choose Baldwin Mader Law Group as your securities litigation law firm, you benefit from:</p>

            
            <p className="mb-6">
            <b>Experienced Team</b> – Our securities litigation attorney team is highly skilled and has extensive 
experience in complex financial matters.
</p>
            <p className="mb-6">
            <b>Proven Track Record</b> – We have a history of success in recovering substantial compensation for our 
clients
</p>
            <p className="mb-6">
           <b>Focused Expertise</b> – Our practice is dedicated exclusively to securities litigation, ensuring in-depth 
knowledge of the relevant laws and regulations.
</p>
            <p className="mb-6">
            <b>Personalized Service</b> – We provide our clients with direct access to our experienced partners, not 
inexperienced associates.
</p>

            <div className="flex gap-2 sm:gap-4 flex-wrap">
              <Link href="/contact-us" className="btn-after !text-black">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="padding-y">
      <div className="container">
      <div className="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

    <Title
              title="Cases We Handle"
              center
            />
 <p className="mb-6 text-center">Our securities litigation attorney team handles a wide range of investment fraud and securities 
misconduct cases. These include:</p>
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8 content-center justify-center">
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Securities Class Action and Multi-District Litigation (MDL)
            </h3>
            <p className="mt-1 text-sm text-gray-500">If you have suffered losses due to securities fraud, you may be able to participate in a class action 
lawsuit or MDL proceeding. Our securities fraud lawyer team has extensive experience representing 
investors in these complex cases, working to recover compensation for their losses</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Shareholder Derivative Lawsuits.
            </h3>
            <p className="mt-1 text-sm text-gray-500">When corporate management engages in misconduct, it can harm the value of shareholders’
investments. We represent shareholders in derivative lawsuits to hold corporations accountable and 
recover damages.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Corporate Control Disputes
            </h3>
            <p className="mt-1 text-sm text-gray-500">In disputes involving corporate control, such as proxy fights and takeover attempts, significant financial 
interests are at stake. Our securities fraud attorney team advises and represents clients in handling 
these complex situations to protect their rights</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Insider Trading Allegations
            </h3>
            <p className="mt-1 text-sm text-gray-500">We investigate and litigate cases 
involving insider trading, where individuals misuse confidential information for personal gain</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Securities Fraud Allegations
            </h3>
            <p className="mt-1 text-sm text-gray-500">Investment fraud can take many forms, including Ponzi schemes, pump-and-dump schemes, and 
unsuitable investment recommendations. Our securities fraud lawyer team represents investors who 
have been victims of these and other fraudulent schemes and seek compensation for their losses and 
hold the perpetrators accountable</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Accounting Fraud Allegations
            </h3>
            <p className="mt-1 text-sm text-gray-500">Companies that manipulate their financial statements to mislead investors can cause significant harm. 
We hold companies accountable for accounting fraud through litigation, protecting investors from being 
deceived by false financial information.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Initial Public Offering (IPO) Litigation
            </h3>
            <p className="mt-1 text-sm text-gray-500">When a company goes public through an IPO, investors rely on the accuracy and completeness of the 
offering materials. Our securities litigation attorney team represents investors who are harmed by 
misrepresentations or omissions in IPO offerings and seek to recover their losses</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Federal Securities Investigations
            </h3>
            <p className="mt-1 text-sm text-gray-500">If you are facing an investigation by the SEC or other regulatory bodies regarding potential securities 
violations, it is crucial to have experienced legal representation from a securities litigation law firm. Our 
attorneys advise and represent clients in federal securities investigations, protecting their rights and 
interests.</p>
          </div>
         
        </div>
      </div>

      
    </div>
  </div>
</div>
      </div>
    </section>

    <section className="padding-y">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-20 lg:gap-10">
          <motion.div
            className="flex flex-col lg:py-6 order-2 lg:order-1"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            exit="exit"
            variants={motionVariants.fadeUp(40)}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <Title
              title="How We Protect Your Interests"
            />
            <p className="mb-4">
            Baldwin Mader Law Group is a securities litigation law firm that is committed to protecting the rights of 
investors and ensuring that those who commit securities fraud are held accountable. Our securities 
litigation attorney team has a national reputation for success in complex securities cases, including 
securities arbitration. 
            </p>
            <p className="mb-4">
            Our securities arbitration team uses their extensive experience and knowledge to develop effective 
legal strategies tailored to your unique circumstances. If you suspect you have been the victim of 
investment fraud, contact Baldwin Mader Law Group today. We offer a free consultation to discuss your 
situation and explore your legal options. When you work with our securities fraud attorney team, you 
can be confident that you have skilled and experienced personnel on your side.
            </p>


            <div className="flex gap-2 sm:gap-4 flex-wrap">
              <Link href="/contact-us" className="btn-after !text-black">
                Contact Us
              </Link>
            </div>
          </motion.div>
          <div className="flex w-full relative mx-auto max-w-xl min-h-[250px] sm:min-h-[350px] order-1 lg:order-2">
            <div className="flex w-full whitespace-nowrap relative">
              <Image
                src="/images/hero/image-22.jpg"
                alt="about"
                className="h-full w-full min-h-[200px]"
                imageClassName="object-cover"
              />
            </div>
           
          </div>
        </div>
      </div>
    </section>
    <section className="padding-y">
      <div className="container">
      <Title
              title="Frequently Asked Questions"
              center
            />
            <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">What is a Securities Litigation Attorney</summary>
        <div className="px-4 pb-4">
          <p>A securities litigation attorney is a lawyer who specializes in legal issues involving securities, such as 
private placements, stocks, bonds, and other investments. They represent investors who have suffered 
losses due to investment fraud, including stockbroker misconduct, unsuitable investment 
recommendations, and fraudulent Ponzi schemes.</p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">How Can a Securities Fraud Lawyer Help Me?</summary>
        <div className="px-4 pb-4">
          <p>A securities fraud lawyer can help you recover your investment losses if you have been the victim of 
fraud. They can investigate your case, gather evidence, negotiate with the responsible party, and 
represent you in court or arbitration if necessary</p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">What is Securities Arbitration?</summary>
        <div className="px-4 pb-4">
          <p>Securities arbitration is a form of dispute resolution outside of the court system. Securities arbitration 
can be a faster and more cost-effective way to resolve investment disputes compared to traditional 
litigation.</p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">What Types of Securities Fraud Does Baldwin Mader Law Group Handle?</summary>
        <div className="px-4 pb-4">
          <p>Our securities litigation attorneys handle a wide range of investment fraud cases, including insider 
trading, accounting fraud, misrepresentations in IPO offerings, Ponzi schemes, and unsuitable 
investment recommendations</p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">Do I Have a Case for Securities Fraud?</summary>
        <div className="px-4 pb-4">
          <p>If you suspect you have been the victim of investment fraud, it is important to consult with an 
experienced securities litigation attorney. We invite you to contact Baldwin Mader Law Group. We can 
review your situation and advise you on your legal options. During a free consultation, our team can 
discuss the specifics of your case and determine if you may have grounds for legal action</p>
        </div>
      </details>
     
      
    </div>
      </div>
    </section>
    </Layout>
  );
}
