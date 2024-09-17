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

  const { register, handleSubmit } = useForm<AffordabilityInputs>();

  const calculateMortgage: SubmitHandler<AffordabilityInputs> = (data) => {
    console.log(data);
    const range = affordabilityFormula(data);
    setEstimatedRange(range);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(calculateMortgage)}
        className="flex flex-col items-center gap-4"
      >
        <label className="block mb-2 text-sm font-medium">
          No. of people applying
        </label>
        <fieldset className="flex justify-around">
          <div className="flex items-center mb-4">
            <input
              id="option-1"
              type="radio"
              value={1}
              {...register("numPeople", { required: true })}
            />
            <label
              htmlFor="option-1"
              className="block ms-2 text-sm font-medium"
            >
              1
            </label>
          </div>

          <div className="flex items-center mb-4">
            <input
              id="option-2"
              type="radio"
              value={2}
              {...register("numPeople", { required: true })}
            />
            <label
              htmlFor="option-2"
              className="block ms-2 text-sm font-medium"
            >
              2
            </label>
          </div>
        </fieldset>

        <label className="block mb-2 text-sm font-medium">
          1st person annual income
        </label>
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
            defaultValue={0}
            {...register("income1", { required: true })}
          />
        </div>

        <label className="block mb-2 text-sm font-medium">
          1st person monthly outgoings
        </label>
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
            defaultValue={0}
            {...register("totalOutgoings1", { required: true })}
          />
        </div>

        {
          <>
            <label className="block mb-2 text-sm font-medium">
              2nd person annual income
            </label>
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
              <input type="number" defaultValue={0} {...register("income2")} />
            </div>

            <label className="block mb-2 text-sm font-medium">
              2st person monthly outgoings
            </label>
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
                defaultValue={0}
                {...register("totalOutgoings2")}
              />
            </div>
          </>
        }

        <button type="submit">Calculate</button>
      </form>

      {estimatedRange.length !== 0 && (
        <>
          <p>Range:</p>
          <p>
            {"£" +
              estimatedRange[0] / 1000 +
              "k - " +
              "£" +
              estimatedRange[1] / 1000 +
              "k"}
          </p>
        </>
      )}
    </>
  );
};
