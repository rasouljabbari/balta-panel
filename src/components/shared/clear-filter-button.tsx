import { Button } from 'dst-rg';
import { Trash2 } from 'lucide-react';
import type { ClearFiltersButtonProps } from './type';


export function ClearFiltersButton({
  activeFiltersCount,
  onClear,
}: ClearFiltersButtonProps) {
  if (!activeFiltersCount) return null;

  return (
    <Button
      variant="secondaryColor"
      className="bg-white border-0"
      leftIcon={<Trash2 size={20} />}
      onClick={onClear}
    >
      {`حذف ${activeFiltersCount} فیلتر`}
    </Button>
  );
}
