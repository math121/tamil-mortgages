import { Link, Outlet } from "@tanstack/react-router";

export const NavBar = () => {
  return (
    <>
      <nav className="bg-dark-green rounded-lg">
        <div className="flex flex-wrap items-center justify-between p-2 pr-4">
          <Link to="/">
            <img
              className="h-12 lg:h-20"
              src="/src/assets/logo.png"
              alt="All Credit Mortgages Logo"
            />
          </Link>
          <button className="p-2 w-10 h-10 rounded-lg bg-dark-green border-0 cursor-pointer text-white hover:bg-light-green lg:w-16 lg:h-16">
            <svg
              className="w-6 h-6 lg:w-10 lg:h-10"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
