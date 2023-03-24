import { DateHelpers } from "@crowdmetrix/date";
import { useState } from "react";
import { RangePicker } from "react-minimal-datetime-range";
import "react-minimal-datetime-range/lib/react-minimal-datetime-range.min.css";

type Props = {
  onConfirm: (res: [Date, Date]) => void;
};

const DateRangePicker = ({ onConfirm }: Props) => {
  const [startDateTime, setStartDateTime] = useState(new Date());
  const [endDateTime, setEndDateTime] = useState(new Date());

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
  ]: string[]) => {
    let startResultToDate = new Date(startDateResult);
    let endResultToDate = new Date(endDateResult);

    setStartDateTime(startResultToDate);
    setEndDateTime(endResultToDate);
    onConfirm([startResultToDate, endResultToDate]);
  };

  // This normalises the passed Date object to the required format of the RangePicker component:
  // * __defaultDate__: YYYY-MM-DD
  // * __defaultTime__: hh:mm
  // toDateAndTimeStirngFormat() returns [YYYY-MM-DD, hh:mm]
  const [startDate, startTime] =
    DateHelpers.toDateAndTimeStirngFormat(startDateTime);
  const [endDate, endTime] = DateHelpers.toDateAndTimeStirngFormat(endDateTime);

  return (
    <RangePicker
      defaultDates={[startDate, endDate]}
      defaultTimes={[startTime, endTime]}
      onConfirm={onConfirmResponseTransformer}
    />
  );
};
export default DateRangePicker;
