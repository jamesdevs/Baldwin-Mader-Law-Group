import { cn } from "@/utils";

const Title = ({ title, subTitle, className, center, white }: any) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 lg:gap-4 mb-4 md:mb-6",
        center && "items-start sm:items-center",
        white && "text-white",
        className
      )}
    >
      {subTitle && (
        <p
          className={cn(
            "relative text-gray-600 font-normal uppercase before:absolute before:left-0 before:h-full before:w-1 before:bg-primary pl-4",
            white && "text-gray-200"
          )}
        >
          {subTitle}
        </p>
      )}
      {title && <h2 className="uppercase">{title}</h2>}
    </div>
  );
};

export default Title;
