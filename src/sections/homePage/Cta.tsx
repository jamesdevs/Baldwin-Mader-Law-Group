import Image from "@/components/image";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="">
      <div id="cta" className="">
        <div className="relative isolate overflow-hidden">
          <div className="absolute inset-0 clip testimonial-background-container h-full w-full">
            <Image
              src="/images/cta-1.jpg"
              className="!fixed w-full h-full top-0 left-0"
              imageClassName="object-cover"
              alt="cta-logo"
            />
          </div>

          <div className="bg-gradient-to-r from-[rgba(0,0,0,0.3)] inset-0 via-[rgba(0,0,0,0.3)] sm:via-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.3)] absolute" />
          <div className="container z-10 relative py-24 flex sm:items-center flex-col text-center">
            <h2 className="text-white font-vidaloka mb-2 sm:text-center uppercase">
              Ready to turn your home into your dream space?
            </h2>

            <p className="mb-4 text-xl text-white">
              Let's start the journey together with our expert guidance and
              innovative solutions!"
            </p>

            <Link
              href="/contact-us"
              className="w-fit btn btn-primary max-sm:mx-auto"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
