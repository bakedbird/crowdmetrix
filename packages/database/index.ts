import { Footfall } from "@crowdmetrix/footfall";
import { existsSync, readFileSync, writeFileSync } from "fs";
const dbFile = "./database.json";

const createDb = () => {
  writeFileSync(dbFile, JSON.stringify({ footfall: [] }));
  console.log("🎉 DB created.");
};

const readFootfallData = (): { footfall: Footfall[] } => {
  if (!existsSync(dbFile)) {
    console.log("😅 DB doesn't exist. Creating...");
    createDb();
  }

  return JSON.parse(readFileSync(dbFile, "utf8"));
};

const writeFootfallRows = (dataToImport: Footfall[]) => {
  const dbData = readFootfallData();

  // DB is empty. Write the incoming rows with value >= 0 and don't continue any further
  if (!dbData.footfall.length) {
    const footfall = dataToImport.reduce((acc: Footfall[], curr, idx) => {
      if (curr.value < 0) {
        return acc;
      }

      return [...acc, { ...curr, id: idx + 1 }];
    }, []);

    writeFileSync(dbFile, JSON.stringify({ footfall }, null, 2));
    return;
  }

  // Find rows in the DB that have the same time as any of the incoming items
  // If the value of the incoming row is negative, remove the row
  // Otherwise replace the old value with the new
  const updatedDbData = dbData.footfall.reduce((acc: Footfall[], curr) => {
    const updatedItem = dataToImport.find(
      (item) => JSON.stringify(item.time) === JSON.stringify(curr.time)
    );

    if (!updatedItem) {
      return [...acc, { ...curr, id: acc.length + 1 }];
    }
    if (updatedItem.value < 0) {
      return acc;
    }

    return [...acc, { ...curr, value: updatedItem.value, id: acc.length + 1 }];
  }, []);

  // Find the items that don't exist in the (updated) DB and their value is >= 0
  const newItems = dataToImport.filter(
    (item) =>
      item.value >= 0 &&
      !updatedDbData.some(
        (row) => JSON.stringify(row.time) === JSON.stringify(item.time)
      )
  );

  // The final array of DB data: updated values + new items
  const footfall = [
    ...updatedDbData,
    ...newItems.map((newItem, idx) => ({
      ...newItem,
      id: updatedDbData.length + idx + 1,
    })),
  ];

  writeFileSync(dbFile, JSON.stringify({ footfall }, null, 2));
};

export { createDb, readFootfallData, writeFootfallRows };
