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

  const { register, handleSubmit } = useForm<AffordabilityInputs>();

  const calculateAffordability: SubmitHandler<AffordabilityInputs> = (data) => {
    console.log(data);
    const range = affordabilityFormula(data);
    setEstimatedRange(range);
  };

  return (
    <div className="p-2 md:flex md:gap-10">
      <form
        onSubmit={handleSubmit(calculateAffordability)}
        className="grid gap-4 md:w-2/3"
      >
        <p>Estimate how much you can borrow for your next property.</p>
        <label className="font-semibold">No. of people applying:</label>

        <fieldset className="border-none p-0 flex gap-10">
          <div className="flex items-center">
            <input
              id="1"
              type="radio"
              value="1"
              className="w-7 h-7 accent-dark-green"
              defaultChecked
              {...register("numPeople")}
              onChange={() => {
                setRadioNum(1);
                setEstimatedRange([]);
              }}
            />
            <label htmlFor="1" className="ms-2 text-base">
              1
            </label>
          </div>

          <div className="flex items-center">
            <input
              id="2"
              type="radio"
              value="2"
              className="w-7 h-7 accent-dark-green"
              {...register("numPeople")}
              onChange={() => {
                setRadioNum(2);
                setEstimatedRange([]);
              }}
            />
            <label htmlFor="2" className="ms-2 text-base">
              2
            </label>
          </div>
        </fieldset>

        <label className="font-semibold">
          {radioNum === 1 ? "Your annual income" : "Person 1 - Annual income:"}
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-4 text-sm bg-lightest-green rounded-s-md font-bold">
            £
          </span>
          <input
            type="number"
            className="text-sm p-2 rounded-e-md border border-dark-green w-64"
            defaultValue={0}
            {...register("income1", { required: true })}
          />
        </div>

        <label className="font-semibold">
          {radioNum === 1
            ? "Your monthly outgoings income"
            : "Person 1 - Monthly outgoings:"}
        </label>
        <div className="flex">
          <span className="inline-flex items-center px-4 text-sm bg-lightest-green rounded-s-md font-bold">
            £
          </span>
          <input
            type="number"
            className="text-sm p-2 rounded-e-md border border-dark-green w-64"
            defaultValue={0}
            {...register("totalOutgoings1", { required: true })}
          />
        </div>

        {radioNum === 2 && (
          <>
            <label className="font-semibold">Person 2 - Annual income:</label>
            <div className="flex">
              <span className="inline-flex items-center px-4 text-sm bg-lightest-green rounded-s-md font-bold">
                £
              </span>
              <input
                type="number"
                className="text-sm p-2 rounded-e-md border border-dark-green w-64"
                defaultValue={0}
                {...register("income2", { required: true })}
              />
            </div>

            <label className="font-semibold">
              Person 2 - Monthly outgoings:
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-4 text-sm bg-lightest-green rounded-s-md font-bold">
                £
              </span>
              <input
                type="number"
                className="text-sm p-2 rounded-e-md border border-dark-green w-64"
                defaultValue={0}
                {...register("totalOutgoings2", { required: true })}
              />
            </div>
          </>
        )}

        <button
          type="submit"
          className="p-2 w-48 rounded-full text-white bg-dark-green cursor-pointer hover:bg-light-green mt-4 sm:w-60"
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
              <p>Lenders usually lend between 4-5 times your salary</p>
              <p>
                Hor much you can borrow can be affected by various factors like
                these:
              </p>
              <ul>
                <li>Credit rating</li>
                <li>Loans / Credit balances</li>
                <li>Children / dependents</li>
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
