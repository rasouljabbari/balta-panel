import { useState } from 'react';
import type {
  SuggestModalProps,
  SuggestType,
} from '@/features/weekly-plan/types';
import { Radio, Tabs } from 'dst-rg';
import { SuggestIcon } from '@/components/icons';
import SharedModal from '@/components/shared/shared-modal';
import { DEFAULT_PROGRAMS, WEEKLY_PLAN_TABS } from '../data';


export default function SuggestModal({
  showModal,
  onClose,
}: SuggestModalProps) {
  const [tab, setTab] = useState<SuggestType>('Default programs');
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null);

  const handleConfirm = () => {
    console.log('Program selected:', selectedProgram ?? tab);
    onClose();
    setSelectedProgram(null);
  };

  const handleClose = () => {
    onClose();
    setSelectedProgram(null);
  };

  return (
    <SharedModal
      isOpen={showModal}
      onClose={handleClose}
      title="انتخاب نوع پیشنهاد"
      icon={<SuggestIcon width={24} height={24} />}
      confirmText="تایید"
      cancelText="انصراف"
      onConfirm={handleConfirm}
      confirmDisabled={tab === 'Default programs' && !selectedProgram}
      widthClass="w-[544px]"
      iconBgClass="bg-gray-light-100"
    >
      <div className="flex flex-col gap-3xl">
        <Tabs
          value={tab}
          onValueChange={(value) => {
            setTab(value as SuggestType);
            setSelectedProgram(null);
          }}
        >
          {/* Tabs Header */}
          <Tabs.List
            listVariant="gray"
            className="max-w-[496px] h-11 border border-rborder-secondary p-xs rounded-lg bg-gray-light-100"
          >
            {WEEKLY_PLAN_TABS.map((item) => (
              <Tabs.Trigger
                key={item.value}
                value={item.value}
                triggerVariant="gray"
                fullWidth
                className="
                  text-sm font-semibold
                  data-[state=active]:text-utility-brand-600
                  data-[state=active]:bg-base-white
                  rounded-lg
                  data-[state=active]:shadow-sm
                  w-[242px]
                "
              >
                {item.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>

          {/* Tabs Content */}
          <Tabs.Content value="Default programs" className="mt-3xl">
            <p className="text-gray-light-600 text-start mb-2xl">
              ۳ برنامه غذایی آماده برای شما پیشنهاد شده است. یکی از گزینه‌ها را
              انتخاب کنید تا برنامه هفتگی شما تکمیل شود.
            </p>
            <div className="flex flex-col gap-lg items-start">
              {DEFAULT_PROGRAMS.map((program) => {
                const isSelected = selectedProgram === program.id;

                return (
                  <Radio
                    key={program.id}
                    name="default-program"
                    value={program.id.toString()}
                    checked={isSelected}
                    onChange={() => setSelectedProgram(program.id)}
                    size="sm"
                  >
                    <div
                      className="flex flex-col items-start cursor-pointer"
                      onClick={() => setSelectedProgram(program.id)}
                    >
                      <h2 className="text-gray-light-700 text-sm font-semibold">
                        {program.title}
                      </h2>
                      <p className="text-gray-light-600 text-sm">
                        {program.description}
                      </p>
                    </div>
                  </Radio>
                );
              })}
            </div>
          </Tabs.Content>

          <Tabs.Content value="Expert suggestion" className="mt-xl">
            <p className="text-gray-light-600 text-start">
              پس از انتخاب این گزینه، تدوین برنامه هفتگی به کارشناسان مجموعه
              سپرده می‌شود و نتیجه متعاقباً در اختیار شما قرار خواهد گرفت.
            </p>
          </Tabs.Content>
        </Tabs>
      </div>
    </SharedModal>
  );
}
