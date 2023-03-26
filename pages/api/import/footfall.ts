import { ErrorResponse } from "@crowdmetrix/api";
import { writeFootfallRows } from "@crowdmetrix/database";
import { ImportHelpers } from "@crowdmetrix/import";
import type { NextApiRequest, NextApiResponse } from "next";

type Response = { message: string };

export default (
  req: NextApiRequest,
  res: NextApiResponse<Response | ErrorResponse>
) => {
  const { fileData, fileName } = ImportHelpers.parseFileFromFormData(req.body);

  if (!fileData) {
    res
      .status(400)
      .json({ error: { message: `${fileName} is not a CSV file` } });
    return;
  }

  if (!ImportHelpers.isValidCSVData(fileData)) {
    res
      .status(400)
      .json({ error: { message: `${fileName} is not valid CSV` } });
    return;
  }

  const parsedFileData = ImportHelpers.parseCSVData(fileData);
  writeFootfallRows(parsedFileData.footfall);

  res.status(200).json({ message: `${fileName} was imported successfully.` });
};
