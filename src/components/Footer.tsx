import { Link } from "@tanstack/react-router";

export const Footer = () => {
  return (
    <>
      <footer className="flex flex-col content-start -mx-2 sm:-mb-2 sm:mt-10 pb-24 sm:pb-0 bg-light-orange font-bold">
        <nav className="hidden sm:flex justify-center p-3 pt-5 gap-10 md:justify-normal md:pl-4 md:pt-8">
          <Link
            to="/services"
            className="text-black no-underline hover:underline hover:font-bold"
          >
            Services
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

        <p className="bg-light-orange p-4 m-0 text-start">
          © 2024 Tamilian Mortgage
        </p>
      </footer>
    </>
  );
};
