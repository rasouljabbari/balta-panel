import { useLocation } from 'react-router-dom';
import { routeInfos } from '@/components/layout/header/data';
import type { RouteInfo } from '@/components/layout/header/type';


const matchRoute = (pathname: string, pattern: string): boolean => {
  const patternParts = pattern.split('/');
  const pathParts = pathname.split('/');

  if (patternParts.length !== pathParts.length) return false;

  return patternParts.every(
    (part, i) => part.startsWith(':') || part === pathParts[i],
  );
};

const getRouteInfo = (pathname: string): RouteInfo => {
  if (routeInfos[pathname]) return routeInfos[pathname];

  for (const [pattern, info] of Object.entries(routeInfos)) {
    if (matchRoute(pathname, pattern)) return info;
  }

  return { title: 'داشبورد' };
};

export default function HeaderUserInformationBox() {
  const location = useLocation();
  const routeInfo = getRouteInfo(location.pathname);

  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col gap-xs">
        <h3 className="text-2xl font-semibold leading-5 text-gray-light-700 pl-5">
          {routeInfo.title}
        </h3>

        {routeInfo.description && (
          <p className="text-sm text-gray-light-600">{routeInfo.description}</p>
        )}
      </div>
    </div>
  );
}
