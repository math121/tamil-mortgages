import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { affordabilityFormula } from "../utils/formulas";

type AffordabilityInputs = {
  numPeople: number;
  income1: number;
  income2: number;
  totalOutgoings1: number;
  totalOutgoings2: number;
};

export const AffordabilityCalc = () => {
  const [estimatedRange, setEstimatedRange] = useState<number[]>([]);
  const [radioNum, setRadioNum] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AffordabilityInputs>();

  const calculateAffordability: SubmitHandler<AffordabilityInputs> = (data) => {
    console.log(data);
    const sendData: AffordabilityInputs = {
      numPeople: data.numPeople,
      income1: data.income1,
      totalOutgoings1: data.totalOutgoings1,
      income2: data.income2 !== undefined ? data.income2 : 0,
      totalOutgoings2:
        data.totalOutgoings2 !== undefined ? data.totalOutgoings2 : 0,
    };
    const range = affordabilityFormula(sendData);
    setEstimatedRange(range);
  };

  return (
    <div className="p-2 md:flex md:gap-10">
      <form
        onSubmit={handleSubmit(calculateAffordability)}
        className="md:w-3/6"
      >
        <p>Estimate how much you can borrow for your next property.</p>
        <label className="font-semibold block">No. of people applying:</label>
        <fieldset className="border-none pt-0 flex justify-normal gap-7 mt-4">
          <div className="flex items-center">
            <input
              id="1"
              type="radio"
              value="1"
              className="w-7 h-7 accent-dark-green cursor-pointer"
              {...register("numPeople", {
                required: "Select one of the options above",
              })}
              onClick={() => {
                setRadioNum(1);
                setEstimatedRange([]);
              }}
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
              className="w-7 h-7 accent-dark-green cursor-pointer"
              {...register("numPeople", {
                required: "Select one of the options above",
              })}
              onClick={() => {
                setRadioNum(2);
                setEstimatedRange([]);
              }}
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
          <span className="inline-flex items-center px-4 text-sm bg-lightest-green rounded-s-md font-bold">
            £
          </span>
          <input
            type="number"
            className="text-sm p-2 rounded-e-md border border-dark-green w-64"
            defaultValue={0}
            {...register("income1", {
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
          <span className="inline-flex items-center px-4 text-sm bg-lightest-green rounded-s-md font-bold">
            £
          </span>
          <input
            type="number"
            className="text-sm p-2 rounded-e-md border border-dark-green w-64"
            defaultValue={0}
            {...register("totalOutgoings1", {
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
          {errors.totalOutgoings1 && errors.totalOutgoings1.message}
        </span>

        {radioNum === 2 && (
          <>
            <label className="font-semibold block py-4">
              Person 2 - Annual Income:
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-4 text-sm bg-lightest-green rounded-s-md font-bold">
                £
              </span>
              <input
                type="number"
                className="text-sm p-2 rounded-e-md border border-dark-green w-64"
                defaultValue={0}
                {...register("income2", {
                  required: "This is a required field",
                  validate: {
                    validNumber: (value) =>
                      !isNaN(value) || "Enter only numbers",
                    largerThanZero: (value) =>
                      value > 0 || "Enter a value bigger than 0",
                  },
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
              <span className="inline-flex items-center px-4 text-sm bg-lightest-green rounded-s-md font-bold">
                £
              </span>
              <input
                type="number"
                className="text-sm p-2 rounded-e-md border border-dark-green w-64"
                defaultValue={0}
                {...register("totalOutgoings2", {
                  required: "This is a required field",
                  validate: {
                    validNumber: (value) =>
                      !isNaN(value) || "Enter only numbers",
                    largerThanZero: (value) =>
                      value > 0 || "Enter a value bigger than 0",
                  },
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
          className="p-2 w-48 rounded-full text-white text-base bg-dark-green cursor-pointer hover:bg-light-green sm:w-60 block mt-10"
        >
          Calculate
        </button>
      </form>

      {estimatedRange.length !== 0 && (
        <div>
          <section className="border-2 border-solid border-dark-green rounded-xl px-2 mt-10">
            <div className="gap-3 items-center">
              <p>Estimated amount you can borrow:</p>
              <p className="font-bold text-2xl my-0">
                {"£" +
                  estimatedRange[0] / 1000 +
                  "k - " +
                  "£" +
                  estimatedRange[1] / 1000 +
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
