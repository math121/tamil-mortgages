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
    <>
      <form
        onSubmit={handleSubmit(calculateStampDuty)}
        className="flex flex-col items-center gap-4"
      >
        <label className="block mb-2 text-sm font-medium">Property price</label>
        <div className="flex">
          <span className="inline-flex items-center px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.121 7.629A3 3 0 0 0 9.017 9.43c-.023.212-.002.425.028.636l.506 3.541a4.5 4.5 0 0 1-.43 2.65L9 16.5l1.539-.513a2.25 2.25 0 0 1 1.422 0l.655.218a2.25 2.25 0 0 0 1.718-.122L15 15.75M8.25 12H12m9 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </span>
          <input
            type="number"
            {...register("propertyPrice", { required: true })}
          />
        </div>

        <fieldset>
          <div className="flex items-center mb-4">
            <input
              id="option-1"
              type="radio"
              value="First time buyer"
              {...register("typeBuyer")}
            />
            <label
              htmlFor="option-1"
              className="block ms-2 text-sm font-medium"
            >
              First time buyer
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="option-2"
              type="radio"
              value="Second time buyer/additional properties"
              {...register("typeBuyer")}
            />
            <label
              htmlFor="option-2"
              className="block ms-2 text-sm font-medium "
            >
              Second time buyer/ additional properties
            </label>
          </div>
        </fieldset>
        <button type="submit">Calculate</button>
      </form>

      {result && rate && (
        <>
          <p>Results:</p>
          <p>Stamp Duty: {result}</p>
          <p>Rate: {rate}</p>
        </>
      )}
    </>
  );
};
