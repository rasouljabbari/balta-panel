import { MoveRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
  className?: string;
}

export default function BackButton({ className }: BackButtonProps) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button
      type="button"
      onClick={handleGoBack}
      aria-label="بازگشت"
      className={`flex items-center justify-center border border-gray-light-300 w-12 h-12 rounded-md shadow-xs hover:bg-gray-light-100 transition-colors ${className ?? ''}`}
    >
      <MoveRight size={20} color="var(--color-gray-light-500)" />
    </button>
  );
}
