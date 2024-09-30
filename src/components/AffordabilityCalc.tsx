import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { affordabilityFormula } from "../utils/formulas";
import { InputNumberFormat } from "@react-input/number-format";

type AffordabilityInputs = {
  numPeople: string;
  income1: string;
  income2: string;
  totalOutgoings1: string;
  totalOutgoings2: string;
};

export const AffordabilityCalc = () => {
  const [estimatedRange, setEstimatedRange] = useState<number[]>([]);
  const [radioNum, setRadioNum] = useState(1);

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<AffordabilityInputs>({
    defaultValues: {
      numPeople: "1",
    },
  });

  const calculateAffordability: SubmitHandler<AffordabilityInputs> = (data) => {
    const sendData = {
      numPeople: Number(data.numPeople),
      income1: Number(data.income1.replace(/,/g, "")),
      totalOutgoings1: Number(data.totalOutgoings1.replace(/,/g, "")),
      income2:
        data.income2 !== undefined ? Number(data.income2.replace(/,/g, "")) : 0,
      totalOutgoings2:
        data.income2 !== undefined
          ? Number(data.totalOutgoings2.replace(/,/g, ""))
          : 0,
    };
    const range = affordabilityFormula(sendData);
    setEstimatedRange(range);
  };

  const resetFormOnRadioInputChange = (num: number) => {
    setRadioNum(num);
    setEstimatedRange([]);
    resetField("income1");
    resetField("income2");
    resetField("totalOutgoings1");
    resetField("totalOutgoings2");
  };

  return (
    <div className="p-2 md:flex md:gap-10">
      <form
        onSubmit={handleSubmit(calculateAffordability)}
        className="md:w-3/6"
      >
        <h1 className="hidden sm:block">Affordability Calculator</h1>
        <p>Estimate how much you can borrow for your next property.</p>
        <label className="font-semibold block">No. of people applying:</label>
        <fieldset className="border-none pt-0 flex justify-normal gap-7 mt-4">
          <div className="flex items-center">
            <input
              id="1"
              type="radio"
              value="1"
              className="w-7 h-7 accent-orange-600 cursor-pointer"
              {...register("numPeople", {
                required: "Select one of the options above",
              })}
              onChange={() => resetFormOnRadioInputChange(1)}
            />
            <label htmlFor="1" className="px-5 text-base cursor-pointer">
              1
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="2"
              type="radio"
              value="2"
              className="w-7 h-7 accent-orange-600 cursor-pointer"
              {...register("numPeople", {
                required: "Select one of the options above",
              })}
              onChange={() => resetFormOnRadioInputChange(2)}
            />
            <label htmlFor="2" className="px-5 text-base cursor-pointer">
              2
            </label>
          </div>
        </fieldset>
        <span className="text-red-600">
          {errors.numPeople && errors.numPeople.message}
        </span>

        <label className="font-semibold block py-4">
          {radioNum === 1 ? "Your Annual Income" : "Person 1 - Annual Income:"}
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-4 text-sm bg-light-orange rounded-s-md font-bold">
            £
          </span>
          <InputNumberFormat
            className="text-sm p-2 rounded-e-md border w-64"
            autoComplete="off"
            maximumFractionDigits={0}
            {...register("income1", {
              required: "This is a required field",
              validate: (value) =>
                Number(value.replace(/,/g, "")) > 0 ||
                "Enter a value bigger than 0",
            })}
          />
        </div>
        <span className="text-red-600">
          {errors.income1 && errors.income1.message}
        </span>

        <label className="font-semibold block pt-4">
          {radioNum === 1
            ? "Your Monthly Outgoings"
            : "Person 1 - Monthly Outgoings:"}
        </label>
        <p className="italic my-0">
          {"(including credit cards, loans, bills)"}
        </p>
        <div className="flex">
          <span className="inline-flex items-center px-4 text-sm bg-light-orange rounded-s-md font-bold">
            £
          </span>
          <InputNumberFormat
            className="text-sm p-2 rounded-e-md border w-64"
            autoComplete="off"
            maximumFractionDigits={0}
            {...register("totalOutgoings1", {
              required: "This is a required field",
              validate: (value) =>
                Number(value.replace(/,/g, "")) > 0 ||
                "Enter a value bigger than 0",
            })}
          />
        </div>
        <span className="text-red-600">
          {errors.totalOutgoings1 && errors.totalOutgoings1.message}
        </span>

        {radioNum === 2 && (
          <>
            <label className="font-semibold block py-4">
              Person 2 - Annual Income:
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-4 text-sm bg-light-orange rounded-s-md font-bold">
                £
              </span>
              <InputNumberFormat
                className="text-sm p-2 rounded-e-md border border-dark-green w-64"
                autoComplete="off"
                maximumFractionDigits={0}
                {...register("income2", {
                  required: "This is a required field",
                  validate: (value) =>
                    Number(value.replace(/,/g, "")) > 0 ||
                    "Enter a value bigger than 0",
                })}
              />
            </div>
            <span className="text-red-600">
              {errors.income2 && errors.income2.message}
            </span>

            <label className="font-semibold block pt-4">
              Person 2 - Monthly Outgoings:
            </label>
            <p className="italic my-0">
              {"(including credit cards, loans, bills)"}
            </p>
            <div className="flex">
              <span className="inline-flex items-center px-4 text-sm bg-light-orange rounded-s-md font-bold">
                £
              </span>
              <InputNumberFormat
                className="text-sm p-2 rounded-e-md border border-dark-green w-64"
                autoComplete="off"
                maximumFractionDigits={0}
                {...register("totalOutgoings2", {
                  required: "This is a required field",
                  validate: (value) =>
                    Number(value.replace(/,/g, "")) > 0 ||
                    "Enter a value bigger than 0",
                })}
              />
            </div>
            <span className="text-red-600">
              {errors.totalOutgoings2 && errors.totalOutgoings2.message}
            </span>
          </>
        )}

        <button
          type="submit"
          className="p-2 w-48 text-base bg-dark-orange cursor-pointer hover:bg-light-green sm:w-60 block mt-10 font-bold text-black 
          active:translate-y-2 active:translate-x-2  active:[box-shadow:0_0px_0_0_#ea7500,0_0px_0_0_#ea7500]
          transition-all duration-150 [box-shadow:4px_2px_0_0_#c5670a,4px_5px_0_0_#c5670a] border-[1px] border-dark-orange
          "
        >
          Calculate
        </button>
      </form>

      {estimatedRange.length !== 0 && (
        <div>
          <section className="border-2 border-solid border-dark-green rounded-xl mt-10">
            <div className="gap-3 items-center pl-5">
              <p>Estimated amount you can borrow:</p>
              <p className="font-bold text-2xl my-0">
                {"£" +
                  Math.round(estimatedRange[0] / 1000) +
                  "k - " +
                  "£" +
                  Math.round(estimatedRange[1] / 1000) +
                  "k"}
              </p>
              <p>
                How much you can borrow can be affected by various factors like
                these:
              </p>
              <ul>
                <li>Deposit</li>
                <li>Credit rating</li>
                <li>Loans / Credit balances</li>
                <li>Dependents</li>
                <li>Age</li>
                <li>Mortgage term</li>
                <li>Employment status</li>
              </ul>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};
