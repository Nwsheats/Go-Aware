// not currently being used, but for future functionality in time display

module.exports = {
    format_time: (date) => {
      return date.toLocaleTimeString();
    },
    format_date: (date) => {
      return `${new Date(date).getMonth() + 1}
      /${new Date(date).getDate()}
      /${new Date(date).getFullYear()}`;
    },
  };
  