import { cn } from "@/utils/cn";
import type { ReactNode } from "react";
import { Badge } from "rg-dst";


type Props = {
  title: string;
  badges?: {
    label: string;
    color: 'gray' | 'blue' | 'green' | 'red';
  }[];
  children: ReactNode;
  onClick?: () => void;
  selected?: boolean;
};

export default function OrderCard({ title, badges = [], children, selected, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'overflow-auto rounded-xl border cursor-pointer transition-all',
        selected
          ? 'border-gray-light-900'
          : 'border-gray-light-200 hover:border-gray-light-400',
      )}
    >
      {' '}
      {/* Header */}
      <div className="bg-gray-light-50">
        <div className="flex items-center gap-lg px-3xl py-lg">
          <h3 className="text-lg font-semibold">{title}</h3>

          {badges.length > 0 && (
            <>
              <div className="h-5 w-px bg-gray-light-300" />

              <div className="flex items-center gap-md">
                {badges.map((badge) => (
                  <Badge key={badge.label} color={badge.color}>
                    {badge.label}
                  </Badge>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Body */}
        <div className="flex flex-col gap-xl rounded-t-lg border-t border-gray-light-200 bg-white p-3xl">
          {children}
        </div>
      </div>
    </div>
  );
}