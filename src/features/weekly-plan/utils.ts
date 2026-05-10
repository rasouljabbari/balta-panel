import type { DayItem } from './types';


function getStartOfWeek(date: Date) {
  const d = new Date(date);
  const day = d.getDay(); // 0 Sunday ... 6 Saturday

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
    });
  }

  return days;
}

export function isPastDay(dayDate: Date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const target = new Date(dayDate);
  target.setHours(0, 0, 0, 0);

  return target < today;
}

export function isToday(dayDate: Date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const target = new Date(dayDate);
  target.setHours(0, 0, 0, 0);

  return target.getTime() === today.getTime();
}

export function formatNotificationTime(dateTime: string) {
  if (!dateTime) return '';

  const date = new Date(dateTime.replace(/\//g, '-'));
  const now = new Date();

  const diffMs = now.getTime() - date.getTime();
  const diffMinutes = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMinutes / 60);

  if (diffMinutes < 1) return 'همین الان';
  if (diffMinutes < 60) return `${diffMinutes} دقیقه پیش`;
  if (diffHours < 24) return `${diffHours} ساعت پیش`;

  const isToday = now.toDateString() === date.toDateString();

  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);

  const isYesterday = yesterday.toDateString() === date.toDateString();

  const time = date.toLocaleTimeString('fa-IR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  if (isToday) return `امروز، ${time}`;
  if (isYesterday) return `دیروز، ${time}`;

  const fullDate = date.toLocaleDateString('fa-IR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return `${fullDate}، ${time}`;
}



export function formatFileSize(sizeInBytes: number) {
  if (!sizeInBytes || sizeInBytes <= 0) return '۰ کیلوبایت';

  const KB = 1024;
  const MB = KB * 1024;

  if (sizeInBytes < MB) {
    const sizeInKB = sizeInBytes / KB;
    return `${formatNumber(sizeInKB)} کیلوبایت`;
  }

  const sizeInMB = sizeInBytes / MB;
  return `${formatNumber(sizeInMB)} مگابایت`;
}

function formatNumber(value: number) {
  return value % 1 === 0 ? value.toString() : value.toFixed(1);
}