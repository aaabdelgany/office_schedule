const getWeek = () => {
  const laborDay = new Date('June 14 2021');
  const today = new Date();
  const timeDiff = today.getTime() - laborDay.getTime();
  const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  const whichWeek = dayDiff / 7 / 4 - Math.floor(dayDiff / 7 / 4);
  switch (whichWeek) {
    case 1:
      return 1;
    case 0.75:
      return 4;
    case 0.5:
      return 3;
    case 0.25:
      return 2;
    default:
      return 1;
  }
};

export default getWeek;
