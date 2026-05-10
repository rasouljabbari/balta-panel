import DayColumn from "@/features/weekly-plan/components/day-columns";
import type { WeeklyPlanGridProps } from "@/features/weekly-plan/types";


export default function WeeklyPlanGrid({ days, isCurrentWeek, onRegisterFood, onViewDetails }: WeeklyPlanGridProps) {
  return (
    <div className="mt-3xl grid grid-cols-7 gap-xl">
      {days.map((day, index) => (
        <DayColumn 
          key={index} 
          day={day} 
          isCurrentWeek={isCurrentWeek} 
          onRegisterFood={onRegisterFood}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}
