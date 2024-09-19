import { Outlet, useNavigate, useLocation } from "@tanstack/react-router";

export const CalculatorsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div
        className="flex justify-center pt-4 gap-5 border-solid border-0 border-b border-gray-500 sm:justify-normal sm:mx-5"
        role="tablist"
      >
        <button
          className={`pb-3.5 pt-4 text-sm uppercase border-0 bg-white text-gray-500 hover:text-dark-green  ${
            location.pathname === "/affordabilityCalculator"
              ? "text-dark-green font-bold border-solid border-b-2 border-dark-green"
              : ""
          } `}
          onClick={() => {
            navigate({ to: "/affordabilityCalculator" });
          }}
        >
          Affordability calculator
        </button>
        <button
          className={`pb-3.5 pt-4 text-sm uppercase border-0 bg-white text-gray-500 hover:text-dark-green  ${
            location.pathname === "/stampDutyCalculator"
              ? "text-dark-green font-bold border-solid border-b-2 border-dark-green"
              : ""
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
