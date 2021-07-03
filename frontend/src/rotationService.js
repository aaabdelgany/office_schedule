const getWeek = () => {
  const laborDay = new Date('June 14 2021');
  const today = new Date();
  const timeDiff = today.getTime() - laborDay.getTime();
  const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  const whichWeek = dayDiff / 7 / 4 - Math.floor(dayDiff / 7 / 4);
  console.log(whichWeek);
  if (whichWeek < 0.25) return 1;
  if (whichWeek < 0.5) return 2;
  if (whichWeek < 0.75) return 3;
  if (whichWeek < 1) return 4;
  return 1;
};
//blue orange red green
export default getWeek;
