import DateObject from 'react-date-object';
import gregorian from 'react-date-object/calendars/gregorian';
import persian from 'react-date-object/calendars/persian';
import gregorian_en from 'react-date-object/locales/gregorian_en';
import persian_fa from 'react-date-object/locales/persian_fa';

/** `dateStr` must be Gregorian `YYYY-MM-DD` (e.g. from URL `?date=`). */
export function formatGregorianToPersianLongDate(dateStr: string): string {
  return new DateObject({
    date: dateStr,
    calendar: gregorian,
    locale: gregorian_en,
  })
    .convert(persian)
    .setLocale(persian_fa)
    .format('dddd DD MMMM YYYY');
}
