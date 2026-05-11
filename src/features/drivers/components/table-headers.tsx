import InfoHeader from '@/components/shared/info-header';
import SearchInput from '@/components/shared/search-input';
import { User } from 'lucide-react';

export default function DriverTableHeader({ count = 0, searchValue, onSearch }:
  { count: number, searchValue: string, onSearch: (value: string) => void; }) {

  return (
    <InfoHeader
      icon={<User color="var(--color-gray-light-500)" />}
      title="اطلاعات رانندگان"
      description={`${count} راننده`}
    >
      <SearchInput
        searchValue={searchValue}
        onSearch={onSearch}
        placeholder="جستجو در رانندگان" />
    </InfoHeader>
  );
}