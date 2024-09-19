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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StampDutyInputs>();

  const calculateStampDuty: SubmitHandler<StampDutyInputs> = (data) => {
    console.log("it is getting submitted");
    if (data.typeBuyer === "First time buyer") {
      const stampDuty = stampDutyFirstTimeBuyer(data.propertyPrice);
      setResult("£" + stampDuty.stampDuty);
      setRate(stampDuty.rate * 100 + "%");
    }
    if (data.typeBuyer === "Second time buyer/additional properties") {
      const stampDuty = stampDutySecondTimeBuyer(data.propertyPrice);
      setResult("£" + stampDuty.stampDuty);
      setRate(stampDuty.rate * 100 + "%");
    }
  };

  return (
    <div className="p-2 md:flex md:gap-10">
      <form onSubmit={handleSubmit(calculateStampDuty)} className="md:w-3/6">
        <p>
          Specify the property price in pounds and tick the box if you are a
          first time buyer or a second time buyer/ buying additional properties
        </p>
        <label className="font-semibold">Property price:</label>
        <div className="flex mt-4">
          <span className="inline-flex items-center px-4 text-sm bg-lightest-green rounded-s-md font-bold">
            £
          </span>
          <input
            type="number"
            className="text-sm p-2 rounded-e-md border border-dark-green w-64"
            defaultValue={0}
            {...register("propertyPrice", {
              required: "This is a required field",
              validate: {
                validNumber: (value) => !isNaN(value) || "Enter only numbers",
                largerThanZero: (value) =>
                  value > 0 || "Enter a value bigger than 0",
              },
            })}
          />
        </div>
        <span className="text-red-600">
          {errors.propertyPrice && errors.propertyPrice.message}
        </span>

        <fieldset className="border-none p-0 pt-7 flex justify-normal gap-4">
          <div className="flex items-center">
            <input
              id="firstbuy"
              type="radio"
              value="First time buyer"
              className="w-8 h-8 accent-dark-green cursor-pointer"
              {...register("typeBuyer", {
                required: "Select one of the options above",
              })}
            />
            <label htmlFor="firstbuy" className="ms-2 text-base cursor-pointer">
              First time buyer
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="secondbuy"
              type="radio"
              value="Second time buyer/additional properties"
              className="w-8 h-8 accent-dark-green cursor-pointer"
              {...register("typeBuyer", {
                required: "Select one of the options above",
              })}
            />
            <label
              htmlFor="secondbuy"
              className="ms-2 text-base cursor-pointer"
            >
              Second time buyer/ additional properties
            </label>
          </div>
        </fieldset>
        <span className="text-red-600">
          {errors.typeBuyer && errors.typeBuyer.message}
        </span>

        <button
          type="submit"
          className="p-2 w-48 rounded-full text-white text-base bg-dark-green cursor-pointer hover:bg-light-green sm:w-60 mt-10"
        >
          Calculate
        </button>
      </form>

      {result && rate && (
        <div>
          <section className="border-2 border-solid border-dark-green rounded-xl px-2 mt-10">
            <p>Stamp duty on your first property/additional property is</p>
            <p className="font-bold text-2xl my-0">{result}</p>
            <p>Rate: {rate}</p>
          </section>
        </div>
      )}
    </div>
  );
};
