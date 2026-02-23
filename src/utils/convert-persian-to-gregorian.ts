import gregorian from 'react-date-object/calendars/gregorian';
import persian from 'react-date-object/calendars/persian';
import gregorian_en from 'react-date-object/locales/gregorian_en';
import persian_fa from 'react-date-object/locales/persian_fa';
import { DateObject } from 'react-multi-date-picker';


export const convertPersianToGregorian = (
  date: DateObject | string | undefined,
): string | undefined => {
  if (!date) return undefined;

  const dateObj =
    typeof date === 'string'
      ? new DateObject({
          date,
          calendar: persian,
          locale: persian_fa,
        })
      : date;

  return dateObj
    .convert(gregorian)
    .setLocale(gregorian_en)
    .format('YYYY-MM-DD');
};
