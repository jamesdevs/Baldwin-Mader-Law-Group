import Image from "@/components/image";
import Title from "@/components/title";
import team from "@/constants/team";

const Team = () => {
  return (
    <section className="bg-[#F1F5FA] pb-10 !pt-40">
      <div className="container">
        <Title title="Attorney Profiles" subTitle="Meet the crew" center />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {team.map((item) => (
            <div className="border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-500 hover:border-gray-300 rounded-sm">
              <div className="flex h-full items-center gap-6 bg-white">
                <Image
                  src={item.imgSrc}
                  alt={item.name}
                  className="h-full w-40 min-h-[10rem] overflow-hidden"
                  imageClassName="object-cover"
                />
                <div>
                  <h3 className="font-lato font-bold text-xl mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-400">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
