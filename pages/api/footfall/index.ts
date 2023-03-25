import { DateHelpers } from "@crowdmetrix/date";
import {
  DateRangeKeyValue,
  Footfall,
  GetFootfallRes,
} from "@crowdmetrix/footfall";
import {
  calculateAverage,
  calculateEmptyDays,
  calculateMax,
  calculateMin,
  calculateMostVisitedDay,
  calculateTotal,
} from "@crowdmetrix/footfall/helpers";
import type { NextApiRequest, NextApiResponse } from "next";
import db from "../../../database.json";

const getPreviousPeriodData = (currentStartId: number, dataLength: number) => {
  if (!currentStartId) return [];

  let prevStartId = currentStartId - dataLength;
  let prevEndId = currentStartId - 1;

  return db.footfall.filter(
    (item) => item.id >= prevStartId && item.id <= prevEndId
  );
};

const filterFootfallByDateRange = (
  footfallItems: Footfall[],
  dateRange: DateRangeKeyValue,
  dates?: [string, string]
) => {
  let items: Footfall[] = [];

  switch (dateRange) {
    case "today":
      items = footfallItems.filter((footfall) =>
        DateHelpers.isToday(new Date(footfall.time))
      );
      break;

    case "yesterday":
      items = footfallItems.filter((footfall) => {
        let yesteday = DateHelpers.getDaysAgoDate(1);
        return DateHelpers.isSameDay([new Date(footfall.time), yesteday]);
      });
      break;

    case "last-7-days":
      items = footfallItems.filter((footfall) => {
        let lastWeek = DateHelpers.getDaysAgoDate(7);
        let itemDate = new Date(footfall.time);
        return itemDate >= lastWeek && itemDate <= new Date();
      });
      break;

    case "custom-range":
      if (dates) {
        items = footfallItems.filter((footfall) => {
          let startDate = new Date(dates[0]);
          let endDate = new Date(dates[1]);
          let itemDate = new Date(footfall.time);
          return itemDate >= startDate && itemDate <= endDate;
        });
      }
      break;

    default:
      break;
  }

  return items;
};

const formatFootfallDates = (items: Footfall[]) => {
  const isAllItemsSameDay = items.every((item) =>
    DateHelpers.isSameDay([new Date(item.time), new Date(items[0].time)])
  );

  if (isAllItemsSameDay) {
    return items.map((i) => ({
      ...i,
      time: DateHelpers.toDateOrTimeFormat(i.time, "hh:mm"),
    }));
  } else {
    const isAllItemsSameYear = items.every((item) =>
      DateHelpers.isSameYear([new Date(items[0].time), new Date(item.time)])
    );

    const hasDaysWithMultipleRows = (() => {
      // to check if there are multiple rows with the same date, we first create a new Set
      // and then iterate through the items, and compare the size of the set with the size
      // of the set with the currently iterated item added. If the item already exists in
      // the set, the compared sizes will not be the same. Since we only care for the same
      // date, we add the item in the set usinng the "dd/mm/yyyy" format
      let unique = new Set();
      return items.some(
        (item) =>
          unique.size ===
          unique.add(DateHelpers.toDateOrTimeFormat(item.time, "dd/mm/yyyy"))
            .size
      );
    })();

    // There are multiple factors to determine how to format the time field
    // If all items are of the same year, return the time field as "mm/dd",
    // otherwise as "dd/mm/yyyy" In both cases, if there are multiple items
    // with the same date, inject the time: "MM/dd hh:mm", otherwise as "dd/MM/yyyy hh:mm"
    if (isAllItemsSameYear) {
      return items.map((item) => ({
        ...item,
        time: DateHelpers.toDateOrTimeFormat(
          item.time,
          hasDaysWithMultipleRows ? "MM/dd hh:mm" : "mm/dd"
        ),
      }));
    } else {
      return items.map((item) => ({
        ...item,
        time: DateHelpers.toDateOrTimeFormat(
          item.time,
          hasDaysWithMultipleRows ? "dd/MM/yyyy hh:mm" : "dd/mm/yyyy"
        ),
      }));
    }
  }
};

export default (req: NextApiRequest, res: NextApiResponse<GetFootfallRes>) => {
  let data = db.footfall;

  const { "dates[]": dates, dateRange } = req.query;

  data = filterFootfallByDateRange(
    data,
    dateRange as DateRangeKeyValue,
    dates as [string, string]
  );

  let prevPeriod = getPreviousPeriodData(data[0]?.id, data.length);

  res.status(200).json({
    data: formatFootfallDates(data),
    max: calculateMax(data),
    min: calculateMin(data),
    average: calculateAverage(data),
    total: calculateTotal(data),
    emptyDays: calculateEmptyDays(data),
    mostVisitedDay: calculateMostVisitedDay(data),
    prevPeriodData: prevPeriod,
    prevAverage: calculateAverage(prevPeriod),
    prevTotal: calculateTotal(prevPeriod),
    prevEmptyDays: calculateEmptyDays(prevPeriod),
    prevMostVisitedDay: calculateMostVisitedDay(prevPeriod),
    prevMax: calculateMax(prevPeriod),
    prevMin: calculateMin(prevPeriod),
  });
};
