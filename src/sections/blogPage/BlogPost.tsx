import {
  faFacebook,
  faInstagram,
  faTiktok,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from 'next/image';
import { INFO } from '@/constants';
import { formatDate } from '@/utils/formatDate';
import PageHead from '@/components/pageHead';

const shareSocialMeida = [
  {
    icon: faFacebook,
    name: 'facebook',

    href: (id: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        `${INFO.site}/blog/${id}`
      )}`,
  },
  {
    icon: faTwitter,
    name: 'twitter',
    href: (id: string) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        `${INFO.site}/blog/${id}`
      )}`,
  },
];

const BlogPost = ({ post, otherPosts }: any) => {
  return (
    <>
      <PageHead pageName="Blog" title={post.title} hasBreadCrumb />
      <article id="blog-post" className="padding-y">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-12">
            <div className="col-span-7 md:col-span-5 flex-col">
              <div className="h-[200px] sm:h-[250px] lg:h-96 relative overflow-hidden">
                <Image
                  src={
                    post?.featuredImage?.node?.sourceUrl ||
                    '/images/no-image.jpg'
                  }
                  className="w-full h-full object-cover transition-all !duration-300 group-hover:scale-[102%]"
                  alt={`blog-background`}
                  fill={true}
                />

                <div className="absolute inset-0 bg-[rgba(0,0,0,0.1)] opacity-0 group-hover:opacity-100 transition-opacity !duration-300" />
              </div>
              <div className="flex flex-col flex-1 mt-8">
                <div className="flex items-center gap-2 mb-4">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="w-3.5 h-3.5 text-gray-400/80"
                  />
                  <p className="text-gray-500 text-base font-medium">
                    {formatDate(post?.date)}
                  </p>
                </div>

                <h2 className="font-bold mb-6 md:text-3xl sm:text-2xl text-xl">
                  {post?.title}
                </h2>

                <div
                  className="mb-8 mt-auto prose lg:prose-base max-w-none overflow-hidden break-all"
                  dangerouslySetInnerHTML={{ __html: post?.content }}
                />

                <div className="flex items-center gap-4 border-t pt-6">
                  <p className="text-lg font-bold">Share:</p>

                  <ul className="flex gap-3 ">
                    {shareSocialMeida.map((item) => (
                      <Link
                        href={item.href(post.id)}
                        key={item.name}
                        target="_blank"
                        className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group transition-all duration-300 hover:bg-secondary">
                        <li>
                          <FontAwesomeIcon
                            icon={item.icon}
                            className="w-4 text-white transition-all duration-300  group-hover:text-white"
                          />
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-7 md:col-span-2 grid grid-cols-1 gap-6">
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold">Recent Articles</h3>
                <div className="flex flex-col gap-4 lg:gap-8 mt-5">
                  {otherPosts.map((item: any) => (
                    <Link
                      href={`/blog/${item.id}`}
                      className="flex xl:flex-row lg:flex-col gap-4 items-start">
                      <div className="w-[8rem] lg:w-full xl:w-[8rem] min-h-[6rem] h-full  relative">
                        <Image
                          src={
                            item?.featuredImage?.node?.sourceUrl ||
                            '/images/no-image.jpg'
                          }
                          className="w-full h-full object-cover"
                          alt={`blog-${item?.id}`}
                          fill={true}
                        />
                      </div>

                      <div className="flex flex-col flex-1 justify-between h-full">
                        <h4 className="font-semibold text-base hover:text-primary transition-all duration-300">
                          {item?.title?.length > 80
                            ? `${item?.title.slice(0, 80)}...`
                            : item?.title}
                        </h4>
                        <div className="flex items-center gap-1 my-1">
                          <FontAwesomeIcon
                            icon={faClock}
                            className="w-3 h-3 text-gray-400/80"
                          />
                          <p className="text-gray-600 text-xs sm:text-sm font-medium">
                            {formatDate(post?.date)}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};
export default BlogPost;
