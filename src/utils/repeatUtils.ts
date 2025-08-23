export const generateRepeatDates = (
  startDate: string,
  repeatType: string,
  interval: number,
  endDate: string
): string[] => {
  const dates: string[] = [];
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  if (repeatType === 'daily') {
    const current = new Date(start);
    
    while (current <= end) {
      dates.push(current.toISOString().split('T')[0]);
      current.setDate(current.getDate() + interval);
    }
  }
  
  return dates;
};