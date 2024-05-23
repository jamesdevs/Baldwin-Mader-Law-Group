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
export default function BrokerMisconductLawyers() {
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
      <SEO title={`Baldwin Mader Law Group – Get Broker Misconduct Experts on Your Side ${INFO.companyName}`}
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
               Baldwin Mader Law Group – <br className="sm:block hidden" />Get Broker Misconduct Experts on Your Side
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
            Baldwin Mader Law Group has championed investor rights for over seven decades. If you suspect your broker has acted unethically, be it in a private placement or through a Ponzi scheme, we can help you understand your options and fight for the compensation you deserve.
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
              title="Why Choose Baldwin Mader Law Group for Broker Misconduct Claims?"
              left
            />
           
            <p className="mb-2">
            Investing your hard-earned money requires trust in your broker. When that trust is broken, Baldwin Mader Law Group is here to stand by your side. Here’s why we’re the right choice to fight for your recovery:
            </p>
            <ul className="mb-2">
                <li><strong>Experienced Broker Misconduct Advocates </strong> – Our team of broker misconduct attorneys and private placement fraud attorneys has extensive experience handling complex broker misconduct cases. We are well-versed in the intricacies of securities law and how to hold negligent or unethical brokers accountable.</li>
                <li><strong>Proven Track Record of Results </strong> – We have a history of successfully recovering compensation for clients who have suffered losses due to broker misconduct, be it in private placement or through churning or a Ponzi scheme.</li>
                <li><strong>Thorough Investigation and Analysis </strong> – We will meticulously investigate your case, analyze your investment records, and build a strong case to maximize your potential recovery.</li>
                <li><strong>Relentless Pursuit of Justice </strong> – Our broker misconduct and private placement attorneys are committed to fighting aggressively on your behalf to ensure you receive the compensation you deserve. We will not back down in the face of complex cases or powerful defendants.</li>

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
  <Title title="How We Help You Recover Losses from Broker Misconduct" className="text-center"/>
 <p className="mb-6 text-center">We understand that broker misconduct can have a devastating impact on your financial well-being. Our private placement and broker misconduct lawyers are dedicated to holding negligent or unethical brokers accountable and helping you recover the compensation you deserve. Here’s how we assist you:</p>
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8 content-center justify-center items-center">
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Identifying Unsuitable Investments  
            </h3>
            <p className="mt-1 text-sm text-gray-500">We will thoroughly analyze your investment portfolio and account statements to determine if your broker recommended investments that were not suitable for your risk tolerance or financial goals.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Uncovering Churning and Excessive Trading 
            </h3>
            <p className="mt-1 text-sm text-gray-500">We will investigate your trading activity to see if your broker engaged in excessive buying and selling, potentially generating commissions at your expense.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Investigating Misrepresentation and Omissions 
            </h3>
            <p className="mt-1 text-sm text-gray-500">We will explore if your broker failed to disclose important information about investments, such as risks or fees, or made false statements about their potential returns.

            </p>
          </div>
         
        </div>
      </div>
      <div className="group relative"></div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Seeking Compensation for Losses  
            </h3>
            <p className="mt-1 text-sm text-gray-500">If evidence supports broker misconduct, we will aggressively pursue all available legal avenues to recover your investment losses. This may involve arbitration through FINRA or litigation in court. <br />Throughout the process, we will keep you informed of the progress of your case and explain complex legal matters in easy-to-understand terms. Our goal is to navigate the legal process efficiently and effectively, helping you achieve a successful resolution and hold your broker accountable for their actions.

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
              title="Victim of Broker Misconduct? Baldwin Mader Law Group Can Help. "
            />
            <p className="mb-2">
            When a broker prioritizes their own gain over your financial well-being, the consequences can be devastating. Our team of experienced broker misconduct lawyers has a relentless pursuit of justice, with a proven success record in holding negligent brokers accountable and recovering client losses.  
            </p>
           <p className="mb-2">We have extensive experience in uncovering unsuitable investments, excessive trading activity, misrepresentation, and other forms of broker misconduct. Our unwavering commitment to client success is reflected in our ability to recover millions of dollars for our clients who have been wronged by unethical brokers. Allow Baldwin Mader Law Group to fight for what you deserve – a fair resolution and compensation for your losses.</p>

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
        <summary className="py-2 outline-none cursor-pointer focus:underline">What are some signs of broker misconduct?</summary>
        <div className="px-4 pb-4">
          <p>Red flags can include unsuitable investment recommendations that don’t align with your risk tolerance, excessive trading activity generating commissions for the broker at your expense, misleading information about investments or potential returns, and difficulty accessing your funds. You can contact Baldwin Mader Law Group if you suspect you’ve been wronged by a broker.  </p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">What types of losses can result from broker misconduct?</summary>
        <div className="px-4 pb-4">
          <p>Broker misconduct can lead to significant financial losses, including investment losses due to unsuitable recommendations, excessive fees from churning, and missed opportunities due to misrepresentation.</p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">What should I do if I suspect broker misconduct?</summary>
        <div className="px-4 pb-4">
          <p>If you suspect your broker has acted inappropriately, it’s important to gather evidence like account statements, communication records, and investment materials. Then, consult with our experienced broker misconduct lawyers who can assess your situation and determine if you have grounds for legal action. </p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">How can Baldwin Mader Law Group help me with a broker misconduct case?</summary>
        <div className="px-4 pb-4">
          <p>Our team will thoroughly investigate your situation, analyze your investment history, and determine if your broker violated industry regulations or their fiduciary duty. If evidence supports your claim, we will aggressively pursue all legal avenues to recover your losses, which may involve arbitration through FINRA or litigation in court. </p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">What are the chances of winning a broker misconduct case?</summary>
        <div className="px-4 pb-4">
          <p>Every case is unique, but Baldwin Mader Law Group has a strong track record of success in holding negligent brokers accountable. We have recovered millions of dollars for our clients who have suffered losses due to broker misconduct. </p>
        </div>
      </details>
      
    </div>
      </div>
    </section>
    </Layout>
  );
}
