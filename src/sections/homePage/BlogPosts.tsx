import Title from "@/components/title";
import { staggerContainer } from "@/utils/motionVariants";
import Link from "next/link";
import { motion } from "framer-motion";
import PostCard from "../blogpage/PostCard";

const BlogPosts = ({ posts }: any) => {
  return (
    <section className="padding-y bg-gray-100/80">
      <div className="container">
        <Title title="BLVD Blog" subTitle="Discover Tips, Ideas, and Stories" />
        <motion.div
          className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {posts.map((post: any, index: number) => (
            <PostCard key={index} index={index} {...post} />
          ))}
        </motion.div>

        <div className="mx-auto flex justify-center">
          <Link href="/blog" className="btn btn-primary min-w-[8rem] mt-10">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
