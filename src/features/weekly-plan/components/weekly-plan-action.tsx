import type { WeeklyPlanActionsProps } from "@/features/weekly-plan/types";
import { Button } from "dst-rg";
import { RotateCw } from "lucide-react";

export default function WeeklyPlanActions({
  disabled,
  onCopyFood,
  onSuggestFood,
}: WeeklyPlanActionsProps) {
  return (
    <div className="flex items-center gap-lg">
      <Button variant="secondaryGray" disabled={disabled} size="sm">
        <RotateCw width={20} height={20} />
      </Button>
      <Button
        variant="secondaryGray"
        disabled={disabled}
        size="sm"
        onClick={onSuggestFood}
      >
        پیشنهاد غذا
      </Button>
      <Button variant="secondaryGray" disabled={disabled} onClick={onCopyFood} size="sm">
        کپی هفته قبل
      </Button>
    </div>
  );
}
