import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  stampDutyFirstTimeBuyer,
  stampDutySecondTimeBuyer,
} from "../utils/formulas";
import { InputNumberFormat } from "@react-input/number-format";

type StampDutyInputs = {
  propertyPrice: string;
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
    const price = Number(data.propertyPrice.replace(/,/g, ""));
    if (data.typeBuyer === "First time buyer") {
      const stampDuty = stampDutyFirstTimeBuyer(price);
      setResult("£ " + new Intl.NumberFormat().format(stampDuty.stampDuty));
      setRate(stampDuty.rate + "%");
    }
    if (data.typeBuyer === "Second time buyer/additional properties") {
      const stampDuty = stampDutySecondTimeBuyer(price);
      setResult("£ " + new Intl.NumberFormat().format(stampDuty.stampDuty));
      setRate(stampDuty.rate + "%");
    }
  };

  return (
    <div className="p-2 md:flex md:gap-10">
      <form
        onSubmit={handleSubmit(calculateStampDuty)}
        className="md:w-6/12"
        autoComplete="off"
      >
        <p>
          Specify the property price in pounds and tick the box if you are a
          first time buyer or a second time buyer/ buying additional properties
        </p>
        <label className="font-semibold">Property price:</label>
        <div className="flex mt-4">
          <span className="inline-flex items-center px-4 text-sm bg-light-orange rounded-s-md font-bold">
            £
          </span>
          <InputNumberFormat
            className="text-sm p-2 rounded-e-md border w-64"
            maximumFractionDigits={0}
            {...register("propertyPrice", {
              required: "This is a required field",
              validate: (value) =>
                Number(value.replace(/,/g, "")) > 0 ||
                "Enter a value bigger than 0",
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
        <span className="text-red-600 block">
          {errors.typeBuyer && errors.typeBuyer.message}
        </span>

        <button
          type="submit"
          className="p-2 w-48 rounded-full font-bold text-base bg-dark-orange cursor-pointer hover:bg-light-green sm:w-60 mt-10"
        >
          Calculate
        </button>
      </form>

      {result && rate && (
        <div>
          <section className="border-2 border-solid rounded-xl px-2 mt-10">
            <div className="pl-3">
              <p>Stamp duty on your first property/additional property is</p>
              <p className="font-bold text-2xl my-0">{result}</p>
              <p>Tax rate: {rate}</p>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
