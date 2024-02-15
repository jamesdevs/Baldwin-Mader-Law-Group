import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "../image";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { cn } from "@/utils";

type PageHeadProps = {
  title?: string;
  description?: string;
  hasBreadCrumb?: boolean;
  pageName?: string;
  className?: string;
  secondLink?: string;
  secondTitle?: string;
};

const PageHead = ({
  title,
  description,
  hasBreadCrumb = false,
  secondLink = "",
  secondTitle = "",
  pageName,
  className,
}: PageHeadProps) => {
  return (
    <section id="hero" className="relative -mt-[112px]">
      <div
        className={cn(
          "relative isolate overflow-hidden h-auto",
          "min-h-[12rem] sm:min-h-[15rem] lg:min-h-[20rem]"
        )}
      >
        <Image
          src={"/images/gallery/image-1.jpeg"}
          alt="bg-hero"
          className=" !absolute inset-0 -z-10 w-full"
          imageClassName="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)]" />
        <div
          className={cn(
            "relative z-10 text-white text-lg pb-10 pt-36 sm:pb-16 sm:pt-40 ",
            className
          )}
        >
          <div className="container">
            {hasBreadCrumb && (
              <div className="mb-4 flex gap-2 whitespace-nowrap text-sm lg:text-lg">
                <Link href="/" className="flex gap-2 group items-center">
                  <FontAwesomeIcon
                    icon={faHome}
                    className="text-white w-5 -mt-0.5 group-hover:text-primary transition-all duration-300"
                  />

                  <div className="group-hover:text-primary transition-all duration-300">
                    Home
                  </div>
                </Link>
                <span>/</span>

                {secondLink && secondTitle && (
                  <>
                    <Link
                      href={secondLink}
                      className="flex gap-2 group items-center"
                    >
                      <div className="group-hover:text-primary transition-all duration-300">
                        {secondTitle}
                      </div>
                    </Link>
                    <span>/</span>
                  </>
                )}

                <div className="text-primary font-bold">{pageName}</div>
              </div>
            )}

            {title && (
              <h1 className="text-2xl sm:text-3xl lg:text-4xl max-w-lg">
                {title}
              </h1>
            )}
            {description && (
              <p className="text-white text-sm sm:text-base lg:text-lg max-w-md mt-6">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHead;
