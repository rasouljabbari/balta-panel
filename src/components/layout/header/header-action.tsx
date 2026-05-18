import { Button, Switch } from 'rg-dst';
import type { HeaderActionProps } from './type';


export default function HeaderAction({
  isDriverEdit,
  isDriverDetail,
  extra,
  actionButton,
  initialStatus = false,
  onStatusToggle,
}: HeaderActionProps) {
  const status = initialStatus;

  if (isDriverEdit) return null;

  if (extra) return <>{extra}</>;

  if (isDriverDetail) {
    return (
      <div className="border border-gray-light-300 rounded-md py-[10px] px-4 flex items-center justify-center gap-xs">
        <Switch
          aria-label="status-change"
          checked={status}
          onToggle={() => {
            const newStatus = !status; 
            onStatusToggle?.(newStatus); 
          }}
          className="data-[state=checked]:bg-utility-brand-600"
        />
        <span className="text-sm font-semibold text-gray-light-700">
          وضعیت فعالیت
        </span>
      </div>
    );
  }

  if (actionButton) {
    return (
      <Button
        className={actionButton.className}
        onClick={actionButton.onClick}
        leftIcon={actionButton.leftIcon}
        aria-label="action-button-label"
      >
        {actionButton.label}
      </Button>
    );
  }

  return null;
}