type StampDutyCalculations = {
  stampDuty: number;
  rate: number;
};

const rate0 = 0 / 100;
const rate3 = 3 / 100;
const rate5 = 5 / 100;
const rate8 = 8 / 100;
const rate10 = 10 / 100;
const rate12 = 12 / 100;
const rate13 = 13 / 100;
const rate15 = 15 / 100;

export const stampDutyFirstTimeBuyer = (
  propertyPrice: number
): StampDutyCalculations => {
  /*
  0% on the first £425,000
  5% on the portion from £425,001 to £625,000
  */

  const amountRate0 = 425000;
  const amountRate5 = [425001, 625000];

  if (propertyPrice <= amountRate0) {
    return { stampDuty: rate0 * propertyPrice, rate: rate0 };
  }
  if (propertyPrice >= amountRate5[0] && propertyPrice <= amountRate5[1]) {
    const stampDutyForProperty = rate5 * (propertyPrice - amountRate0);
    const taxRate = ((stampDutyForProperty / propertyPrice) * 100).toFixed(2);
    return {
      stampDuty: Math.round(stampDutyForProperty),
      rate: parseFloat(taxRate),
    };
  }
  return stampDutyFirstTimeBuyerOver625001(propertyPrice);
};

const stampDutyFirstTimeBuyerOver625001 = (
  propertyPrice: number
): StampDutyCalculations => {
  /*
  0% on the first £250,000
  5% on the portion from £250,001 to £925,000
  10% on the portion from £925,001 to £1,500,000
  12% on the anything ahove £1,500,001
  */

  const amountRate0 = 250000;
  const amountRate5 = [250001, 925000];
  const amountRate10 = [925001, 1500000];

  const stampDuty5Percent = (amountRate5[1] - amountRate0) * rate5;
  const stampDuty10Percent = (amountRate10[1] - amountRate5[1]) * rate10;

  // for 5%
  if (propertyPrice >= amountRate5[0] && propertyPrice <= amountRate5[1]) {
    const stampDutyForProperty = rate5 * (propertyPrice - amountRate0);
    const taxRate = ((stampDutyForProperty / propertyPrice) * 100).toFixed(2);

    return {
      stampDuty: Math.round(stampDutyForProperty),
      rate: parseFloat(taxRate),
    };
  }

  // for 10%
  if (propertyPrice >= amountRate10[0] && propertyPrice <= amountRate10[1]) {
    const stampDutyForProperty = rate10 * (propertyPrice - amountRate5[1]);
    const totalStampDuty = stampDuty5Percent + stampDutyForProperty;
    const taxRate = ((totalStampDuty / propertyPrice) * 100).toFixed(2);
    return { stampDuty: Math.round(totalStampDuty), rate: parseFloat(taxRate) };
  }

  // for 12%
  const stampDutyForProperty = rate12 * (propertyPrice - amountRate10[1]);
  const totalStampDuty =
    stampDuty5Percent + stampDuty10Percent + stampDutyForProperty;
  const taxRate = ((totalStampDuty / propertyPrice) * 100).toFixed(2);
  return { stampDuty: Math.round(totalStampDuty), rate: parseFloat(taxRate) };
};

export const stampDutySecondTimeBuyer = (
  propertyPrice: number
): StampDutyCalculations => {
  /*
  3% on the first £250,000
  8% on the portion from £250,001 to £925,000
  13% on the portion from £925,001 to £1,500,000
  15% on the portion above £1,500,000
  */

  const amountRate3 = 250000;
  const amountRate8 = [250001, 925000];
  const amountRate13 = [925001, 1500000];

  const stampDuty3Percent = rate3 * amountRate3;
  const stampDuty8Percent = rate8 * (amountRate8[1] - amountRate3);
  const stampDuty13Percent = rate13 * (amountRate13[1] - amountRate8[1]);

  // for 3%
  if (propertyPrice <= amountRate3) {
    const stampDutyForProperty = rate3 * propertyPrice;
    const taxRate = ((stampDutyForProperty / propertyPrice) * 100).toFixed(2);
    return {
      stampDuty: Math.round(rate3 * propertyPrice),
      rate: parseFloat(taxRate),
    };
  }

  // for 8%
  if (propertyPrice >= amountRate8[0] && propertyPrice <= amountRate8[1]) {
    const stampDutyForProperty = rate8 * (propertyPrice - amountRate3);
    const totalStampDuty = stampDuty3Percent + stampDutyForProperty;
    const taxRate = ((totalStampDuty / propertyPrice) * 100).toFixed(2);

    return {
      stampDuty: Math.round(totalStampDuty),
      rate: parseFloat(taxRate),
    };
  }

  // for 13%
  if (propertyPrice >= amountRate13[0] && propertyPrice <= amountRate13[1]) {
    const stampDutyForProperty = (propertyPrice - amountRate8[1]) * rate13;
    const totalStampDuty =
      stampDutyForProperty + stampDuty8Percent + stampDuty3Percent;
    const taxRate = ((totalStampDuty / propertyPrice) * 100).toFixed(2);

    return { stampDuty: Math.round(totalStampDuty), rate: parseFloat(taxRate) };
  }

  // for 15%
  const stampDutyForProperty = rate15 * (propertyPrice - amountRate13[1]);
  const totalStampDuty =
    stampDuty3Percent +
    stampDuty8Percent +
    stampDuty13Percent +
    stampDutyForProperty;
  const taxRate = ((totalStampDuty / propertyPrice) * 100).toFixed(2);
  return { stampDuty: Math.round(totalStampDuty), rate: parseFloat(taxRate) };
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

  let totalOutgoings = Number(data.totalOutgoings1) * 12;

  if (data.numPeople === 2) {
    totalOutgoings += Number(data.totalOutgoings2) * 12;
  }

  const totalIncome = Number(data.income1) + Number(data.income2);

  const remainingAmount = totalIncome - totalOutgoings;
  const estimatedAmount = remainingAmount * incomeMultiplier;

  const lowerEstimate =
    estimatedAmount - estimatedAmount * rangePlusMinusPercent;
  const higherEstimate =
    estimatedAmount + estimatedAmount * rangePlusMinusPercent;

  return [lowerEstimate, higherEstimate];
};
