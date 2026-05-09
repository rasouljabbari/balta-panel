import InfoHeader from '@/components/shared/info-header';
import SearchInput from '@/components/shared/search-input';
import { User } from 'lucide-react';

export default function DriverTableHeader({ count, onSearch }: { count: number, onSearch: (value: string) => void; }) {

  return (
    <InfoHeader
      icon={<User color="var(--color-gray-light-500)" />}
      title="اطلاعات رانندگان"
      description={`${count} راننده`}
    >
      {count > 0 && <SearchInput
        onSearch={onSearch}
        placeholder="جستجو در رانندگان" />}
    </InfoHeader>
  );
}