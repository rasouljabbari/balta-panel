import { useState, type ReactNode } from 'react';
import { Badge, Button } from 'dst-rg';
import { CloseIcon, TruckIcon } from '@/components/icons/order-icons';
import CancelOrderModal from './cancel-order-modal';
import DeriverModal from './driver-modal';

type InfoItem = {
  label: string;
  value: string;
};

type Props = {
  title: string;
  branch: string;
  infos: InfoItem[];
  children?: ReactNode;
};

export default function OrderDetailsHeader({
  title,
  branch,
  infos,

  children,
}: Props) {
  const [openDriverModal, setOpenDriverModal] = useState(false);
  const [openCancelModal, setOpenCancelModal] = useState(false);
  return (
    <div className="flex w-full items-center justify-between border-b border-gray-light-300 bg-white p-[18px]">
      {/* right */}
      <div className="flex flex-col gap-lg">
        <div className="flex items-center gap-md">
          <h3 className="text-xl font-semibold text-gray-light-700">{title}</h3>

          <Badge color="gray">{branch}</Badge>
        </div>

        <div className="flex items-center gap-lg">
          {infos.map((info, index) => (
            <div key={info.label} className="flex items-center gap-lg">
              <div className="flex items-center gap-md">
                <p className="text-sm text-gray-light-600">{info.label}</p>

                <p className="text-sm font-semibold text-gray-light-700">
                  {info.value}
                </p>
              </div>

              {index !== infos.length - 1 && (
                <div className="h-5 w-px bg-gray-light-300" />
              )}
            </div>
          ))}
        </div>

        {children}
      </div>

      {/* left */}
      <div className="flex items-center gap-lg">
        <Button variant="secondaryGray">چاپ لیبل</Button>

        <Button variant="secondaryGray">چاپ فاکتور</Button>

        <Button
          variant="secondaryGray"
          className="h-11"
          onClick={() => setOpenCancelModal(true)}
        >
          <CloseIcon />
        </Button>

        <Button
          leftIcon={<TruckIcon />}
          className="h-10"
          onClick={() => setOpenDriverModal(true)}
        >
          انتخاب راننده
        </Button>
        <DeriverModal
          isOpen={openDriverModal}
          onClose={() => setOpenDriverModal(false)}
        />
        <CancelOrderModal
          isOpen={openCancelModal}
          onClose={() => setOpenCancelModal(false)}
        />
      </div>
    </div>
  );
}
