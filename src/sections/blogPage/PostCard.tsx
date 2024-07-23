import Image from '@/components/image';
import { formatDate } from '@/utils/formatDate';
import { fadeIn } from '@/utils/motionVariants';
import {
  faArrowRight,
  faLongArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

import Link from 'next/link';

const PostCard = ({
  index,
  title,
  date,
  featuredImage,
  id,
  showDescription,
  content,
}: any) => {
  return (
    <motion.article
      key={index}
      className="shadow-lg relative isolate group flex flex-col overflow-hidden border border-gray-200 bg-white"
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Image
        src={featuredImage?.node?.sourceUrl || '/images/no-image.jpg'}
        alt={`${title}-image`}
        className="max-h-[300px] h-[200px] sm:h-[250px] lg:h-[300px] overflow-hidden w-full"
        imageClassName="object-cover transition-all duration-500 group-hover:scale-[104%]"
      />

      <div className="p-4 lg:p-6 flex-1 flex-col flex">
        <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6">
          <time dateTime={date} className="mr-8">
            {formatDate(date)}
          </time>
        </div>
        <h3 className="mt-3 font-semibold text-black mb-6 text-base sm:text-lg md:text-xl !leading-[120%]">
          <Link href={`/blog/${id}`}>
            <span className="absolute inset-0" />
            {title}
          </Link>
        </h3>

        <Link
          href={`/blog/${id}`}
          className="flex gap-2 mt-auto btn btn-primary w-fit !text-sm">
          Read More
          <FontAwesomeIcon
            className="w-4 transition-all"
            icon={faLongArrowRight}
          />
        </Link>
      </div>
    </motion.article>
  );
};

export default PostCard;
