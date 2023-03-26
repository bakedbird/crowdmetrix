import { Footfall } from "@crowdmetrix/footfall";

const isValidDate = (dateToCheck: Date | string) =>
  dateToCheck instanceof Date || !!Date.parse(dateToCheck);

// removes ' and " and all whitespace, except for space
// if the value is a number, removes the quotes
const removeUnneededChars = (value: string) => {
  let sanitised = value
    .replaceAll('"', "")
    .replaceAll("'", "")
    .replaceAll(new RegExp(/[^\S ]+/g), "");

  return isNaN(+sanitised) ? sanitised : +sanitised;
};

const isValidCSVData = (fileData: string[]) => {
  let [headersLine, ...restLines] = fileData;

  return restLines.every((line) => {
    return line.split(";").length === headersLine.split(";").length;
  });
};

const parseCSVData = (fileData: string[]) => {
  let [headersLine, ...restLines] = fileData;
  let result: Footfall[] = [];

  let headers = headersLine
    .split(";")
    .map((header) => (removeUnneededChars(header) as string).toLowerCase());

  restLines.forEach((line) => {
    let lineValues = line.split(";").map((value) => {
      let sanitised = removeUnneededChars(value);

      // if the sanitised value is not a number, check if it is a valid date and if it is, return a date
      // This ensures that all incoming dates are normalised to ISO 8601
      return isNaN(+sanitised) && isValidDate(sanitised as string)
        ? new Date(sanitised)
        : sanitised;
    });

    let resLine: Footfall = headers.reduce(
      (acc, curr, idx) => {
        return { ...acc, [curr]: lineValues[idx] };
      },
      { id: 0, time: "", value: 0 }
    );

    result.push(resLine);
  });

  return { footfall: result };
};

// On the frontent, we POST formdata with a single entry `importFile`,
// on the serverside, this is turned to a string with a very specific format.
// For reference, this is how it looks when split on CRLF:
//
// '------WebKitFormBoundarygt7t38okPABeAjis'
// 'Content-Disposition: form-data; name="importFile"; filename="1Footfall copy.csv"'
// 'Content-Type: text/csv'
// ''
// '... multiple lines, the FormData content ...'
// '------WebKitFormBoundaryWugGDbdFrG408ezY--',
//  '',
const parseFileFromFormData = (
  data: string
): { fileData: false | string[]; fileName: string } => {
  const [
    WebkitBoundaryStart,
    contentDisposition,
    contentType,
    emptyLine,
    ...fileData
  ] = data.split("\r\n");

  // Remove the last two lines from the array as they are the WebKitFormBoundary
  const webkitBoundaryLineIdx = fileData.length - 2;
  fileData.splice(webkitBoundaryLineIdx);

  // get the filename
  const regex = /filename="(.+)"/;
  const match = contentDisposition.match(regex);
  const fileName = match ? match[1] : "nofilename.how";

  if (!contentType.includes("text/csv")) {
    return { fileData: false, fileName };
  }

  return { fileData, fileName };
};

export default {
  isValidCSVData,
  parseCSVData,
  parseFileFromFormData,
};
