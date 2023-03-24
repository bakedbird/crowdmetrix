type DateTimeFormat =
  | "hh:mm"
  | "mm/dd"
  | "MM/dd hh:mm"
  | "dd/mm/yyyy"
  | "dd/MM/yyyy hh:mm";

const toDateAndTimeStirngFormat = (date: Date) => {
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const hour = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");

  return [`${year}-${month}-${day}`, `${hour}:${minute}`];
};

// Returns a Date object that is n days ago from today
// 24 * 3600 * 1000 = ms of a single day
const getDaysAgoDate = (days = 1) =>
  new Date(Date.now() - 24 * 3600 * 1000 * days);

const isSameDay = (dates: Date[]) => {
  let [first, ...rest] = dates;

  return rest.every(
    (date) =>
      first.getFullYear() === date.getFullYear() &&
      first.getMonth() === date.getMonth() &&
      first.getDate() === date.getDate()
  );
};

const isSameYear = (dates: Date[]) => {
  let [first, ...rest] = dates;

  return rest.every((date) => first.getFullYear() === date.getFullYear());
};

const isToday = (date: Date) => isSameDay([date, new Date()]);

const toDateOrTimeFormat = (
  dateToFormat: Date | string,
  format: DateTimeFormat
) => {
  if (!isValidDate(dateToFormat)) return dateToFormat.toString();

  const date =
    dateToFormat instanceof Date ? dateToFormat : new Date(dateToFormat);

  const [formattedDate, formattedTime] = toDateAndTimeStirngFormat(date);
  const [year, month, day] = formattedDate.split("-");
  const [hour, minute] = formattedTime.split(":");

  switch (format) {
    case "dd/mm/yyyy":
      return `${day}/${month}/${year}`;
    case "dd/MM/yyyy hh:mm":
      return `${day}/${month}/${year} ${hour}:${minute}`;

    case "mm/dd":
      return `${month}/${day}`;

    case "MM/dd hh:mm":
      return `${month}/${day} ${hour}:${minute}`;

    case "hh:mm":
      return `${hour}:${minute}`;

    default:
      return dateToFormat instanceof Date
        ? new Date(dateToFormat).toISOString()
        : dateToFormat;
  }
};

const isValidDate = (dateToCheck: Date | string) =>
  dateToCheck instanceof Date || !!Date.parse(dateToCheck);

export default {
  getDaysAgoDate,
  isSameDay,
  isSameYear,
  isToday,
  toDateOrTimeFormat,
  isValidDate,
  toDateAndTimeStirngFormat,
};
