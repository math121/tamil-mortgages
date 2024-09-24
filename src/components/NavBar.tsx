import { Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
import { ScrollRestoration } from "@tanstack/react-router";

export const NavBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <ScrollRestoration />
      <nav className="bg-dark-green rounded-lg sm:pl-3">
        <div className="flex items-center justify-between p-2 pr-4">
          <Link
            to="/"
            className="flex gap-3 items-center no-underline text-white"
          >
            <img
              className="h-[50px] lg:h-16 py-1"
              src="/src/assets/logo-symbol.png"
              alt="All Credit Mortgages Logo"
            />
            <div>
              <p className="font-belleza text-xl my-0 lg:text-2xl">
                All Credit Mortgages
              </p>
              <p className="font-belleza text-[14px] my-0 lg:text-lg">
                Breaking Barriers to Homeownership for All
              </p>
            </div>
          </Link>
          <button
            className="p-2 w-10 h-10 rounded-lg bg-dark-green border-0 cursor-pointer text-white hover:bg-light-green lg:w-16 lg:h-16"
            onClick={() => setShowSidebar(true)}
          >
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

      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <main className="w-full min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
