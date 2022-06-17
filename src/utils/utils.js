const dayjs = require("dayjs");

export const shortenText = (text, length) => {
  if (text < length) {
    return text;
  }
  return text.substring(0, length) + "...";
};

export const convertDate = (date) => {
  return dayjs(date).format("DD/MM");
};

export const formatCategories = (category) => {
  const categoryCopy = category;
  const categoryCopyArr = categoryCopy.split("");
  categoryCopyArr[0] = categoryCopyArr[0].toUpperCase();
  const toString = categoryCopyArr.join("");
  const noSpaces = toString.replaceAll("-", " ");
  return noSpaces;
};

export const extractCategorySlugs = (categories) => {
  const categoriesCopy = [...categories];
  return categoriesCopy.map((category) => category.slug);
};
