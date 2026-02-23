import { ChevronDown } from 'lucide-react';
import { Card } from '@/components/shared/card';
import type { AccordionCardProps } from './type';



export default function AccordionCard({
  title,
  icon,
  isOpen,
  onToggle,
  children,
}: AccordionCardProps) {
  return (
    <Card>
      {/* Header */}
      <div
        className="flex items-center justify-between p-lg cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex items-center gap-xl">
          <div className="flex items-center justify-center w-10 h-10 border border-gray-light-200 rounded-lg">
            {icon}
          </div>
          <h2 className="font-semibold text-gray-light-900">{title}</h2>
        </div>

        <ChevronDown
          size={20}
          color="var(--color-gray-light-600)"
          className={`transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </div>

      {/* Body */}
      {isOpen && (
        <>
          <hr className="border-gray-light-200" />
          {children}
        </>
      )}
    </Card>
  );
}
