const convertDateFormate = (data) => {
  const date = new Date(data);
  const newDate = date.getDate();
  const newMonth = date.getMonth() + 1;
  const newYear = date.getFullYear();
  const convertedDate = `${newYear}-${newMonth}-${newDate}`;
  return convertedDate;
};
export { convertDateFormate }; // eslint-disable-line
