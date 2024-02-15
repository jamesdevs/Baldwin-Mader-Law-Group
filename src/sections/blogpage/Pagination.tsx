import { cn } from "@/utils";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({
  getPaginationGroup,
  currentPage,
  handleActive,
  prev,
  next,
  pages,
}: any) => {
  return (
    <div className="mt-12">
      <nav aria-label="Page navigation example">
        <ul className="flex items-center gap-2">
          {getPaginationGroup.length <= 0 ? null : (
            <li
              onClick={currentPage === 1 ? null : prev}
              className={cn(
                "border border-gold w-11 h-11 font-medium text-gold flex items-center justify-center cursor-pointer",
                currentPage === 1 && "opacity-70 pointer-events-none"
              )}
            >
              <a className="page-link">
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className={cn("text-gold w-3 h-3.5")}
                />
              </a>
            </li>
          )}

          {getPaginationGroup.map((item: any, index: any) => {
            return (
              <li
                onClick={() => handleActive(item)}
                key={index}
                className={
                  currentPage === item
                    ? "border border-gold w-11 h-11 bg-gold font-medium flex items-center justify-center bg-primary text-white cursor-default"
                    : "border border-gold w-11 h-11  font-medium text-gold flex items-center justify-center cursor-pointer"
                }
              >
                <a className="page-link">{item}</a>
              </li>
            );
          })}

          {getPaginationGroup.length <= 0 ? null : (
            <li
              onClick={currentPage >= pages ? null : next}
              className={cn(
                "border border-gold w-11 h-11 font-medium text-gold flex items-center justify-center cursor-pointer",
                currentPage >= pages && "opacity-70 pointer-events-none"
              )}
            >
              <a className="page-link">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={cn("text-gold w-3 h-3.5")}
                />
              </a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
