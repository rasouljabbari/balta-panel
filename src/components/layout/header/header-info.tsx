import { MoveRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Props {
  title?: string;
  description?: string;
  showBackButton?: boolean;
}

export default function HeaderUserInformationBox({
  title = 'داشبورد',
  description,
  showBackButton = false,
}: Props) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex items-center gap-xl">
      {showBackButton && (
        <button
          type="button"
          onClick={handleGoBack}
          className="flex items-center justify-center border border-gray-light-300 w-12 h-12 rounded-md shadow-xs hover:bg-gray-light-100 transition-colors"
          aria-label="بازگشت"
        >
          <MoveRight size={20} color="var(--color-gray-light-500)" />
        </button>
      )}

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
