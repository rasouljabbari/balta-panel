import { cn } from "@/utils/cn";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";
import type {DateInputProps} from "@/components/ui/types";

export default function DateInput({ onChange, placeholder = "انتخاب تاریخ", hasMaxDate = false, className, error, disabled = false }: DateInputProps ) {

    const [date, setDate] = useState<Date[]>([]);

    return (
        <div className={cn("relative dv-date-input w-fit", className,
            error && "dv-date-input-error",
            disabled && "opacity-50 cursor-not-allowed"
        )}>
            {
                <CalendarIcon className={cn("w-4 h-4 absolute right-[12px] top-3 text-gray-modern-600", disabled && "text-gray-400")} />
            }
            <DatePicker
                disabled={disabled}
                maxDate={hasMaxDate ? new Date() : undefined}
                calendar={persian}
                locale={persian_fa}
                value={date}
                placeholder={placeholder}
                range={true}
                inputClass="date-picker-custom !px-3.5 !py-2.5 !pr-8 !w-[130px] border !border-rborder-primary rounded-md bg-white font-medium !text-[15px] !text-[#374356]"
                onChange={(e) => {
                    if (e && Array.isArray(e)) {
                        const dates = e.map(d => d.toDate());
                        onChange(dates);
                        setDate(dates);
                    }
                }}
            />
        </div>
    )
}
