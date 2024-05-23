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
export default function InvestmentFraudLawyer() {
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
      <SEO title={`Investment Fraud Attorneys ${INFO.companyName}`}
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
               Investment Fraud Attorneys –  Protecting Your Investments from Fraud
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
            Investing in your future is a significant decision. Unfortunately, not everyone operates with integrity in the financial world. If you suspect you have been the victim of investment fraud or financial misconduct, Baldwin Mader Law Group is here to help. Our dedicated California investment fraud lawyer team has extensive experience holding perpetrators accountable and recovering your losses.
              </motion.p>

             
            </div>
          </div>
        </div>
      </div>
    </section>
      <section className="py-8">
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
          </div>
          <motion.div
            className="flex flex-col pb-0 lg:pt-10"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            exit="exit"
            variants={motionVariants.fadeUp(40)}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
             <Title
              title="Why Choose Baldwin Mader Law Group for Investment Fraud Recovery?"
              left
            />
           
            <p className="mb-2">
            When you’ve been the victim of investment fraud, handling the legal landscape can feel overwhelming. Here’s why Baldwin Mader Law Group is the trusted partner you need:
            </p>
            <ul className="mb-2">
                <li><strong>Extensive Experience  </strong> – Our investment fraud lawyer team has a proven track record of success in recovering investment losses for clients. We understand the complex tactics used by fraudsters and know how to build strong legal cases.</li>
                <li><strong>Relentless Pursuit of Justice  </strong> – We are committed to holding perpetrators accountable for their actions. We fight tirelessly to recover your stolen funds and ensure you receive the compensation you deserve.</li>
                <li><strong>Client-Centered Approach  </strong> – We understand the emotional and financial strain caused by investment fraud. We treat our clients with compassion and respect throughout the legal process, keeping you informed every step of the way.</li>
                <li><strong>In-Depth Knowledge of Financial Fraud  </strong> – Our California securities fraud lawyer team possess a deep understanding of complex financial schemes and the legal nuances of investment fraud cases.</li>

            </ul>
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
  <div className="mx-auto max-w-2xl px-4 py-1 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
  <Title title="How We Help You Recover Losses from Investment Fraud" className="text-center"/>
 <p className="mb-6 text-center">Investment fraud is a complex and emotionally charged experience. At Baldwin Mader Law Group, our dedicated California securities fraud lawyer team is here to help you handle the legal process and recover your losses. Here’s how we can assist you:</p>
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8 content-center justify-center">
    <div className="group relative">
      
      <div className="mt-4 flex">
        <div>
          <h3 className="text-sm text-gray-700">
          Investigation of Breaches of Fiduciary Duty 
          </h3>
          <p className="mt-1 text-sm text-gray-500">Brokers and advisors have a legal obligation to act in their client’s best interest. We will investigate if your broker or advisor breached their fiduciary duty by prioritizing their own gain over your financial well-being. This may involve analyzing sales practices and uncovering any misrepresentations or omissions of information.

          </p>
        </div>
       
      </div>
    </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Recovery of Investment Losses 
            </h3>
            <p className="mt-1 text-sm text-gray-500">Brokers and advisors have a legal obligation to act in their client’s best interest. We will investigate if your broker or advisor breached their fiduciary duty by prioritizing their own gain over your financial well-being. This may involve analyzing sales practices and uncovering any misrepresentations or omissions of information.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Recovery of Investment Losses  
            </h3>
            <p className="mt-1 text-sm text-gray-500">If we determine you have a viable case, we will explore all legal avenues to recover your investment losses. This may involve pursuing arbitration through FINRA or litigation in court. Our experienced investment fraud attorneys will fight aggressively to obtain the maximum compensation you deserve. <br />
Rest assured, throughout the process, we will treat you with empathy and respect, keeping you informed of the progress of your case. Our goal is to hold the perpetrators accountable for their actions and help you recover financially from this experience.
</p>
          </div>
         
        </div>
      </div>
      
      
      
      
    </div>
  </div>
</div>
      </div>
    </section>

    <section className="pt-1">
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
              title="Recover from Investment Fraud with Baldwin Mader Law Group."
            />
            <p className="mb-2">
            Investment fraud is an emotionally charged experience. The betrayal of trust coupled with financial losses can leave you feeling helpless. At Baldwin Mader Law Group, we understand the challenges you face. Our dedicated team of investment fraud lawyers has a proven track record of success, recovering substantial amounts for our clients who have been victims of investment fraud. 
            </p>
           <p className="mb-2">With a deep understanding of complex investment products, we are relentless in pursuing justice for our clients. We will thoroughly investigate your situation, analyze investments, and build a strong case to recover your losses through arbitration or litigation. Whether you are looking for a California broker misconduct lawyer or searching for a California securities fraud whistleblower lawyer, let Baldwin Mader Law Group help you throughout the legal process, hold the perpetrators accountable, and recover from investment fraud. Contact us today to discuss your needs. </p>

            <div className="flex gap-2 sm:gap-4 flex-wrap">
              <Link href="/contact-us" className="btn-after !text-black">
                Contact Us
              </Link>
            </div>
          </motion.div>
          <div className="flex w-full relative mx-auto max-w-xl min-h-[250px] sm:min-h-[350px] order-1 lg:order-2">
            <div className="flex w-full whitespace-nowrap relative">
              <Image
                src="/images/hero/image-21.jpg"
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
        <summary className="py-2 outline-none cursor-pointer focus:underline">What are some warning signs that might indicate investment fraud?</summary>
        <div className="px-4 pb-4">
          <p>There are many warning signs to look out for when it comes to investment fraud. Common warning signs include unrealistic promises of high returns with little to no risk, pressure to invest quickly, difficulty accessing your invested funds, and complex or unclear investment strategies.  </p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">What should I do if I suspect I’ve been a victim of investment fraud?</summary>
        <div className="px-4 pb-4">
          <p>It’s crucial to act quickly. Stop investing any further funds and gather evidence such as account statements, marketing materials, and communication records with the broker or advisor. The sooner you contact an experienced investment fraud lawyer, the better chance you have of recovering your losses.</p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">Can I get my money back if I was involved in a Ponzi scheme?</summary>
        <div className="px-4 pb-4">
          <p>While there’s no guarantee, experienced legal representation can significantly increase your chances. We explore various legal options like pursuing claims against the perpetrator, financial institutions that facilitated the fraud, or potentially filing claims with regulatory bodies like the SEC. </p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">How long will it take to recover my investment losses?</summary>
        <div className="px-4 pb-4">
          <p>The timeframe can vary depending on the complexity of the case and the available assets. However, our team will provide a more specific estimate based on your situation during a consultation.</p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">What if I feel embarrassed or ashamed about being a victim of investment fraud?</summary>
        <div className="px-4 pb-4">
          <p>Investment fraudsters are skilled at manipulating people. There’s no shame in falling victim to their schemes. Our team understands the emotional toll fraud takes and will treat you with empathy and respect throughout the legal process.</p>
        </div>
      </details>
      
    </div>
      </div>
    </section>
    </Layout>
  );
}
