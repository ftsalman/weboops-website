import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const SCREEN_SIZES = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};
export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};
export const sortArr = (array, key, sortType) => {
  return array.sort((a, b) => {
    if (a[key] < b[key]) {
      return sortType === true ? -1 : 1;
    }
    if (a[key] > b[key]) {
      return sortType === true ? 1 : -1;
    }
    return 0;
  });
};

export const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");