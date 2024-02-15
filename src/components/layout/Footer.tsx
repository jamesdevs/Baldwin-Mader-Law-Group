import { INFO } from "@/constants";
import navigations from "@/constants/navigations";
import socialLinks from "@/constants/socialLinks";
import formatPhone from "@/utils/formatPhone";
import {
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "../image";

const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading" className="bg-gray-900">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="container">
        <div className="xl:flex grid grid-cols-2 justify-between pt-16 pb-8 text-white gap-12">
          <div className="sm:max-w-xs col-span-2 xl:max-w-xs">
            <Image
              className="h-20 md:h-24 aspect-square"
              src="/logo-transparent.png"
              alt="logo"
            />
            <p className="mt-3 text-primary text-lg font-bold tracking-wider uppercase">
              {INFO.companyName}
            </p>
            <p className="mt-1 text-white text-lg tracking-wider uppercase">
              Alameda and Palo Alto Area Design Build
            </p>
            <div className="mt-3 gap-2 flex">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base leading-6 hover:text-gray-900 justify-center flex items-start gap-2"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="w-8 h-8 bg-gray-700 hover:bg-gray-600 hover:text-gray-300 transition-all duration-300 text-gray-300 rounded-full p-2"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 sm:max-w-xs xl:max-w-sm">
            <p className=" uppercase text-xl mb-5 font-semibold text-white">
              Links
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-x-24">
              {navigations.map((item) => (
                <li
                  className="mb-4 text-gray-300 linkHover  uppercase text-lg hover:text-primary transition-colors duration-300"
                  key={item.title}
                >
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1 sm:max-w-xs xl:max-w-sm sm:min-w-[18rem]">
            <p className=" uppercase text-xl mb-5 font-semibold text-white">
              Get In Touch
            </p>
            <ul className="flex gap-0 flex-col">
              <li className="mb-4 text-gray-300 text-lg">
                <Link
                  href={`mailto:${INFO.email}`}
                  className="hover:text-primary transition-colors duration-300 flex gap-2"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="w-4 text-primary"
                  />{" "}
                  {INFO.email}
                </Link>
              </li>
              <li className="mb-4 text-gray-300 text-lg">
                <Link
                  href={`tel:${formatPhone(INFO.phone)}`}
                  className="hover:text-primary transition-colors duration-300 flex gap-2"
                >
                  <FontAwesomeIcon
                    icon={faPhoneVolume}
                    className="w-4 text-primary"
                  />{" "}
                  {INFO.phone}
                </Link>
              </li>

              <li className="mb-4 text-gray-300 text-lg">
                <div className="flex gap-2 items-start">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="w-4 text-primary inline-flex mt-1"
                  />{" "}
                  {INFO.address}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 py-6 flex flex-wrap gap-6 text-center sm:text-left justify-center md:flex-row flex-col items-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} {INFO.companyName}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
