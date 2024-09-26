import { Link, Outlet } from "@tanstack/react-router";
import { NavLinks } from "./NavLinks";
import { Footer } from "./Footer";
import { ScrollRestoration } from "@tanstack/react-router";
import { MobileBottomNavBar } from "./MobileBottomNavBar";

export const NavBar = () => {
  return (
    <>
      <ScrollRestoration />
      <nav className="bg-dark-green rounded-lg sm:px-3">
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
        </div>
        <hr />
        <NavLinks />
      </nav>

      <MobileBottomNavBar />
      <main className="w-full min-h-screen mb-10">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
