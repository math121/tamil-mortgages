import { Link } from "@tanstack/react-router";

export const NavLinks = () => {
  return (
    <div className="hidden sm:block">
      <nav className="flex gap-7 py-5 pl-3 text-base">
        <Link
          to="/"
          className="text-black no-underline hover:underline hover:font-bold"
        >
          Home
        </Link>
        <Link
          to="/services"
          className="text-black no-underline hover:underline hover:font-bold"
        >
          Services
        </Link>
        <Link
          to="/affordabilityCalculator"
          className="text-black no-underline hover:underline hover:font-bold"
        >
          Affordability calculator
        </Link>
        <Link
          to="/stampDutyCalculator"
          className="text-black no-underline hover:underline hover:font-bold"
        >
          Stamp duty calculator
        </Link>
        <Link
          to="/about"
          className="text-black no-underline hover:underline hover:font-bold"
        >
          About us
        </Link>
        <Link
          to="/contact"
          className="text-black no-underline hover:underline hover:font-bold"
        >
          Contact us
        </Link>
      </nav>
    </div>
  );
};
