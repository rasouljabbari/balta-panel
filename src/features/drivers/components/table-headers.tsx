import { User } from 'lucide-react';
import InfoHeader from '@/components/shared/info-header';
import SearchInput from '@/components/shared/search-input';
import type { DriverTableHeaderProps } from '../types';

export default function DriverTableHeader({ count }: DriverTableHeaderProps) {
  return (
    <InfoHeader
      icon={<User color="var(--color-gray-light-500)" />}
      title="اطلاعات رانندگان"
      description={`${count} راننده`}
    >
      {count > 0 && <SearchInput placeholder="جستجو در رانندگان" />}
    </InfoHeader>
  );
}
