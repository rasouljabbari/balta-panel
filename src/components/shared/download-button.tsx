import { useState } from 'react';
import { Download } from 'lucide-react';
import { Button } from 'dst-rg';
import type { DownloadButtonProps } from './type';



export function DownloadButton({ url, fileName }: DownloadButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    try {
      setLoading(true);

      const response = await fetch(url, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Download failed');
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = fileName || 'file';
      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      variant="secondaryGray"
      onClick={handleDownload}
      loading={loading}
      leftIcon={<Download size={20} color="var(--color-gray-light-700)" />}
    >
      دانلود
    </Button>
  );
}
