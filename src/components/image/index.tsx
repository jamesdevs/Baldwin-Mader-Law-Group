import NextImage from "next/image";
import { motion } from "framer-motion";

type ImageProps = {
  className: string;
  imageClassName?: string;
  src: string;
  alt: string;
  ref?: any;
  style?: any;
};

const Image = ({ className, imageClassName, ...rest }: ImageProps) => {
  const MotionImage = motion(NextImage);
  return (
    <div className={`relative ${className}`}>
      <MotionImage className={imageClassName} {...rest} fill={true} />
    </div>
  );
};

export default Image;
