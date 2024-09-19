import { Link } from "@tanstack/react-router";

export const Sidebar = ({
  showSidebar,
  setShowSidebar,
}: {
  showSidebar: boolean;
  setShowSidebar: (x: boolean) => void;
}) => {
  return (
    <div
      className={
        "fixed z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out" +
        (showSidebar
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <div
        className={
          "right-0 w-56 absolute bg-dark-green h-full shadow-xl delay-400 duration-700 ease-in-out transition-all transform  text-white lg:w-2/6" +
          (showSidebar ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <nav className="relative pl-8 flex flex-col gap-6 h-full lg:text-xl lg:pl-14">
          <p
            className="p-4 font-bold text-lg cursor-pointer mb-0 pl-0"
            onClick={() => setShowSidebar(false)}
          >
            X
          </p>
          <Link
            to="/services"
            className="text-white no-underline hover:underline hover:font-bold"
            onClick={() => setShowSidebar(false)}
          >
            Services
          </Link>
          <Link
            to="/affordabilityCalculator"
            className="text-white no-underline hover:underline hover:font-bold"
            onClick={() => setShowSidebar(false)}
          >
            Affordability calculator
          </Link>
          <Link
            to="/stampDutyCalculator"
            className="text-white no-underline hover:underline hover:font-bold"
            onClick={() => setShowSidebar(false)}
          >
            Stamp duty calculator
          </Link>
          <Link
            to="/about"
            className="text-white no-underline hover:underline hover:font-bold"
            onClick={() => setShowSidebar(false)}
          >
            About us
          </Link>
          <Link
            to="/contact"
            className="text-white no-underline hover:underline hover:font-bold"
            onClick={() => setShowSidebar(false)}
          >
            Contact us
          </Link>
        </nav>
      </div>
      <div
        className="w-screen h-full cursor-pointer"
        onClick={() => {
          setShowSidebar(false);
        }}
      ></div>
    </div>
  );
};
