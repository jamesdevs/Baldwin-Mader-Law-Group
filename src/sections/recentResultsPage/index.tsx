import PageHead from "@/components/pageHead";
import results from "@/constants/results";
import motionVariants from "@/utils/motionVariants";
import { motion } from "framer-motion";

const RecentResultsPage = () => {
  return (
    <>
      <PageHead
        title="Recent Results"
        hasBreadCrumb
        pageName="Recent Results"
      />

      <section className="padding-y">
        <div className="container">
          <motion.div
            className="flex-col flex-wrap justify-start sm:grid sm:gap-y-0 xl:flex xl:flex-row"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            exit="exit"
            variants={motionVariants.fadeUp(40)}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {results.map((result, index) => (
              <div
                className="px-8 pb-8 pt-10 w-full text-gray-900 border-t border-gray-200 flex flex-col lg:flex-row items-stretch last-of-type:border-b"
                key={index}
              >
                <div className="max-lg:w-fit max-lg:mx-auto max-lg:min-w-[10rem] text-2xl whitespace-nowrap flex flex-col gap-2 pb-4 lg:pb-0 lg:pr-10 border-b lg:border-b-0 lg:border-r border-gray-200 items-center justify-center mb-4 lg:mb-0  lg:mr-10">
                  0{index + 1}
                  {/* <span className="text-base text-gray-400 font-normal">
                    {result.date}
                  </span> */}
                </div>
                <div className="max-lg:text-center flex flex-col max-lg:items-center">
                  <h3 className="mb-4 text-xl lg:text-2xl font-semibold text-black">
                    {result.title}
                  </h3>
                  <div className="text-black/[0.5]">{result.description}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default RecentResultsPage;
