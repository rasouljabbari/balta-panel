import BackButton from '@/components/shared/back-button';
import type { headerBoxProps } from './type';


export default function HeaderUserInformationBox({
  title = 'داشبورد',
  description,
  showBackButton = false,
}: headerBoxProps) {

  return (
    <div className="flex items-center gap-xl">
      {showBackButton && <BackButton />}

      <div className="flex flex-col gap-xs">
        <h3 className="text-2xl font-semibold leading-5 text-gray-light-700 pl-5">
          {title}
        </h3>

        {description && (
          <p className="text-sm text-gray-light-600">{description}</p>
        )}
      </div>
    </div>
  );
}