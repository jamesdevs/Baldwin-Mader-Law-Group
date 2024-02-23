import { INFO } from "@/constants";
import navigations from "@/constants/navigations";
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
    <footer aria-labelledby="footer-heading" className="bg-bg-footer">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="container">
        <div className="xl:flex grid grid-cols-2 justify-between pt-16 pb-8 text-white gap-12">
          <div className="sm:max-w-xs col-span-2 xl:max-w-sm flex flex-col">
            <Link href="/" className={"py-2 text-white font-bold uppercase"}>
              <Image
                className="h-12 md:h-14 xl:h-16 aspect-[1002/294]"
                src="/logo-4.png"
                alt="logo"
              />
            </Link>

            <p className="mt-1 text-gray-300 text-base">
              We specialize in Securities Litigation, Investment Fraud, Ponzi
              Schemes, Whistleblowers before the Securities and Exchange
              Commission, and Elder Financial Fraud.
            </p>
            <Link href="/contact-us" className="btn-after w-fit !text-lg !mt-4">
              Contact Us
            </Link>
          </div>

          <div className="col-span-2 sm:col-span-1 sm:max-w-xs xl:max-w-sm">
            <p className=" uppercase text-xl mb-5 font-semibold text-white">
              Links
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-x-14">
              {navigations.map((item) => (
                <li
                  className="mb-4 text-gray-300 linkHover text-base hover:text-primary transition-colors duration-300"
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
              <li className="mb-4 text-gray-300">
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
              <li className="mb-4 text-gray-300">
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

              <li className="mb-4 text-gray-300">
                <div className="flex gap-2 items-start max-w-xs">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="w-4 text-primary inline-flex mt-0.5"
                  />{" "}
                  {INFO.address}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 py-6 flex flex-wrap gap-6 text-center sm:text-left justify-center md:flex-row flex-col items-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-primary">{INFO.companyName}</span>. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
