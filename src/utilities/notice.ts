export const getDayNotice = () => {
  const date = new Date();

  // Anniversary
  if (date.getMonth() === 10 && date.getDate() === 24) {
    return "Happy anniversary";
  }

  // Birthday
  if (date.getMonth() === 1 && date.getDate() === 25) {
    return "Happy birthday";
  }

  // Valentines day
  if (date.getMonth() === 1 && date.getDate() === 14) {
    return "Happy valentines day";
  }

  // Other days
  return `Happy ${date.toLocaleDateString("en", { weekday: "long" })}`;
};
