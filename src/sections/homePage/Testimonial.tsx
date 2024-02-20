import Image from "@/components/image";
import React from "react";

const Testimonial = () => {
  return (
    <section>
      <div className="relative isolate overflow-hidden">
        <Image
          src="/images/cta.jpg"
          className="!absolute h-full inset-0"
          imageClassName="object-cover object-bottom"
          alt="cta-logo"
        />
      </div>
      <div className="bg-gradient-to-r from-[rgba(0,0,0,0.3)] inset-0 via-[rgba(0,0,0,0.3)] sm:via-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.3)] absolute" />
    </section>
  );
};

export default Testimonial;
