import Image from "@/components/image";
import PageHead from "@/components/pageHead";
import testimonials from "@/constants/testimonials";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ClientReviewsPage = () => {
  return (
    <>
      <PageHead
        title="Client Reviews"
        pageName="Client Reviews"
        hasBreadCrumb
      />
      <section className="padding-y">
        <div className="container">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="pt-4 sm:inline-block sm:w-full sm:px-2"
              >
                <figure className="rounded-sm bg-gray-50 p-4 md:p-6 lg:p-8 text-sm leading-6">
                  <p className="max-w-2xl text-lg sm:text-xl text-black font-bold mb-4">
                    "{testimonial.testimonial}"
                  </p>
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.quote}”`}</p>
                  </blockquote>
                  <div className="flex justify-between items-center gap-3 mt-6">
                    <div className="flex flex-col gap-1">
                      <div className="flex">
                        {new Array(5).fill(0).map((item, index) => (
                          <FontAwesomeIcon
                            icon={faStar}
                            key={index}
                            className="text-yellow-500 w-4 h-4"
                          />
                        ))}
                      </div>
                      <p className="font-bold shrink-0">{testimonial.author}</p>
                    </div>
                    <Image
                      src="/icons/quote.svg"
                      alt="quote"
                      className="h-10 w-10"
                    />
                  </div>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientReviewsPage;
