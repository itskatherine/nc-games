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
