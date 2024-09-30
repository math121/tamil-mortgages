import { Outlet, useNavigate, useLocation } from "@tanstack/react-router";

export const CalculatorsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div
        className="flex justify-center pt-4 gap-5 border-solid border-0 border-b border-light-orange sm:hidden"
        role="tablist"
      >
        <button
          className={`pb-3.5 pt-4 text-sm uppercase border-0 bg-white hover:text-dark-orange  ${
            location.pathname === "/affordabilityCalculator"
              ? "text-dark-orange font-bold border-solid border-b-2 border-dark-orange"
              : "text-gray-500"
          } `}
          onClick={() => {
            navigate({ to: "/affordabilityCalculator" });
          }}
        >
          Affordability calculator
        </button>
        <button
          className={`pb-3.5 pt-4 text-sm uppercase border-0 bg-white hover:text-dark-orange  ${
            location.pathname === "/stampDutyCalculator"
              ? "text-dark-orange font-bold border-solid border-b-2 border-dark-orange"
              : "text-gray-500"
          } `}
          onClick={() => {
            navigate({ to: "/stampDutyCalculator" });
          }}
        >
          Stamp Duty
        </button>
      </div>
      <div className="sm:mx-8">
        <Outlet />
      </div>
    </>
  );
};
