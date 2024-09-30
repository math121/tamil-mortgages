import { Link } from "@tanstack/react-router";
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import { useLocation } from "@tanstack/react-router";

export const NavLinks = () => {
  const { chooseEnglish, chooseTamil } = useContext(LanguageContext);
  const location = useLocation();

  return (
    <div className="hidden sm:block bg-dark-orange">
      <nav className="font-bold">
        <div className=" bg-light-orange flex justify-end">
          <button onClick={chooseTamil}>Tamil</button>
          <button onClick={chooseEnglish}>English</button>
        </div>
        <div className="flex gap-2 pl-3 text-base w-fit mx-auto">
          <Link
            to="/"
            className={`text-black no-underline hover:bg-light-orange flex items-center gap-2 py-5 px-4 ${
              location.pathname === "/"
                ? "border-dark-orange bg-light-orange"
                : ""
            } `}
          >
            <svg
              className="w-4 h-4 mb-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            Home
          </Link>
          <Link
            to="/about"
            className={`text-black no-underline hover:bg-light-orange py-5 px-4 ${
              location.pathname === "/about"
                ? "border-dark-orange bg-light-orange"
                : ""
            } `}
          >
            About us
          </Link>
          <Link
            to="/services"
            className={`text-black no-underline hover:bg-light-orange py-5 px-4 ${
              location.pathname === "/services"
                ? "border-dark-orange bg-light-orange"
                : ""
            } `}
          >
            Services
          </Link>
          <Link
            to="/affordabilityCalculator"
            className={`text-black no-underline hover:bg-light-orange py-5 px-4 ${
              location.pathname === "/affordabilityCalculator"
                ? "border-dark-orange bg-light-orange"
                : ""
            } `}
          >
            Affordability calculator
          </Link>
          <Link
            to="/stampDutyCalculator"
            className={`text-black no-underline hover:bg-light-orange py-5 px-4 ${
              location.pathname === "/stampDutyCalculator"
                ? "border-dark-orange bg-light-orange"
                : ""
            } `}
          >
            Stamp duty calculator
          </Link>

          <Link
            to="/contact"
            className={`text-black no-underline hover:bg-light-orange py-5 px-4 ${
              location.pathname === "/contact"
                ? "border-dark-orange bg-light-orange"
                : ""
            } `}
          >
            Contact us
          </Link>
          <Link
            to="/"
            className={`text-black no-underline hover:bg-light-orange py-5 px-4 ${
              location.pathname === "/faq"
                ? "border-dark-orange bg-light-orange"
                : ""
            } `}
          >
            FAQ
          </Link>
        </div>
      </nav>
    </div>
  );
};
