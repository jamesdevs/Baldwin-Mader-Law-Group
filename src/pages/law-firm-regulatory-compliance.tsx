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
export default function LawFirmRegulatoryCompliance() {
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
      <SEO title={`Regulatory Compliance Law Firm  ${INFO.companyName}`}
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
              Regulatory Compliance Law Firm – Handle Compliance with Confidence. 
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
            For over 70 years, Baldwin Mader Law Group has been a leading force in regulatory compliance. Our team of experienced and dedicated attorneys possesses the deep expertise needed to guide businesses through the complexities of ever-changing regulations. We are committed to helping you achieve and maintain compliance, minimizing risk and ensuring your business operates with confidence.
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
              title="Why Choose Baldwin Mader Law Group for Your Regulatory Compliance Needs?"
              left
            />
           
            <p className="mb-2">
            At Baldwin Mader Law Group, we understand the critical role regulatory compliance plays in your business success. Whether you are looking for law firm regulatory compliance assistance or a business looking to keep its compliance in check, there is always prudence in receiving external, independent legal advice. When you partner with Baldwin Mader Law Group, you receive:
            </p>
            <ul className="mb-2">
                <li><strong>Deep Industry Expertise   </strong> - With over 70 years of collective legal experience, our attorneys possess a comprehensive understanding of regulations across various industries. We stay up-to-date on the latest regulatory developments to ensure your compliance program remains effective.</li>
                <li><strong>Customizable Solutions  </strong> – We recognize that a one-size-fits-all approach doesn’t work in compliance. We tailor our services to your specific business needs and risk profile.</li>
                <li><strong>Proactive and Strategic Guidance   </strong> – We take a proactive approach to identify potential risks and develop strategies to mitigate them, minimizing your exposure to regulatory enforcement actions.</li>
                <li><strong>Relentless Advocacy   </strong> – Should you face a regulatory investigation, our experienced attorneys will provide strong and effective legal representation, protecting your rights and interests throughout the process.</li>

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
  <Title title="How We Help You Achieve and Maintain Regulatory Compliance" className="text-center"/>
 <p className="mb-6 text-center">Our comprehensive approach ensures your business operates with confidence and minimizes the risk of non-compliance. Here’s how we help:</p>
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8 content-center justify-center">
    <div className="group relative">
      
      <div className="mt-4 flex">
        <div>
          <h3 className="text-sm text-gray-700">
          Compliance Program Development and Implementation  
          </h3>
          <p className="mt-1 text-sm text-gray-500">Our team will work closely with you to develop a customized compliance program tailored to your specific industry and risk profile. This includes identifying relevant regulations, establishing clear policies and procedures, and implementing effective training programs for your employees.

          </p>
        </div>
       
      </div>
    </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Regulatory Risk Assessment and Mitigation  
            </h3>
            <p className="mt-1 text-sm text-gray-500">We conduct thorough risk assessments to pinpoint areas where your business may be vulnerable to non-compliance. Based on this analysis, we develop proactive strategies to mitigate these risks, helping you stay ahead of potential issues.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Guidance on Complex Regulations   
            </h3>
            <p className="mt-1 text-sm text-gray-500">Our attorneys possess in-depth knowledge of regulations across various industries. We can provide clear and concise explanations of complex regulations. We will make sure you understand your legal obligations and how they apply to your business practices.
</p>
          </div>
         
        </div>
      </div>
      <div className="group relative"></div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Representation During Regulatory Investigations   
            </h3>
            <p className="mt-1 text-sm text-gray-500">In the unfortunate event that your business faces a regulatory investigation, our experienced attorneys will provide strong and effective legal representation. We will guide you through the investigation process, protect your rights, and strive to achieve a favorable outcome. <br/>With Baldwin Mader Law Group, you gain a trusted regulatory compliance law firm dedicated to your regulatory compliance success. We will work tirelessly to ensure your business operates ethically, minimizes risk, and avoids costly penalties.</p>
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
              title="Don’t Navigate Regulatory Compliance Alone – Partner with Baldwin Mader Law Group."
            />
            <p className="mb-2">
            In regulatory compliance matters, even minor missteps can have significant consequences for your business. At Baldwin Mader Law Group, we understand the complexities of compliance and the importance of proactive measures.  
            </p>
           <p className="mb-2">With over 70 years of experience and a proven track record of success, our team of dedicated regulatory compliance attorneys has helped countless businesses navigate complex regulations and minimize risk. Our commitment to excellence is reflected in our results. We have a credible success rate in resolving regulatory matters for our clients, saving them potential and considerable fines and penalties. Contact us today to discuss your law firm regulatory compliance needs. </p>

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
        <summary className="py-2 outline-none cursor-pointer focus:underline">Why is regulatory compliance important for my business?</summary>
        <div className="px-4 pb-4">
          <p>Regulatory compliance helps ensure your business operates ethically and legally. It minimizes the risk of hefty fines, penalties, and even business closure for non-compliance. Additionally, it fosters trust with clients and stakeholders, demonstrating your commitment to responsible business practices.  </p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">How can I tell which regulations apply to my business?</summary>
        <div className="px-4 pb-4">
          <p>Regulations vary depending on your industry, location, and business size. Our experienced attorneys can assess your specific situation and identify the relevant federal, state, and local regulations that apply to you.</p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">Do I need a customized compliance program?</summary>
        <div className="px-4 pb-4">
          <p>A “one-size-fits-all” approach doesn’t work for compliance. A customized program tailored to your unique risk profile and industry is essential for effective compliance. Baldwin Mader Law Group can help you develop and implement a program that meets your specific needs.</p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">What happens if my business faces a regulatory investigation?</summary>
        <div className="px-4 pb-4">
          <p>Facing a regulatory investigation can be stressful. Our experienced legal team can provide guidance and representation throughout the process, protecting your rights and working to achieve a favorable outcome.</p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">How much does it cost to ensure my business is compliant?</summary>
        <div className="px-4 pb-4">
          <p>The cost of compliance varies depending on the complexity of your business and the regulations you need to adhere to. Baldwin Mader Law Group offers various fee structures to suit your budget. We can discuss the costs involved during a free consultation.</p>
        </div>
      </details>
      
    </div>
      </div>
    </section>
    </Layout>
  );
}
