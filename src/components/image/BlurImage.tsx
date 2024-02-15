import { cn } from "@/utils";
import NextImage from "next/image";
import { useState } from "react";

type ImageProps = {
  className: string;
  imageClassName?: string;
  src: string;
  alt: string;
};

const BlurImage = ({ className, imageClassName, ...rest }: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <div className={`relative ${className}`}>
      <NextImage
        className={cn(
          imageClassName,
          "duration-700 ease-in-out",
          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        )}
        {...rest}
        fill={true}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
};

export default BlurImage;
