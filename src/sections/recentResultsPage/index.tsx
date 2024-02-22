import PageHead from "@/components/pageHead";
import results from "@/constants/results";

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
          <div className="grid-cols-2 flex-col flex-wrap justify-start sm:grid sm:gap-y-0 xl:flex xl:flex-row">
            {results.map((card, index) => (
              <div
                className="px-8 pb-8 pt-10 text-gray-900 border-t border-gray-200 flex items-stretch last-of-type:border-b"
                key={index}
              >
                <div className="text-4xl flex flex-col gap-2 pr-10 border-r border-r-gray-200 items-center justify-center mr-10">
                  2024
                  <span className="text-lg text-gray-400 font-normal">
                    18 June
                  </span>
                </div>
                <div>
                  <h3 className="mb-4 text-2xl font-semibold text-black">
                    {card.title}
                  </h3>
                  <div className="text-black/[0.5]">{card.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RecentResultsPage;
