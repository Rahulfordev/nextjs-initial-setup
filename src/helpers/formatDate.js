const formatDate = (dateString) => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  const options = { day: "numeric", month: "short", year: "2-digit" };
  return new Intl.DateTimeFormat("en-GB", options).format(date);
};

export { formatDate };
