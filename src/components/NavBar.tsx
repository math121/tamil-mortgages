import { Link, Outlet } from "@tanstack/react-router";
import { NavLinks } from "./NavLinks";
import { Footer } from "./Footer";
import { ScrollRestoration } from "@tanstack/react-router";
import { MobileBottomNavBar } from "./MobileBottomNavBar";
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

export const NavBar = () => {
  const { chooseEnglish, chooseTamil } = useContext(LanguageContext);

  return (
    <>
      <ScrollRestoration />
      <nav className="bg-beige rounded-lg sm:px-3 lg:flex items-center justify-between gap-5">
        <div className="flex items-center justify-between p-2 pr-4">
          <Link
            to="/"
            className="flex gap-3 items-center no-underline text-black"
          >
            <img
              className="h-20 lg:h-32 py-1"
              src="/src/assets/lotus-logo.png"
              alt="All Credit Mortgages Logo"
            />
            <div className="text-center">
              <p className="font-belleza font-bold text-xl my-0 lg:text-3xl">
                TAMILIAN
              </p>
              <div className="inline-flex items-center justify-center">
                <hr className="w-48 h-px bg-black" />
                <span className="absolute px-3 text-black bg-beige font-belleza font-bold text-[14px] lg:text-lg">
                  MORTGAGES
                </span>
              </div>

              <p className="font-belleza text-[14px] my-0 lg:text-base">
                FOR ALL YOUR NEEDS
              </p>
            </div>
          </Link>
        </div>
        <NavLinks />
        <div className="ml-auto mr-0 w-fit sm:hidden">
          <button onClick={chooseTamil}>Tamil</button>
          <button onClick={chooseEnglish}>English</button>
        </div>
      </nav>

      <MobileBottomNavBar />
      <main className="w-full min-h-screen mb-10">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
