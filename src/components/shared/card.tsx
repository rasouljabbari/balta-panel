import { cn } from '@/utils/cn';
import type { CardBodyProps, CardHeaderProps, CardProps } from './type';



/* ================= Root Card ================= */
function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl bg-white border border-gray-light-200 shadow-sm',
        className,
      )}
    >
      {children}
    </div>
  );
}

/* ================= Card Header ================= */
function CardHeader({ title, action, children, className }: CardHeaderProps) {
  if (children) {
    return (
      <div className={cn('px-3xl py-xl border-b border-gray-100', className)}>
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(
        'flex items-center justify-between px-4 py-3 border-b border-gray-100',
        className,
      )}
    >
      {title && (
        <div className="text-sm font-semibold text-gray-800">{title}</div>
      )}
      {action && <div>{action}</div>}
    </div>
  );
}

/* ================= Card Body ================= */
function CardBody({ children, className }: CardBodyProps) {
  return <div className={cn('px-3xl py-2xl', className)}>{children}</div>;
}

export { Card, CardBody, CardHeader };

