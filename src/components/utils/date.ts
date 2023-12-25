export const getDateTwoMonthsAgo = (date) => {
  const d = new Date(date);
  d.setMonth(d.getMonth() - 4);

  return formatDate(d);
}

export const addOneDay = (date) => {
  const d = new Date(date); // Create a new Date object to avoid mutating the original date
  d.setDate(d.getDate() + 1); // Add one day

  return formatDate(d);
}

export const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = `0${d.getMonth() + 1}`.slice(-2); // Months are 0-indexed, add 1
  const day = `0${d.getDate()}`.slice(-2);
  return `${year}${month}${day}`;
};
