import { useState } from "react";
import { AffordabilityCalc } from "../components/AffordabilityCalc";
import { StampDutyCalculator } from "../components/StampDutyCalculator";

export const CalculatorsPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="flex justify-center list-none pt-4" role="tablist">
        <button
          className={`block px-7 pb-3.5 pt-4 text-xs uppercase hover:bg-blue-300 focus:ring-2 focus:bg-white focus:text-blue-600 ${
            activeTab === 0 ? "ring-2 bg-white text-blue-600" : ""
          } `}
          onClick={() => setActiveTab(0)}
        >
          Affordability calculator
        </button>
        <button
          className={`block px-7 pb-3.5 pt-4 text-xs uppercase hover:bg-blue-300 focus:ring-2 focus:bg-white focus:text-blue-600 ${
            activeTab === 1 ? "ring-2 bg-white text-blue-600" : ""
          } `}
          onClick={() => setActiveTab(1)}
        >
          Stamp Duty
        </button>
      </div>

      {/*Tab contents*/}
      <div className={`${activeTab === 0 ? "" : "hidden"}`}>
        <AffordabilityCalc />
      </div>
      <div className={`${activeTab === 1 ? "" : "hidden"}`}>
        <StampDutyCalculator />
      </div>
    </>
  );
};
