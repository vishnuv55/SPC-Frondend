const convertDateFormate = (data) => {
  const date = new Date(data);
  let newDate = date.getDate();
  let newMonth = date.getMonth() + 1;
  const newYear = date.getFullYear();

  if (newDate < 10) {
    newDate = `0${newDate}`;
  }
  if (newMonth < 10) {
    newMonth = `0${newMonth}`;
  }

  const convertedDate = `${newYear}-${newMonth}-${newDate}`;
  return convertedDate;
};
export { convertDateFormate }; // eslint-disable-line
