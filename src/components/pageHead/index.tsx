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
    <section id="hero" className="relative -mt-[128px]">
      <div
        className={cn(
          "relative isolate overflow-hidden h-auto",
          "min-h-[12rem] sm:min-h-[15rem] lg:min-h-[24rem]"
        )}
      >
        <Image
          src={"/images/hero/image-13.png"}
          alt="bg-hero"
          className=" !absolute inset-0 -z-10 w-full"
          imageClassName="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)]" />
        <div
          className={cn(
            "relative z-10 text-white text-lg pb-10 pt-36 sm:pb-16 sm:pt-48 ",
            className
          )}
        >
          <div className="container flex flex-col items-center justify-center">
            {title && (
              <h1 className="text-2xl mb-3 sm:text-4xl lg:text-5xl max-w-2xl text-center">
                {title}
              </h1>
            )}
            {hasBreadCrumb && (
              <div className="flex gap-2 whitespace-nowrap text-sm lg:text-base">
                <Link href="/" className="flex gap-2 group items-center">
                  <div className="group-hover:text-primary transition-all duration-300">
                    Home
                  </div>
                </Link>
                <span>/</span>

                {secondTitle &&
                  (secondLink ? (
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
                  ) : (
                    <>
                      <div className="flex gap-2 group items-center">
                        <div className="group-hover:text-primary transition-all duration-300">
                          {secondTitle}
                        </div>
                      </div>
                      <span>/</span>
                    </>
                  ))}

                <div className="text-primary font-bold">{pageName}</div>
              </div>
            )}

            {description && (
              <p className="text-white text-sm sm:text-base lg:text-base max-w-md mt-6">
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
