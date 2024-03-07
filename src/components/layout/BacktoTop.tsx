import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const BacktoTop = () => {
  const [showArrow, setShowArrow] = useState(false);

  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleArrow = () => {
      setShowArrow(window.scrollY > 300);
    };

    if (window) {
      handleArrow();

      window.addEventListener("scroll", handleArrow);

      return () => {
        window.removeEventListener("scroll", handleArrow);
      };
    }
  }, []);

  return (
    <>
      {showArrow && (
        <FontAwesomeIcon
          icon={faChevronUp}
          className="fixed bottom-3 right-3 w-10 p-1.5 z-10 cursor-pointer rounded-sm text-white bg-primary"
          onClick={handleToTop}
        />
      )}
    </>
  );
};

export default BacktoTop;
