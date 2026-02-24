import type { ErrorsBoxProps } from '@/components/shared/type';
import { cn } from '@/utils/cn';

export default function ErrorsBox({
    errors,
    title,
    variant = 'default',
    className,
    icon,
}: ErrorsBoxProps) {
    // Don't render if no errors
    if (!errors || (Array.isArray(errors) && errors.length === 0)) {
        return null;
    }

    // Normalize errors to array
    const errorList = Array.isArray(errors) ? errors : [errors];

    const containerClasses = cn(
        'rounded-lg border',
        variant === 'default'
            ? 'p-4 bg-rbg-error-primary border-rborder-error'
            : 'p-2 bg-rbg-error-primary border-rborder-error',
        className
    );

    const titleClasses = cn(
        'font-medium mb-2',
        variant === 'default' ? 'text-sm' : 'text-xs',
        'text-rtext-error-primary-600'
    );

    const errorItemClasses = cn(
        'flex items-start gap-2',
        variant === 'default' ? 'text-sm' : 'text-xs',
        'text-rtext-error-primary-600'
    );

    // const defaultIcon = (
    //     <svg
    //         className={cn('shrink-0', variant === 'default' ? 'w-5 h-5' : 'w-4 h-4')}
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //     >
    //         <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth={2}
    //             d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    //         />
    //     </svg>
    // );

    return (
        <div className={containerClasses} role="alert" aria-live="polite">
            {title && <div className={titleClasses}>{title}</div>}
            <ul className={cn('flex flex-col gap-2', variant === 'compact' && 'gap-1')}>
                {errorList.map((error, index) => (
                    <li key={index} className={errorItemClasses}>
                        {icon !== undefined && icon !== null && (
                            <span className="shrink-0 mt-0.5">
                                {icon}
                            </span>
                        )}


                        <span>{error}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Usage Examples

// Single error
{/* <ErrorsBox errors="Something went wrong" /> */ }

// Multiple errors
{/* <ErrorsBox errors={["Error 1", "Error 2", "Error 3"]} /> */ }

// With title
{/* <ErrorsBox 
    errors={errors} 
    title="لطفا خطاهای زیر را برطرف کنید"
/> */}

// Compact variant
{/* <ErrorsBox 
    errors={errors} 
    variant="compact"
/> */}

// Custom icon
{/* <ErrorsBox 
    errors={errors}
    icon={<CustomIcon />}
/> */}