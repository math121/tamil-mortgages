import { useNavigate } from "@tanstack/react-router";
import LanguageContext from "../context/LanguageContext";
import { useContext } from "react";

export const MainPage = () => {
  const navigate = useNavigate();
  const { language } = useContext(LanguageContext);

  return (
    <div className="md:grid grid-cols-2 lg:pl-4 md:gap-3 lg:gap-8 lg:pr-20">
      <img
        className="object-cover h-48 w-full pt-4 md:h-screen"
        src="/src/assets/frontpage-house.JPG"
        alt="Picture with UK houses"
      />
      <div className="md:pt-10">
        {language != "english" ? (
          <p className="font-forum font-bold italic text-lg my-4 ml-2 lg:text-4xl">
            எங்கள் மிது நம்பிக்கை வைத்து உங்கள் இலட்சியத்தை நிறைவேற்றுங்கள்.
          </p>
        ) : (
          <p>ENGLISH</p>
        )}
        <div className="flex items-center gap-2 ml-2 md:pr-4">
          <img
            className="h-8"
            src="/src/assets/frontpage-tick.png"
            alt="green tick icon"
          />
          {language != "english" ? (
            <p className="my-4 font-semibold text-sm md:text-lg lg:text-xl">
              உங்கள் அடமான பங்குதாரர்- கடன் அல்லது வருமானம் எதுவும் செய்ய
              கடினமாக உள்ளதா?
            </p>
          ) : (
            <p>ENGLISH</p>
          )}
        </div>

        <div className="flex items-center gap-2 ml-2 md:pr-4">
          <img
            className="h-8"
            src="/src/assets/frontpage-tick.png"
            alt="green tick icon"
          />
          {language != "english" ? (
            <p className="my-4 font-semibold text-sm md:text-lg lg:text-xl">
              எங்களுடைய திறமை யாராய் இருந்தாலும் வீடு வாங்குவதற்கு இலகுவான
              முறையில் எல்லா விதமான உதவிகளும் சேய்து தரப்படும்
            </p>
          ) : (
            <p>ENGLISH</p>
          )}
        </div>

        <div className="flex items-center gap-2 ml-2 md:pr-4">
          <img
            className="h-8"
            src="/src/assets/frontpage-tick.png"
            alt="green tick icon"
          />
          {language != "english" ? (
            <p className="my-2 font-semibold text-sm md:text-lg lg:text-xl">
              நம்பி அழைப்பில் முன்பதிவு செய்து கொள்ளுங்கள் உங்களின் அனைத்து
              தேவைகளை புர்த்தி சேய்யும் ஒரே இடம் T.M
            </p>
          ) : (
            <p>ENGLISH</p>
          )}
        </div>

        <div className="flex flex-col mx-16 mt-7 gap-4 md:w-fit md:ml-0 md:gap-7 md:mt-14">
          <button
            className="p-2 rounded-full bg-beige hover:bg-light-green cursor-pointer text-base md:px-24"
            onClick={() => navigate({ to: "/services" })}
          >
            Services
          </button>
          <button
            className="p-2 rounded-full bg-beige cursor-pointer hover:bg-light-green text-base"
            onClick={() => navigate({ to: "/affordabilityCalculator" })}
          >
            Affordability calculator
          </button>
          <button
            className="p-2 rounded-full bg-beige cursor-pointer hover:bg-light-green text-base"
            onClick={() => navigate({ to: "/stampDutyCalculator" })}
          >
            Stamp duty calculator
          </button>
        </div>
      </div>
    </div>
  );
};
