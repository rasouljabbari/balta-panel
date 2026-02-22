import { useLocation, useMatch } from 'react-router-dom';
import { routeInfos } from '@/components/layout/header/data';
import type { Driver, HeaderInfoResult } from '../type';


export function useHeaderInfo(drivers: Driver[]): HeaderInfoResult {
  const location = useLocation();

  const matchDriverDetail = useMatch('/drivers/:id');
  const matchDriverEdit = useMatch('/drivers/edit/:id');

  let title: string | undefined;
  let description: string | undefined;
  let showBackButton = false;
  let driver: Driver | undefined;

  const path = location.pathname;

  // =========================
  // Driver Detail
  // =========================
  if (matchDriverDetail) {
    const id = Number(matchDriverDetail.params.id);
    driver = drivers.find((d) => d.id === id);

    if (driver) {
      title = driver.fullName;
      description = `کد راننده: ${driver.code}`;
    } else {
      title = 'راننده یافت نشد';
    }

    showBackButton = true;
  }

  // =========================
  // Driver Edit
  // =========================
  else if (matchDriverEdit) {
    const id = Number(matchDriverEdit.params.id);
    driver = drivers.find((d) => d.id === id);

    if (driver) {
      title = `ویرایش اطلاعات ${driver.fullName}`;
      description = `کد راننده: ${driver.code}`;
    } else {
      title = 'راننده یافت نشد';
    }

    showBackButton = true;
  }

  // =========================
  // Other Pages (routeInfos)
  // =========================
  else {
    if (routeInfos[path]) {
      title = routeInfos[path].title;
      description = routeInfos[path].description;
    } else {
    for (const [pattern, info] of Object.entries(routeInfos)) {
      // Convert a route pattern like "/drivers/:id" into a regex that can match actual paths.
      // Explanation:
      // 1. `:[^\s/]+` matches any route parameter (e.g., ":id").
      // 2. `.replace(/:[^\s/]+/g, '([\\w-]+)')` replaces it with a capturing group for word characters or dashes.
      // 3. Adding '^' at the start and '$' at the end ensures the regex matches the entire path exactly.
      const regex = new RegExp(
        '^' + pattern.replace(/:[^\s/]+/g, '([\\w-]+)') + '$',
      );

      if (regex.test(path)) {
        title = info.title;
        description = info.description;
        break;
      }
    }
    }
  }

  return { title, description, showBackButton, driver };
}