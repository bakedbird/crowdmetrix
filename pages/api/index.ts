import type { NextApiRequest, NextApiResponse } from "next";

type Response = {
  message: string;
};

export default (req: NextApiRequest, res: NextApiResponse<Response>) => {
  res.status(404).json({
    message:
      "We may have footfall data for millions of stores, but there's no store here!",
  });
};
