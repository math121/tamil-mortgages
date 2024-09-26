import { useNavigate } from "@tanstack/react-router";

export const MobileBottomNavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="fixed flex flex-nowrap bottom-0 left-0 bg-dark-green w-full sm:hidden">
        <button
          className="inline-flex flex-col items-center p-4 bg-dark-green hover:bg-light-green text-white flex-grow"
          onClick={() => {
            navigate({ to: "/" });
          }}
        >
          <svg
            className="w-5 h-5 mb-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
          </svg>
          <span>Home</span>
        </button>
        <button
          className="inline-flex flex-col items-center p-4 bg-dark-green hover:bg-light-green text-white flex-grow"
          onClick={() => {
            navigate({ to: "/about" });
          }}
        >
          <svg
            className="w-5 h-5 mb-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z" />
          </svg>

          <span>About</span>
        </button>
        <button
          className="inline-flex flex-col items-center p-4 bg-dark-green hover:bg-light-green text-white flex-grow"
          onClick={() => {
            navigate({ to: "/affordabilityCalculator" });
          }}
        >
          <svg
            className="w-5 h-5 mb-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4 4c0-.975.718-2 1.875-2h12.25C19.282 2 20 3.025 20 4v16c0 .975-.718 2-1.875 2H5.875C4.718 22 4 20.975 4 20V4Zm7 13a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z" />
          </svg>
          <span>A-Cal</span>
        </button>
        <button
          className="inline-flex flex-col items-center p-4 bg-dark-green hover:bg-light-green text-white flex-grow"
          onClick={() => {
            navigate({ to: "/stampDutyCalculator" });
          }}
        >
          <svg
            className="w-5 h-5 mb-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4 4c0-.975.718-2 1.875-2h12.25C19.282 2 20 3.025 20 4v16c0 .975-.718 2-1.875 2H5.875C4.718 22 4 20.975 4 20V4Zm7 13a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z" />
          </svg>
          <span>S-Cal</span>
        </button>
        <button
          className="inline-flex flex-col items-center p-4 bg-dark-green hover:bg-light-green text-white flex-grow"
          onClick={() => {
            navigate({ to: "/contact" });
          }}
        >
          <svg
            className="w-5 h-5 mb-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
            <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
          </svg>
          <span>Contact</span>
        </button>
      </div>
    </>
  );
};
