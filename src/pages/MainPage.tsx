import { useNavigate } from "@tanstack/react-router";

export const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="md:grid grid-cols-2 lg:pl-4 md:gap-3 lg:gap-8 lg:pr-20">
      <img
        className="object-cover h-48 w-full pt-4 md:h-screen"
        src="/src/assets/frontpage-house.JPG"
        alt="Picture with UK houses"
      />
      <div className="md:pt-10">
        <h1 className="font-forum italic text-5xl my-4 ml-2 lg:text-6xl">
          Mortgages Made Simple
        </h1>
        <div className="flex items-center gap-2 ml-2 md:pr-4">
          <img
            className="h-8"
            src="/src/assets/frontpage-tick.png"
            alt="green tick icon"
          />
          <p className="my-4 font-semibold md:text-lg lg:text-xl">
            Your Mortgage Partner—No Credit or Income Too Complex!
          </p>
        </div>

        <div className="flex items-center gap-2 ml-2 md:pr-4">
          <img
            className="h-8"
            src="/src/assets/frontpage-tick.png"
            alt="green tick icon"
          />
          <p className="my-2 font-semibold md:text-lg lg:text-xl">
            Tailored Mortgage Solutions for First-Time, Joint Buyers, Buy To Let
            & More!
          </p>
        </div>

        <div className="flex items-center gap-2 ml-2 md:pr-4">
          <img
            className="h-8"
            src="/src/assets/frontpage-tick.png"
            alt="green tick icon"
          />
          <p className="my-2 font-semibold md:text-lg lg:text-xl">
            Backed by 20+ years of expertise, we deliver success with proven
            results!
          </p>
        </div>

        <div className="flex flex-col mx-16 mt-7 gap-4 md:w-fit md:ml-0 md:gap-7 md:mt-14">
          <button
            className="p-2 rounded-full text-white bg-dark-green hover:bg-light-green cursor-pointer text-base md:px-24"
            onClick={() => navigate({ to: "/services" })}
          >
            Services
          </button>
          <button
            className="p-2 rounded-full text-white bg-dark-green cursor-pointer hover:bg-light-green text-base"
            onClick={() => navigate({ to: "/affordabilityCalculator" })}
          >
            Affordability calculator
          </button>
          <button
            className="p-2 rounded-full text-white bg-dark-green cursor-pointer hover:bg-light-green text-base"
            onClick={() => navigate({ to: "/stampDutyCalculator" })}
          >
            Stamp duty calculator
          </button>
        </div>
      </div>
    </div>
  );
};
