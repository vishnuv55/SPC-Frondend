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
const isoStringToDate = (data) => {
  const months = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec',
  };
  const date = new Date(data);
  let day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  if (day < 10) {
    day = `0${day}`;
  }
  return { day, month: months[month], year };
};
export { convertDateFormate, isoStringToDate };
