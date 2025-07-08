const dateScreening = function (ngayChieu) {
  const [day, month, year] = ngayChieu.split("/").map(Number);
  const startDate = new Date(year, month - 1, day);
  return {
    title: "Date",
    list: Array.from({ length: 6 }, (_, i) => {
      const screening = i + 2;

      const newDate = new Date(startDate);
      newDate.setDate(startDate.getDate() + i);

      // const pad = (n) => n.toString().padStart(2, "0");

      // const formatDate = `${newDate.getDate()}/ ${
      //   newDate.getMonth() + 1
      // }/ ${newDate.getFullYear()}`;

      const formatDate = newDate.toDateString();

      // const formatter = new Intl.DateTimeFormat("vi-VN");
      // const formatDate = formatter.format(newDate);
      // console.log(formatDate);

      return {
        date: formatDate,
        screening: `screening: ${screening} times`,
      };
    }),
  };
};

export default dateScreening;
