import { useMemo } from 'react';
import { formatFileSize } from '@/utils/format-file-size';
import { Trash2 } from 'lucide-react';
import { FileUploader } from 'rg-dst';
import type { ImageUploadPreviewProps } from '../type';

export default function ImageUploadPreview({
  file,
  onChange,
  previewUrl,
}: ImageUploadPreviewProps & { previewUrl?: string }) {
  const preview = useMemo(() => {
    if (!file && !previewUrl) return null;
    if (file instanceof File) {
      return URL.createObjectURL(file);
    }
    if (typeof file === 'string') {
      return file;
    }
    if (previewUrl) {
      return previewUrl;
    }
    return null;
  }, [file, previewUrl]);

  return preview ? (
    <div className="flex items-center justify-between p-xl border border-gray-light-200 rounded-xl">
      <div className="flex items-center gap-lg">
        <div className="flex items-center border border-gray-light-200 rounded-md p-2">
          <img
            src={preview}
            alt="preview"
            className="object-cover w-8xl h-5xl"
          />
        </div>

        <div className="flex flex-col flex-1 gap-xs">
          <p className="text-sm font-medium text-gray-light-700">
            {file instanceof File ? file.name : 'تصویر موجود'}
          </p>
          <p className="text-sm text-gray-light-600">
            {file instanceof File && formatFileSize(file.size)}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onChange(null)}
        className="cursor-pointer"
      >
        <Trash2 size={20} color="var(--color-gray-light-600)" />
      </button>
    </div>
  ) : (
    <FileUploader
      mainText="برای آپلود کلیک کنید"
      subText="یا بکشید و رها کنید"
      formatText="PNG or JPG (max. 290x160px)"
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
          onChange(selectedFile);
        }
      }}
      onDelete={() => onChange(null)}
    />
  );
}
