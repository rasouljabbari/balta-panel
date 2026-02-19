import type { DetailGridProps } from "./type";


export default function DetailGrid({ items, className = '' }: DetailGridProps) {
  return (
    <div className={`p-lg ${className}`}>
      <div className="grid grid-cols-2 gap-md border border-gray-light-100 bg-gray-light-50 p-lg rounded-md">
        {items.map((item, index) => (
          <div key={index} className="contents">
            <span className="text-sm text-gray-light-500">{item.label}</span>
            <span className="text-sm text-gray-light-700">
              {item.value ?? '-'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
