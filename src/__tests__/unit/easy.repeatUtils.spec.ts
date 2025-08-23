import { describe, expect, it } from 'vitest';

import { generateRepeatDates } from '../../utils/repeatUtils';

describe('generateRepeatDates - 매일 반복', () => {
  it('매일 반복으로 3일간 날짜를 생성한다', () => {
    const startDate = '2025-10-01';
    const repeatType = 'daily';
    const interval = 1;
    const endDate = '2025-10-03';

    const result = generateRepeatDates(startDate, repeatType, interval, endDate);

    expect(result).toEqual(['2025-10-01', '2025-10-02', '2025-10-03']);
  });

  it('매일 반복으로 1일간 날짜를 생성한다 (시작일과 종료일이 같은 경우)', () => {
    const startDate = '2025-10-01';
    const repeatType = 'daily';
    const interval = 1;
    const endDate = '2025-10-01';

    const result = generateRepeatDates(startDate, repeatType, interval, endDate);

    expect(result).toEqual(['2025-10-01']);
  });
});

describe('generateRepeatDates - 매주 반복', () => {
  it('매주 반복으로 3주간 날짜를 생성한다', () => {
    const startDate = '2025-10-01';
    const repeatType = 'weekly';
    const interval = 1;
    const endDate = '2025-10-15';

    const result = generateRepeatDates(startDate, repeatType, interval, endDate);

    expect(result).toEqual(['2025-10-01', '2025-10-08', '2025-10-15']);
  });

  it('매주 반복으로 1주간 날짜를 생성한다 (시작일과 종료일이 같은 경우)', () => {
    const startDate = '2025-10-01';
    const repeatType = 'weekly';
    const interval = 1;
    const endDate = '2025-10-01';

    const result = generateRepeatDates(startDate, repeatType, interval, endDate);

    expect(result).toEqual(['2025-10-01']);
  });
});

describe('generateRepeatDates - 매월 반복', () => {
  it('매월 반복으로 3개월간 날짜를 생성한다', () => {
    const startDate = '2025-10-15'; // 10월 15일
    const repeatType = 'monthly';
    const interval = 1;
    const endDate = '2025-12-31';

    const result = generateRepeatDates(startDate, repeatType, interval, endDate);

    expect(result).toEqual([
      '2025-10-15', // 10월 15일
      '2025-11-15', // 11월 15일
      '2025-12-15', // 12월 15일
    ]);
  });

  it('매월 반복으로 1개월간 날짜를 생성한다 (시작일과 종료일이 같은 경우)', () => {
    const startDate = '2025-10-15';
    const repeatType = 'monthly';
    const interval = 1;
    const endDate = '2025-10-15';

    const result = generateRepeatDates(startDate, repeatType, interval, endDate);

    expect(result).toEqual(['2025-10-15']);
  });
});
