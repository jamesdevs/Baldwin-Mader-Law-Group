import services from "@/constants/services";
import { cn } from "@/utils";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const ServiceSidebar = ({ service }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1 gap-4 sm:gap-6">
      <div className="bg-gray-100 p-4 lg:p-8">
        <h2 className="mb-4 sm:mb-6">Our Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 gap-2 sm:gap-4">
          {services.map((item: any, index: number) => (
            <Link
              href={`/services/${item.slug}`}
              key={index}
              className={cn(
                "bg-white shadow-md border group border-gray-200 px-4 sm:px-6 py-4 sm:py-5 rounded-sm hover:bg-black hover:text-white transition-all duration-300 flex justify-between items-center gap-4 cursor-pointer",
                item.slug === service.slug &&
                  "cursor-default pointer-events-none bg-black"
              )}
            >
              <h3
                className={cn(
                  "text-lg sm:text-xl text-black group-hover:text-white transition-all duration-300 font-semibold",
                  item.slug === service.slug && "text-white"
                )}
              >
                {item.title}
              </h3>
              <FontAwesomeIcon
                icon={faArrowRightLong}
                className="w-4 text-primary"
              />
            </Link>
          ))}
        </div>
      </div>
      {/* <div className="flex flex-col py-8 px-4 sm:px-6 bg-bg-main">
        <h2 className="text-white text-3xl mb-3">BLVd Design Build</h2>

        <p className="text-gray-100 mb-5">
          Your Trusted Visionaries. Crafting dreams into reality with expertise
          and care.
        </p>

        <div className="flex flex-col gap-4 mb-10">
          <Link
            href={`tel:${formatPhone(INFO.phone)}`}
            className="flex items-center gap-2 group"
            target="_blank"
          >
            <div
              className={`inline-flex font-bold items-center text-lg gap-2 justify-center rounded-full`}
            >
              <FontAwesomeIcon
                icon={faPhoneVolume}
                className="w-4 text-primary shrink-0"
              />
            </div>
            <p
              className={`text-white font-medium break-all text-lg transition-colors duration-300`}
            >
              {INFO.phone}
            </p>
          </Link>

          <Link
            href={`mailto:${INFO.email}`}
            className="flex items-center gap-2 group"
            target="_blank"
          >
            <div
              className={`inline-flex font-semibold items-center text-lg gap-2 justify-center rounded-full`}
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-4 text-primary shrink-0"
              />
            </div>
            <p
              className={`text-white font-medium break-all text-lg transition-colors duration-300`}
            >
              {INFO.email}
            </p>
          </Link>

          <div className="text-lg">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="w-4 text-primary shrink-0"
              />{" "}
              <div className="font-semibold text-white">
                Alameda:
                <span className="text-gray-300 ">
                  {" "}
                  1226 Park St Alameda CA 94501
                </span>
              </div>
            </div>
          </div>

          <div className="text-lg">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="w-4 text-primary shrink-0"
              />{" "}
              <div className="font-semibold text-white">
                Palo Alto:
                <span className="text-gray-300">
                  {" "}
                  1055 Cowper St Palo Alto CA 94301
                </span>
              </div>
            </div>
          </div>
        </div>

        <Link
          href={"/contact-us"}
          className="btn btn-primary mt-auto"
          id="book-appointment"
        >
          Start Your Project Now
        </Link>
      </div>

      <iframe
        src={INFO.iframeLocationUrl}
        width="600"
        height="400"
        loading="lazy"
        className="w-full overflow-hidden"
      ></iframe> */}
    </div>
  );
};

export default ServiceSidebar;
