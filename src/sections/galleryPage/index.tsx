import PageHead from "@/components/pageHead";
import { useState } from "react";
import GalleryImageModal from "./GalleryImageModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import BlurImage from "@/components/image/BlurImage";
import Title from "@/components/title";

const gallery = [
  {
    sourceUrl: "/images/gallery/image-1.jpeg",
  },
  {
    sourceUrl: "/images/gallery/image-2.jpeg",
  },
  {
    sourceUrl: "/images/gallery/image-3.jpg",
  },
  {
    sourceUrl: "/images/gallery/image-4.jpg",
  },
  {
    sourceUrl: "/images/gallery/image-5.jpg",
  },
  {
    sourceUrl: "/images/gallery/image-6.jpg",
  },
  {
    sourceUrl: "/images/gallery/image-7.jpg",
  },
  {
    sourceUrl: "/images/gallery/image-9.jpg",
  },
  {
    sourceUrl: "/images/gallery/image-10.jpg",
  },
  {
    sourceUrl: "/images/gallery/image-11.jpg",
  },
  {
    sourceUrl: "/images/gallery/image-12.jpg",
  },
  {
    sourceUrl: "/images/gallery/image-13.jpg",
  },
  {
    sourceUrl: "/images/gallery/image-14.jpg",
  },
  {
    sourceUrl: "/images/gallery/image-15.jpg",
  },
  {
    sourceUrl: "/images/gallery/image-16.jpg",
  },
  {
    sourceUrl: "/images/gallery/image-17.jpg",
  },
  {
    sourceUrl: "/images/gallery/image-18.jpg",
  },
  {
    sourceUrl: "/images/gallery/image-19.jpg",
  },

  {
    sourceUrl: "/images/gallery/image-23.jpeg",
  },
  {
    sourceUrl: "/images/gallery/image-24.jpeg",
  },
  {
    sourceUrl: "/images/gallery/image-25.jpeg",
  },
  {
    sourceUrl: "/images/gallery/image-26.jpeg",
  },
  {
    sourceUrl: "/images/gallery/image-27.jpeg",
  },
  {
    sourceUrl: "/images/gallery/image-28.jpeg",
  },
  {
    sourceUrl: "/images/gallery/image-29.jpeg",
  },
  {
    sourceUrl: "/images/gallery/image-30.jpeg",
  },
  {
    sourceUrl: "/images/gallery/image-31.jpeg",
  },
  {
    sourceUrl: "/images/gallery/image-32.jpeg",
  },
  {
    sourceUrl: "/images/gallery/image-33.jpg",
  },
  {
    sourceUrl: "/images/gallery/image-34.jpg",
  },
  {
    sourceUrl: "/images/gallery/image-35.jpg",
  },
  {
    sourceUrl: "/images/gallery/image-36.jpg",
  },
  {
    sourceUrl: "/images/gallery/image-37.jpg",
  },
  {
    sourceUrl: "/images/gallery/image-38.jpg",
  },
  {
    sourceUrl: "/images/gallery/image-39.jpg",
  },
  {
    sourceUrl: "/images/gallery/image-40.jpg",
  },
  {
    sourceUrl: "/images/gallery/image-41.jpg",
  },
  {
    sourceUrl: "/images/gallery/image-42.jpg",
  },
  {
    sourceUrl: "/images/gallery/image-43.jpg",
  },
  {
    sourceUrl: "/images/gallery/image-44.jpeg",
  },
  {
    sourceUrl: "/images/gallery/image-45.jpeg",
  },
  {
    sourceUrl: "/images/gallery/image-46.jpeg",
  },
];

const GalleryPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerVisible, setViewerVisible] = useState(false);

  const openImageViewer = (index: number) => {
    setCurrentImage(index);
    setViewerVisible(true);
  };

  const closeImageViewer = () => {
    setViewerVisible(false);
  };

  return (
    <>
      <PageHead title="Gallery" pageName="Gallery" hasBreadCrumb />
      <section id="gallery" className="padding-y">
        <div className="container">
          <Title
            title="See Our Work"
            subTitle="Discover our projects and get inspired"
          />
          <div className="grid xs:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-4">
            {gallery?.map((item, index) => (
              <div key={index}>
                <div
                  className="h-[50vw] max-h-[26rem] xl:h-[26rem] overflow-hidden relative group cursor-pointer"
                  key={index}
                  onClick={() => openImageViewer(index)}
                >
                  <BlurImage
                    src={item.sourceUrl}
                    alt={`gallery-image-${index}`}
                    className="w-full h-full"
                    imageClassName="object-cover transition-all duration-300"
                  />

                  <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      className="text-white w-8"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <GalleryImageModal
            {...{ closeImageViewer, currentImage, gallery, viewerVisible }}
          />
        </div>
      </section>
    </>
  );
};
export default GalleryPage;
