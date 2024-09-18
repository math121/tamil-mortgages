import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  stampDutyFirstTimeBuyer,
  stampDutySecondTimeBuyer,
} from "../utils/formulas";

type StampDutyInputs = {
  propertyPrice: number;
  typeBuyer: string;
};

export const StampDutyCalculator = () => {
  const [result, setResult] = useState("");
  const [rate, setRate] = useState("");

  const { register, handleSubmit } = useForm<StampDutyInputs>();

  const calculateStampDuty: SubmitHandler<StampDutyInputs> = (data) => {
    if (data.typeBuyer === "First time buyer") {
      const stampDuty = stampDutyFirstTimeBuyer(data.propertyPrice);
      console.log("First time");
      console.log(stampDuty);
      setResult("£" + stampDuty.stampDuty);
      setRate(stampDuty.rate * 100 + "%");
    }
    if (data.typeBuyer === "Second time buyer/additional properties") {
      const stampDuty = stampDutySecondTimeBuyer(data.propertyPrice);
      console.log("Second time");
      console.log(stampDuty);
      setResult("£" + stampDuty.stampDuty);
      setRate(stampDuty.rate * 100 + "%");
    }
  };

  return (
    <div className="p-2">
      <p>
        Specify the property price in pounds and tick the box if you are a first
        time buyer or a second time buyer/ buying additional properties
      </p>
      <form onSubmit={handleSubmit(calculateStampDuty)} className="space-y-3">
        <label className="font-semibold">Property price:</label>
        <div className="flex">
          <span className="inline-flex items-center px-4 text-sm bg-lightest-green rounded-s-md font-bold">
            £
          </span>
          <input
            type="number"
            className="text-sm p-2 rounded-e-md border border-dark-green"
            defaultValue={0}
            {...register("propertyPrice", { required: true })}
          />
        </div>

        <fieldset className="border-none p-0 pt-4 flex justify-around gap-4">
          <div className="flex items-center mb-4">
            <input
              id="firstbuy"
              type="radio"
              value="First time buyer"
              className="w-8 h-8 accent-dark-green"
              {...register("typeBuyer")}
            />
            <label htmlFor="firstbuy" className="ms-2 text-base">
              First time buyer
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="secondbuy"
              type="radio"
              value="Second time buyer/additional properties"
              className="w-8 h-8 accent-dark-green"
              {...register("typeBuyer")}
            />
            <label htmlFor="secondbuy" className=" ms-2 text-base">
              Second time buyer/ additional properties
            </label>
          </div>
        </fieldset>
        <button
          type="submit"
          className="p-2 w-2/6 rounded-full text-white bg-dark-green cursor-pointer hover:bg-light-green"
        >
          Calculate
        </button>
      </form>

      {result && rate && (
        <>
          <section className="border-2 border-solid border-dark-green rounded-xl px-2 mt-10">
            <div className="gap-3 items-center">
              <p>Stamp duty on your first property/additional property is</p>
              <p className="font-bold text-2xl my-0">{result}</p>
              <p>Rate: {rate}</p>
            </div>
          </section>
        </>
      )}
    </div>
  );
};
