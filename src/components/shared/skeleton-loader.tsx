import type { SkeletonProps } from '@/components/shared/type';
import clsx from 'clsx';
import React from 'react';



const roundedMap = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
};

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  width,
  height,
  rounded = 'md',
}) => {
  return (
    <div
      className={clsx(
        'animate-pulse bg-gray-200',
        roundedMap[rounded],
        className
      )}
      style={{
        width,
        height,
      }}
    />
  );
};
