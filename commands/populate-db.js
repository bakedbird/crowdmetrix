const { readFile, writeFile } = require("fs");

const isValidDate = (dateToCheck) =>
  dateToCheck instanceof Date || !!Date.parse(dateToCheck);

// removes ' and " and all whitespace, except for space
// if the value is a number, removes the quotes
const removeUnneededChars = (value) => {
  let sanitised = value
    .replaceAll('"', "")
    .replaceAll("'", "")
    .replaceAll(new RegExp(/[^\S ]+/g), "");

  return isNaN(sanitised) ? sanitised : +sanitised;
};

const getArguments = () => {
  let r = process.argv.slice(2).reduce((acc, curr) => {
    let [key, value] = curr.split("=");
    key = key.split("--")[1];

    if (key && value) {
      return { ...acc, [key]: value };
    } else return acc;
  }, {});

  return r;
};

const csvToJson = (fileData, delimiter) => {
  delimiter = delimiter ?? ";";

  // Determine line break strategy and split the file lines
  if (fileData.includes("\r\n")) {
    fileData = fileData.split("\r\n");
  } else if (fileData.includes("\r")) {
    fileData = fileData.split("\r");
  } else if (fileData.includes("\n")) {
    fileData = fileData.split("\n");
  }

  let [headers, ...lines] = fileData;
  let result = [];

  headers = headers
    .split(delimiter)
    .map((header) => removeUnneededChars(header).toLowerCase());

  lines = lines.map((line) => {
    let lineValues = line.split(delimiter).map((value) => {
      let sanitised = removeUnneededChars(value);

      // if the sanitised value is not a number, check if it is a valid date and if it is, return a date
      // This ensures that all incoming dates are normalised to ISO 8601
      return isNaN(sanitised) && isValidDate(sanitised)
        ? new Date(sanitised)
        : sanitised;
    });

    let resLine = headers.reduce((acc, curr, idx) => {
      return { ...acc, [curr]: lineValues[idx] };
    }, {});

    result.push(resLine);
  });

  return JSON.stringify({ footfall: result }, null, 2);
};

const populateDbCommand = () => {
  const arguments = getArguments();

  if (arguments.file) {
    console.log("🔧 Creating database...");
    readFile(arguments.file, (err, data) => {
      let json = csvToJson(data.toString(), arguments.delimiter);

      writeFile("database.json", json, (err) => {
        if (err) console.log(err);
        else {
          console.log("🎉 Database created on file: ./database.json'!");
        }
      });
    });
  } else {
    console.error("ERR: No file argument passed.");
  }
};

populateDbCommand();
