import { cn } from "@/utils/cn";
import { Dropdown } from 'dst-rg';
import { useState } from 'react';

export interface SelectOption {
  id: string;
  name: string;
}

interface SelectDropdownProps<T extends SelectOption> {
  options: T[];
  selected: T;
  onChange: (option: T) => void;
  icon?: React.ReactNode;
  className?: string;
}

export default function SelectDropdown<T extends SelectOption>({
  options,
  selected,
  onChange,
  icon,
  className
}: SelectDropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: T) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <Dropdown
      open={isOpen}
      onOpenChange={setIsOpen}
      direction="down"
      alignment="left"
      toggleBtn={{
        variant: "tertiaryGray",
        children: (
          <>
            {icon}
            <span className="text-md text-gray-light-900 pr-1 pl-3">
              {selected.name}
            </span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={cn(
                "transition-transform duration-200",
                isOpen ? "rotate-180" : ""
              )}
            >
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </>
        ),
        className: cn(
          "!border !border-gray-light-300 flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-gray-light-50 transition-colors bg-white",
          className
        )
      }}
      dropDownClassName="w-full min-w-[150px] bg-white border border-gray-light-200 rounded-lg"
    >
      <div className="py-1">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleSelect(option)}
            className={cn(
              "w-full px-4 py-2 text-right text-sm bg-white text-gray-light-700 hover:bg-gray-light-50 transition-colors",
              selected.id === option.id && "!bg-gray-light-50"
            )}
          >
            {option.name}
          </button>
        ))}
      </div>
    </Dropdown>
  );
}

