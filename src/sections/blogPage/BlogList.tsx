import PostCard from "./PostCard";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import PageHead from "@/components/pageHead";
import Title from "@/components/title";
import { staggerContainer } from "@/utils/motionVariants";
import { motion } from "framer-motion";

const BlogList = ({ posts, showItem = 10, showPagination = true }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const showLimit = showItem,
    paginationItem = 10;

  const [pagination, setPagination] = useState<number[]>([]);
  const [limit, setLimit] = useState(showLimit);
  const [pages, setPages] = useState(Math.ceil(posts.length / limit));

  useEffect(() => {
    cratePagination();
  }, [limit, pages, posts.length]);

  const cratePagination = () => {
    let arr = new Array(Math.ceil(posts.length / limit))
      .fill(0)
      .map((_, idx) => idx + 1);

    setPagination(arr);
    setPages(Math.ceil(posts.length / limit));
  };

  const startIndex = currentPage * limit - limit;
  const endIndex = startIndex + limit;
  const getPaginatedProducts = posts.slice(startIndex, endIndex);

  let start = Math.floor((currentPage - 1) / paginationItem) * paginationItem;
  let end = start + paginationItem;
  const getPaginationGroup = pagination.slice(start, end);

  const scrollToTop = () => {
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  const next = () => {
    setCurrentPage((page) => page + 1);
    scrollToTop();
  };

  const prev = () => {
    setCurrentPage((page) => page - 1);
    scrollToTop();
  };

  const handleActive = (item: number) => {
    setCurrentPage(item);
    scrollToTop();
  };

  return (
    <>
      <PageHead pageName="Blog" title="Blog" hasBreadCrumb />
      <section id="blog" className="padding-y">
        <div className="container">
          <Title title="Our Blog" subTitle="Dive into Insights" />

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6"
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {getPaginatedProducts.map((item: any, index: number) => (
              <PostCard key={index} index={index} {...item} showDescription />
            ))}
          </motion.div>
          {showPagination && (
            <Pagination
              getPaginationGroup={getPaginationGroup}
              currentPage={currentPage}
              pages={pages}
              next={next}
              prev={prev}
              handleActive={handleActive}
            />
          )}
        </div>
      </section>
    </>
  );
};
export default BlogList;
