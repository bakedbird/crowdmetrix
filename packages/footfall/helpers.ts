import { DateHelpers } from "@crowdmetrix/date";
import { Footfall } from "./types";

export const calculateMostVisitedDay = (data: Footfall[]) => {
  let visitorsByDay = data.reduce((acc: { [key: string]: number }, curr) => {
    const day = DateHelpers.toDayString(new Date(curr.time));

    if (!Object.keys(acc).includes(day)) {
      return { ...acc, [day]: curr.value };
    }

    return { ...acc, [day]: acc[day] + curr.value };
  }, {});

  const mostVisitedDay = Object.entries(visitorsByDay).reduce(
    (max, [key, value]) => (value > max[1] ? [key, value] : max),
    ["", 0]
  )[0];

  return mostVisitedDay;
};

export const calculateEmptyDays = (data: Footfall[]) =>
  data.reduce((acc, curr) => (!curr.value ? acc + 1 : acc), 0);

export const calculateTotal = (data: Footfall[]) =>
  data.reduce((acc, curr) => acc + curr.value, 0);

export const calculateAverage = (data: Footfall[]) =>
  data.length ? calculateTotal(data) / data.length : 0;

export const calculateMax = (data: Footfall[]) =>
  data.reduce((acc, curr) => Math.max(curr.value, acc), 0);

export const calculateMin = (data: Footfall[]) =>
  data.reduce((acc, curr) => Math.min(curr.value, acc), 0);

// Normalisation formula: ((x - min) / (max - min)) * 100
export const normaliseData = (data: Footfall[], min: number, max: number) => {
  const footfallData = data.map((x) => ({
    ...x,
    value: (((x.value as number) - min) / (max - min)) * 100,
  }));

  const average = calculateAverage(footfallData);

  return { footfallData, average };
};

// Denormalisation formula: (x / 100) * (max - min) + min
export const denormaliseData = (data: Footfall[], min: number, max: number) => {
  const footfallData = data.map((x) => ({
    ...x,
    value: ((x.value as number) / 100) * (max - min) + min,
  }));

  const average = calculateAverage(footfallData);

  return { footfallData, average };
};
