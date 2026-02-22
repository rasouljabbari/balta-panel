import type { InfoHeaderProps } from "./type";


export default function InfoHeader({
  icon,
  title,
  description,
  children,
}: InfoHeaderProps) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-xl">
        <div className="flex-center border border-gray-light-200 w-10 h-10 rounded-lg">
          {icon}
        </div>
        <div className="flex flex-col gap-xs">
          <h2 className="text-lg font-semibold text-gray-light-900">{title}</h2>
          <span className="text-sm text-gray-light-600">{description}</span>
        </div>
      </div>

      {children && <div>{children}</div>}
    </div>
  );
}
