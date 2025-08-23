export const generateRepeatDates = (
  startDate: string,
  repeatType: string,
  interval: number,
  endDate: string
): string[] => {
  const dates: string[] = [];
  const end = new Date(endDate);
  const start = new Date(startDate);

  while (start <= end) {
    dates.push(start.toISOString().split('T')[0]);
    if (repeatType === 'daily') {
      start.setDate(start.getDate() + interval);
    } else if (repeatType === 'weekly') {
      start.setDate(start.getDate() + 7 * interval);
    } else if (repeatType === 'monthly') {
      start.setMonth(start.getMonth() + interval);
    } else if (repeatType === 'yearly') {
      start.setFullYear(start.getFullYear() + interval);
    }
  }

  return dates;
};
