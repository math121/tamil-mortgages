type StampDutyCalculations = {
  stampDuty: number;
  rate: number;
};

const rate0 = 0 / 100;
const rate3 = 3 / 100;
const rate5 = 5 / 100;
const rate10 = 10 / 100;
const rate12 = 12 / 100;

export const stampDutyFirstTimeBuyer = (
  propertyPrice: number
): StampDutyCalculations => {
  /*
  0% on the first £425,000
  5% on the portion from £425,001 to £625,000
  10% on the portion from £625,001 to £925,000
  12% on the portion above £925,000
  */

  const amountRate0 = 425000;
  const amountRate5 = [425001, 625000];
  const amountRate10 = [625001, 925000];
  //const amountRate12 = 925001;

  if (propertyPrice <= amountRate0) {
    return { stampDuty: rate0 * propertyPrice, rate: rate0 };
  }
  if (propertyPrice >= amountRate5[0] && propertyPrice <= amountRate5[1]) {
    return { stampDuty: rate5 * propertyPrice, rate: rate5 };
  }
  if (propertyPrice >= amountRate10[0] && propertyPrice <= amountRate10[1]) {
    return { stampDuty: rate10 * propertyPrice, rate: rate10 };
  }
  return { stampDuty: rate12 * propertyPrice, rate: rate12 };
};

export const stampDutySecondTimeBuyer = (propertyPrice: number) => {
  /*
  3% on the first £125,000
  5% on the portion from £125,001 to £250,000
  10% on the portion from £250,001 to £925,000
  12% on the portion above £925,000
  */

  const amountRate0 = 125000;
  const amountRate5 = [125001, 250000];
  const amountRate10 = [250001, 925000];
  //const amountRate12 = 925001;

  if (propertyPrice <= amountRate0) {
    return { stampDuty: rate3 * propertyPrice, rate: rate3 };
  }
  if (propertyPrice >= amountRate5[0] && propertyPrice <= amountRate5[1]) {
    return { stampDuty: rate5 * propertyPrice, rate: rate5 };
  }
  if (propertyPrice >= amountRate10[0] && propertyPrice <= amountRate10[1]) {
    return { stampDuty: rate10 * propertyPrice, rate: rate10 };
  }
  return { stampDuty: rate12 * propertyPrice, rate: rate12 };
};

type AffordabilityInputs = {
  numPeople: number;
  income1: number;
  income2: number;
  totalOutgoings1: number;
  totalOutgoings2: number;
};

//api - get live rates

export const affordabilityFormula = (data: AffordabilityInputs): number[] => {
  /* 
  1 or 2 people
  factors - deposit, credit

  input : total outgoings (tax, NI, phone bills, credit card bills and any other outgoings)  (per month)

  wage - (total outgoings*12) = remaining amount

  estimated amount:
  remaining amount * 4.5 = total amount they can borrow from bank  (+/- 10% of total amount)  display range
  */

  const rangePlusMinusPercent = 0.1;
  const incomeMultiplier = 4.5;

  const totalOutgoings =
    Number(data.totalOutgoings1) * 12 + Number(data.totalOutgoings2) * 12;
  const totalIncome = Number(data.income1) + Number(data.income2);

  const remainingAmount = totalIncome - totalOutgoings;
  const estimatedAmount = remainingAmount * incomeMultiplier;

  const lowerEstimate =
    estimatedAmount - estimatedAmount * rangePlusMinusPercent;
  const higherEstimate =
    estimatedAmount + estimatedAmount * rangePlusMinusPercent;

  return [lowerEstimate, higherEstimate];
};
