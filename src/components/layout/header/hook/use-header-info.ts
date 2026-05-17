import { useLocation, useMatch } from 'react-router-dom';
import { routeInfos } from '@/components/layout/header/data';
import type { HeaderInfoResult } from '../type';

export function useHeaderInfo(): HeaderInfoResult {
  const location = useLocation();

  const matchDriverDetail = useMatch('/drivers/:id');
  const matchDriverEdit = useMatch('/drivers/edit/:id');
  const matchContractEdit = useMatch('/contracts/edit/:id');

  let title: string | undefined;
  let description: string | undefined;
  let showBackButton = false;
  let isDriverEdit = false;
  let isDriverDetail = false;

  const path = location.pathname;

  // =================
  // Driver Detail
  // =================
  if (matchDriverDetail) {
    showBackButton = true;
    isDriverDetail = true;
  }

  // =================
  // Driver Edit
  // =================
  if (matchDriverEdit) {
    showBackButton = true;
    isDriverEdit = true;
  }
  // =================
  // Contract Edit
  // =================

  if (matchContractEdit) {
    showBackButton = true;
  }

  // =================
  // Other Pages
  // =================
  if (!isDriverDetail && !isDriverEdit) {
    if (routeInfos[path]) {
      title = routeInfos[path].title;
      description = routeInfos[path].description;
    } else {
      for (const [pattern, info] of Object.entries(routeInfos)) {
        const regex = new RegExp(
          '^' + pattern.replace(/:[^/]+/g, '([^/]+)') + '$',
        );

        if (regex.test(path)) {
          title = info.title;
          description = info.description;
          break;
        }
      }
    }
  }

  return {
    title,
    description,
    showBackButton,
    isDriverEdit,
    isDriverDetail,
  };
}
