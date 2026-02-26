import type { Control, FieldErrors, FieldValues } from "react-hook-form";

export interface FormContentProps {
    control: Control<any>;          // ← or Control<FieldValues>
    errors: FieldErrors<FieldValues>;       // ← or FieldErrors<FieldValues>
}