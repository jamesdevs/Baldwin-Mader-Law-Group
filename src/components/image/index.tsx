import NextImage from "next/image";

type ImageProps = {
  className: string;
  imageClassName?: string;
  src: string;
  alt: string;
};

const Image = ({ className, imageClassName, ...rest }: ImageProps) => {
  return (
    <div className={`relative ${className}`}>
      <NextImage className={imageClassName} {...rest} fill={true} />
    </div>
  );
};

export default Image;
