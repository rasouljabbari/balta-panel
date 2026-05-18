import { Button } from 'dst-rg';
import Image from './image';
import type { EmptyBoxProps } from './type';
import { CirclePlus } from 'lucide-react';


export default function EmptyBox({ title, image, buttonText, onButtonClick }: EmptyBoxProps) {
  return (
    <div className="flex-center flex-col gap-3xl">
      {image && (
        <Image
          src={image}
          alt="empty-box"
          width={110}
          height={110}
          className="object-contain"
        />
      )}

      <h3 className="text-xl font-normal text-gray-light-700">{title}</h3>

      {buttonText && (
        <Button
          variant="primary"
          onClick={onButtonClick}
          leftIcon={<CirclePlus size={20} />}
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
}