import { GetFootfallRes } from "@crowdmetrix/footfall";
import {
  calculateAverage,
  calculateMax,
  calculateMin,
} from "@crowdmetrix/footfall/helpers";
import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../database.json";

export default (req: NextApiRequest, res: NextApiResponse<GetFootfallRes>) => {
  let { dates, dateRange } = req.query;

  res.status(200).json({
    data: db.footfall,
    max: calculateMax(db.footfall),
    min: calculateMin(db.footfall),
    average: calculateAverage(db.footfall),
  });
};
