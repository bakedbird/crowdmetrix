import { Nullable } from "custom-types";

const setItem = (key: string, value: any) => {
  if (key) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

const getItem = <T extends any>(key: string): Nullable<T> => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : item;
};

const removeItem = (key: string) => localStorage.removeItem(key);

export default { setItem, getItem, removeItem };
