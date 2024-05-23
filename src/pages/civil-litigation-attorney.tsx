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
export default function CivilLitigationAttorney() {
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
      <SEO title={`Civil Litigation Lawyer | ${INFO.companyName}`}
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
               Civil Litigation Lawyer
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
              At Baldwin Mader Law Group, we understand that legal disputes can be stressful and complex. Our experienced civil litigation attorney team is here to guide you through the legal process and protect your rights. We have a proven track record of success in resolving a wide range of civil litigation matters for individuals and businesses in California. 
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
            Civil litigation encompasses a broad range of legal conflicts that do not involve criminal charges. However, we are also prepared to take your case to trial if necessary. Our trial-ready attorneys have extensive experience in courtroom litigation, protecting your interests throughout the legal process. Our experienced litigation lawyer team can help you handle various legal issues, including:
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

    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8 content-center justify-center">
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Breach of Contract
            </h3>
            <p className="mt-1 text-sm text-gray-500">If a party fails to uphold their obligations under a contract, we can help you recover compensation for damages caused by the breach. This may include financial losses, lost business opportunities, or other harms suffered as a result of the breach.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Business Disputes
            </h3>
            <p className="mt-1 text-sm text-gray-500">Business disputes can arise from a variety of situations, such as contract breaches, partnership disagreements, or shareholder conflicts. Our business litigation lawyer team can advise and represent you in resolving these disputes effectively, protecting your business interests, and minimizing financial losses.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Real Estate Litigation
            </h3>
            <p className="mt-1 text-sm text-gray-500">Property ownership and rights can be complex, and disagreements can sometimes lead to litigation. Our civil litigation attorneys can represent you in real estate disputes involving property boundaries, title issues, or foreclosure defense. We can help you handle complex legal issues related to zoning regulations, easements, or adverse possession claims.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Construction Litigation
            </h3>
            <p className="mt-1 text-sm text-gray-500">Construction projects can involve complicated contracts and the potential for disagreements. Our litigation lawyer team can help you protect your interests by resolving construction disputes efficiently. This may involve issues related to breach of contract, construction defects, delays, or cost overruns.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Employment Law
            </h3>
            <p className="mt-1 text-sm text-gray-500">Employment disputes can be challenging, and it is crucial to have legal representation to ensure your rights are protected. We represent employees in matters involving wrongful termination, discrimination, unpaid wages, or hostile work environment.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Intellectual Property Law. 
            </h3>
            <p className="mt-1 text-sm text-gray-500">Companies that manipulate their financial statements to If you have been infringed upon or accused of infringing on a trademark, copyright, or patent, our civil litigation attorneys can protect your intellectual property rights</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            Estate Litigation
            </h3>
            <p className="mt-1 text-sm text-gray-500">Disputes can arise regarding wills, trusts, or probate matters. Our civil litigation attorney team represents you in estate litigation to ensure your rights are protected, and the decedent’s wishes are upheld.</p>
          </div>
         
        </div>
      </div>
      <div className="group relative">
      
        <div className="mt-4 flex">
          <div>
            <h3 className="text-sm text-gray-700">
            And More
            </h3>
            <p className="mt-1 text-sm text-gray-500">Our civil litigation lawyer team handles a wide range of other civil legal issues. If you are facing a legal dispute and searching ‘civil litigation lawyer near me,’ contact us to discuss your situation. We are confident that our experienced legal team can assist you.</p>
          </div>
         
        </div>
      </div>

      
    </div>
  </div>
</div>
      </div>
    </section>

    <section className="padding-y pt-1">
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
              title="Why Choose Baldwin Mader Law Group?"
            />
            <p className="mb-4">
            When facing a civil legal dispute, you need a trusted legal advisor on your side. Baldwin Mader Law Group offers several advantages that set us apart. 
            </p>
           <ol>
            <li><strong>Experienced Team </strong>: Our civil litigation lawyer team has a proven track record of success and has resolved complicated civil litigation matters across a wide range of practice areas. We use our in-depth knowledge of the law and extensive experience to develop effective legal strategies tailored to your unique needs and goals.</li>
            <li><strong>Strategic Approach</strong> – We take a strategic approach to every case, carefully analyzing the situation and developing a customized legal plan. We keep you informed throughout the process, ensuring you understand the legal options available and the potential outcomes of your case.</li>
            <li><strong>Clear Communication</strong> – We understand that legal matters can be confusing, and we are committed to clear communication. Our litigation lawyer team will explain complex legal issues in easy-to-understand terms and keep you updated on the progress of your case.</li>
            <li><strong>Relentless Advocacy</strong> – We are relentless advocates for our clients. We are committed to protecting your rights and achieving the best possible outcome for your case. We will fight tirelessly to ensure your interests are protected throughout the legal process.</li>
           </ol>


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
    <section className="padding-y pt-1">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-20 lg:gap-10">
          <motion.div
            className="flex flex-col lg:py-6 order-2"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            exit="exit"
            variants={motionVariants.fadeUp(40)}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <Title
              title="Schedule a Consultation with a Civil Litigation Attorney Today."
            />
            <p className="mb-4">
            If you are facing a civil legal dispute, contact Baldwin Mader Law Group today. We offer a free consultation to discuss your situation and explore your legal options. Let our experienced business litigation lawyer team help you through the legal process and achieve a successful resolution. Feel free to reach out to us and discuss your case.  
            </p>


            <div className="flex gap-2 sm:gap-4 flex-wrap">
              <Link href="/contact-us" className="btn-after !text-black">
                Contact Us
              </Link>
            </div>
          </motion.div>
          <div className="flex w-full relative mx-auto max-w-xl min-h-[250px] sm:min-h-[350px] order-1 lg:order-1">
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
        <summary className="py-2 outline-none cursor-pointer focus:underline">What is a Civil Litigation Attorney?</summary>
        <div className="px-4 pb-4">
          <p>A civil litigation attorney represents individuals and businesses in non-criminal legal disputes. They can help you navigate the legal process, enforce your rights, and recover compensation for damages you have suffered. If you are looking for a business litigation lawyer, contact Baldwin Mader Law Group today. </p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">Do I Need a Civil Litigation Lawyer?</summary>
        <div className="px-4 pb-4">
          <p>If you are involved in a legal dispute and unsure of your rights or how to proceed, consult a civil litigation attorney at Baldwin Mader Law Group. We are here to advise you on your legal options, the potential costs involved, and the best course of action for your specific situation. Contact us today to discuss your case. </p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">What Types of Cases Do Civil Litigation Attorneys Handle?</summary>
        <div className="px-4 pb-4">
          <p>Civil litigation attorneys handle a wide range of cases, including breach of contract disputes, business disagreements, real estate litigation, construction defects, employment law issues, intellectual property infringement, and estate disputes. If you are facing a legal issue that is not criminal in nature, contact Baldwin Mader Law Group.</p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">What is the Difference Between Civil Litigation and Criminal Law?</summary>
        <div className="px-4 pb-4">
          <p>Civil litigation deals with non-criminal disputes between individuals or businesses, where the goal is typically to recover compensation for damages or enforce a legal right. Criminal law involves offenses against the state, with potential penalties of jail time, fines, or other consequences.</p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">How Much Does it Cost to Hire a Civil Litigation Attorney?</summary>
        <div className="px-4 pb-4">
          <p>The cost of hiring a civil litigation attorney can vary depending on the complexity of your case, the experience of the attorney, and your geographic location. To learn about the typical costs of hiring a civil litigation attorney at Baldwin Mader Law Group, contact us today for a free consultation. During a free consultation, our attorneys can discuss fee structures in more detail.</p>
        </div>
      </details>
      <details>
        <summary className="py-2 outline-none cursor-pointer focus:underline">How Can I Find a Civil Litigation Lawyer Near Me?</summary>
        <div className="px-4 pb-4">
          <p>If you are searching for a civil litigation attorney near you, Baldwin Mader Law Group can help. We have offices conveniently located in San Francisco, Los Angeles, and Palm Springs, California. You can contact us for a free consultation to discuss your legal needs.</p>
        </div>
      </details>
     
      
    </div>
      </div>
    </section>
    </Layout>
  );
}
