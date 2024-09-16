export const MainPage = () => {
  return (
    <>
      <img
        className="object-cover h-48 w-[22.5rem] pt-4"
        src="/src/assets/frontpage-house.JPG"
        alt="Picture with UK houses"
      />
      <h1 className="font-forum text-5xl my-3 ml-2 font-thin">
        Mortgages made simple
      </h1>
      <div className="flex items-center gap-2 ml-2">
        <img
          className="h-8"
          src="/src/assets/frontpage-tick.png"
          alt="green tick icon"
        />
        <p className="my-2 font-semibold">
          Your Mortgage Partner—No Credit or Income Too Complex!
        </p>
      </div>

      <div className="flex items-center gap-2 ml-2">
        <img
          className="h-8"
          src="/src/assets/frontpage-tick.png"
          alt="green tick icon"
        />
        <p className="my-2 font-semibold">
          Tailored Mortgage Solutions for First-Time, Joint Buyers, Buy To Let &
          More!
        </p>
      </div>

      <div className="flex items-center gap-2 ml-2">
        <img
          className="h-8"
          src="/src/assets/frontpage-tick.png"
          alt="green tick icon"
        />
        <p className="my-2 font-semibold">
          Backed by 20+ years of expertise, we deliver success with proven
          results!
        </p>
      </div>

      <div className="flex flex-col mx-24 mt-7 gap-3">
        <button className="p-2 rounded-full text-white bg-dark-green hover:bg-light-green">
          Services
        </button>
        <button className="p-2 rounded-full text-white bg-dark-green hover:bg-light-green">
          Mortgage calculator
        </button>
        <button className="p-2 rounded-full text-white bg-dark-green hover:bg-light-green">
          Stamp duty calculator
        </button>
      </div>
    </>
  );
};
