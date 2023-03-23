import { useEffect, useState } from "react";
import { RangePicker } from "react-minimal-datetime-range";
import "react-minimal-datetime-range/lib/react-minimal-datetime-range.min.css";

const now = new Date();

type Props = {
  defaultStartEndDateTimes: [Date, Date];
  onConfirm: (res: Date[]) => void;
  placeholder?: [string, string];
  disabled?: boolean;
};

const DateRangePicker = ({
  defaultStartEndDateTimes,
  onConfirm,
  placeholder = ["Start Time", "End Time"],
  disabled,
}: Props) => {
  // Set startDateTime and endDateTime to now initially, to enforce type to Date
  // instead of making setting the type to Nullable<Date>
  // The real values will be set below on the effect
  const [startDateTime, setStartDateTime] = useState(now);
  const [endDateTime, setEndDateTime] = useState(now);

  useEffect(() => {
    if (!startDateTime || !endDateTime) {
      // No matter how the user passed the two dates, we make sure that the min of the
      // two is set to startDateTime and the max of the two is set too endDateTime
      setStartDateTime(
        defaultStartEndDateTimes[0] < defaultStartEndDateTimes[1]
          ? defaultStartEndDateTimes[0]
          : defaultStartEndDateTimes[1]
      );
      setEndDateTime(
        defaultStartEndDateTimes[0] < defaultStartEndDateTimes[1]
          ? defaultStartEndDateTimes[1]
          : defaultStartEndDateTimes[0]
      );
    }
  }, []);

  /**
   * The RangePicker plugin returns an array of strings instead of Dates
   * when a selection is done. Before forwarding the result to the passed
   * onConfirm function prop, we normalise it to an array of dates
   *
   * __RangePicker result format:__ ['YYYY-MM-DD hh:mm', 'YYYY-MM-DD hh:mm']
   *
   * @returns [Date, Date]
   */
  const onConfirmResponseTransformer = ([
    startDateResult,
    endDateResult,
  ]: string[]) =>
    onConfirm([new Date(startDateResult), new Date(endDateResult)]);

  /**
   * This normalises the passed Date object to the required format of the RangePicker component:
   * * __defaultDate__: YYYY-MM-DD
   * * __defaultTime__: hh:mm
   *
   * @param date
   * @returns [YYYY-MM-DD, hh:mm]
   */
  const normalizeDateTime = (date: Date) => {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hour = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");
    return [`${year}-${month}-${day}`, `${hour}:${minute}`];
  };

  const [startDate, startTime] = normalizeDateTime(startDateTime);
  const [endDate, endTime] = normalizeDateTime(endDateTime);

  return (
    <RangePicker
      defaultDates={[startDate, endDate]}
      defaultTimes={[startTime, endTime]}
      placeholder={placeholder}
      disabled={disabled}
      onConfirm={onConfirmResponseTransformer}
    />
  );
};
export default DateRangePicker;
