import { Outlet, useNavigate, useLocation } from "@tanstack/react-router";

export const CalculatorsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className="flex justify-center list-none pt-4" role="tablist">
        <button
          className={`block px-7 pb-3.5 pt-4 text-xs uppercase hover:bg-blue-300 focus:ring-2 focus:bg-white focus:text-blue-600 ${
            location.pathname === "/affordabilityCalculator"
              ? "ring-2 bg-white text-blue-600"
              : ""
          } `}
          onClick={() => {
            navigate({ to: "/affordabilityCalculator" });
          }}
        >
          Affordability calculator
        </button>
        <button
          className={`block px-7 pb-3.5 pt-4 text-xs uppercase hover:bg-blue-300 focus:ring-2 focus:bg-white focus:text-blue-600 ${
            location.pathname === "/stampDutyCalculator"
              ? "ring-2 bg-white text-blue-600"
              : ""
          } `}
          onClick={() => {
            navigate({ to: "/stampDutyCalculator" });
          }}
        >
          Stamp Duty
        </button>
      </div>
      <Outlet />
    </>
  );
};
