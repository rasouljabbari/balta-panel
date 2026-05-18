import type { FieldValues, Path, UseFormSetError } from "react-hook-form";

type ApiValidationErrors<T extends FieldValues> = Partial<
    Record<keyof T, string[]>
>;

export interface ApiErrorResponse<T extends FieldValues> {
    status?: number;
    error?: ApiValidationErrors<T>;
}

interface HandleApiFormErrorsParams<T extends FieldValues> {
    error: ApiErrorResponse<T>;
    setError: UseFormSetError<T>;
}

export function useHandleApiFormErrors<T extends FieldValues>() {
    const handleApiFormErrors = ({
        error,
        setError
    }: HandleApiFormErrorsParams<T>) => {
        if (!error?.error) return;

        Object.entries(error.error).forEach(([field, messages]) => {
            if (!messages?.length) return;

            setError(field as Path<T>, {
                type: 'server',
                message: messages[0],
            });
        });
    };

    return {
        handleApiFormErrors,
    };
}