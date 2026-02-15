import { forwardRef, useRef, useState } from 'react';
import { cn } from '@/utils/cn';
import type { ImageProps } from '@/components/shared/type';

const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      alt,
      fallback,
      variant = 'default',
      size,
      objectFit = 'cover',
      loading = 'lazy',
      showPlaceholder = false,
      placeholderColor = 'bg-gray-200 dark:bg-gray-700',
      className,
      onError,
      ...props
    },
    ref,
  ) => {
    const [imageError, setImageError] = useState(false);
    const [isLoading, setIsLoading] = useState(showPlaceholder);
    const [currentSrc, setCurrentSrc] = useState(src);
    const imgRef = useRef<HTMLImageElement | null>(null);

    const imageSrc = imageError && fallback ? fallback : src;

    // Reset loading state when src changes
    if (currentSrc !== src) {
      setCurrentSrc(src);
      if (showPlaceholder) {
        setIsLoading(true);
      }
      setImageError(false);
    }

    const handleError = () => {
      setImageError(true);
      setIsLoading(false);
      onError?.();
    };

    const handleLoad = () => {
      setIsLoading(false);
    };

    const handleRef = (node: HTMLImageElement | null) => {
      imgRef.current = node;

      // Check if image is already loaded (cached)
      if (showPlaceholder && node?.complete && node.naturalHeight !== 0) {
        setIsLoading(false);
      }

      // Forward ref
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    const variantStyles = {
      default: 'rounded',
      rounded: 'rounded-lg',
      circle: 'rounded-full',
      square: 'rounded-none',
    };

    const sizeStyles = {
      xs: 'w-8 h-8',
      sm: 'w-12 h-12',
      md: 'w-16 h-16',
      lg: 'w-24 h-24',
      xl: 'w-32 h-32',
      full: 'w-full h-full',
    };

    const objectFitStyles = {
      contain: 'object-contain',
      cover: 'object-cover',
      fill: 'object-fill',
      none: 'object-none',
      'scale-down': 'object-scale-down',
    };

    const imageClasses = cn(
      variantStyles[variant],
      size && sizeStyles[size],
      objectFitStyles[objectFit],
      showPlaceholder && 'transition-opacity duration-300',
      showPlaceholder && isLoading ? 'opacity-0' : 'opacity-100',
      className,
    );

    const placeholderClasses = cn(
      'absolute inset-0 flex items-center justify-center pointer-events-none',
      variantStyles[variant],
      placeholderColor,
      'transition-opacity duration-300',
      isLoading ? 'opacity-100' : 'opacity-0',
    );

    if (imageError && !fallback) {
      return (
        <div
          className={cn(
            'flex items-center justify-center',
            variantStyles[variant],
            size && sizeStyles[size],
            placeholderColor,
            className,
          )}
          role="img"
          aria-label={alt}
        >
          <svg
            className="w-1/2 h-1/2 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      );
    }

    return (
      <div className={cn('relative inline-block', size && sizeStyles[size])}>
        {showPlaceholder && (
          <div className={placeholderClasses}>
            <svg
              className="w-1/3 h-1/3 text-gray-300 animate-pulse"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
        <img
          ref={handleRef}
          src={imageSrc}
          alt={alt}
          loading={loading}
          onError={handleError}
          onLoad={handleLoad}
          className={imageClasses}
          {...props}
        />
      </div>
    );
  },
);

Image.displayName = 'Image';

export default Image;
