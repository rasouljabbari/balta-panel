import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import DateObject from 'react-date-object';
import gregorian from 'react-date-object/calendars/gregorian';
import persian from 'react-date-object/calendars/persian';
import gregorian_en from 'react-date-object/locales/gregorian_en';
import persian_fa from 'react-date-object/locales/persian_fa';
import { convertPersianToGregorian } from '@/utils/convert-persian-to-gregorian';

export function useHeaderDatePicker(hasDatePicker: boolean) {
  const [searchParams, setSearchParams] = useSearchParams();

  const todayGregorian = useMemo(() => {
    return new DateObject({
      calendar: persian,
      locale: persian_fa,
    })
      .convert(gregorian)
      .setLocale(gregorian_en)
      .format('YYYY-MM-DD');
  }, []);

  const urlDate = searchParams.get('date') || '';

  useEffect(() => {
    if (!hasDatePicker) return;
    if (urlDate) return;

    const next = new URLSearchParams(searchParams);
    next.set('date', todayGregorian);
    setSearchParams(next, { replace: true });

      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasDatePicker, urlDate, todayGregorian]);

  const dateValue = useMemo(() => {
    if (!hasDatePicker) return null;
    const dateStr = urlDate || todayGregorian;

    return new DateObject({
      date: dateStr,
      calendar: gregorian,
      locale: gregorian_en,
    })
      .convert(persian)
      .setLocale(persian_fa);
  }, [hasDatePicker, urlDate, todayGregorian]);

  const handleDateChange = (val: DateObject | null) => {
    if (!val) return;
    const greg = convertPersianToGregorian(val as any);
    if (!greg) return;

    const next = new URLSearchParams(searchParams);
    next.set('date', greg);
    setSearchParams(next, { replace: true });
  };

  return {
    dateValue,
    handleDateChange,
  };
}
