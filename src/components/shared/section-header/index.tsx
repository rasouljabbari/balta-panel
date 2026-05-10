import type { SectionHeaderProps } from '@/components/shared/section-header/type';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SectionHeader({
  title,
  description,
  children,
  showBack = false,
  backLink = '/',
  extra,
}: SectionHeaderProps) {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-start gap-md">
        {showBack && (
          <Link to={backLink}>
            <ArrowRight size={28} color='#667085'/>
          </Link>
        )}
        <div className="flex flex-col gap-xxs">
          <div className='flex items-center gap-2xl'>
            <h2 className="lg:text-xl text-base font-bold text-rtext-secondary-700">
          {title}
            </h2>
            {extra && extra}
          </div>
        {description && (
          <p className="lg:text-base text-xs text-rtext-quaternary-500">
            {description}
          </p>
          )}
          </div>
      </div>

      {children && <div className="flex items-center gap-lg">{children}</div>}
    </div>
  );
}
