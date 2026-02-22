import type { DayItem } from './types';
import { FAKE_ORDERS } from './data';


function getStartOfWeek(date: Date) {
  const d = new Date(date);
  const day = d.getDay();

  const diff = day === 6 ? 0 : day + 1;
  d.setDate(d.getDate() - diff);
  d.setHours(0, 0, 0, 0);

  return d;
}

export function getWeekDays(week: 'current' | 'next'): DayItem[] {
  const today = new Date();
  const startOfThisWeek = getStartOfWeek(today);

  if (week === 'next') {
    startOfThisWeek.setDate(startOfThisWeek.getDate() + 7);
  }

  const days: DayItem[] = [];

  for (let i = 0; i < 7; i++) {
    const dayDate = new Date(startOfThisWeek);
    dayDate.setDate(startOfThisWeek.getDate() + i);

    days.push({
      date: dayDate,
      dayName: dayDate.toLocaleDateString('fa-IR', { weekday: 'long' }),
      fullDate: dayDate.toLocaleDateString('fa-IR'),
      isToday: dayDate.toDateString() === today.toDateString(),
      orders: FAKE_ORDERS[i] ?? [],
    });
  }

  return days;
}

export function isToday(dayDate: Date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const target = new Date(dayDate);
  target.setHours(0, 0, 0, 0);

  return target.getTime() === today.getTime();
}