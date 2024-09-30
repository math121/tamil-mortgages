import { ServiceBoxInfo } from "../utils/types";
import LanguageContext from "../context/LanguageContext";
import { useContext } from "react";

export const ServiceBox = ({
  info,
  active,
  handleExpandCollapse,
}: {
  info: ServiceBoxInfo;
  active: number;
  handleExpandCollapse: (id: number) => void;
}) => {
  const { language } = useContext(LanguageContext);

  return (
    <>
      <section
        className="border-2 border-solid border-dark-green rounded-[40px] px-4"
        onClick={() => handleExpandCollapse(info.id)}
      >
        <div className="flex items-center justify-between">
          <div className="flex gap-3 items-center">
            <img
              className="rounded-full border-solid w-6 h-6"
              src="/src/assets/services-tick.png"
              alt="green tick icon"
            />
            <p className="uppercase">
              {language != "english" ? info.title : info.engTitle}
            </p>
          </div>
          <svg
            data-accordion-icon
            className={`w-4 h-4 shrink-0 sm:hidden ${info.id === active ? `rotate-0` : `rotate-180`}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </div>

        <p
          className={`mt-0 ${info.id === active ? `block` : `hidden`} sm:block`}
        >
          {language != "english" ? info.text : info.engText}
        </p>
      </section>
    </>
  );
};
