import { Footfall } from "./types";

const calculateAverage = (data: Footfall[]) =>
  data.reduce((acc, curr) => acc + curr.value, 0) / data.length;

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
