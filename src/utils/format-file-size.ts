export function formatFileSize(size: number): string {
  if (size === 0) return '0 B';

  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  const index = Math.floor(Math.log(size) / Math.log(1024));
  const formattedSize = size / Math.pow(1024, index);

  return `${formattedSize.toFixed(2)} ${units[index]}`;
}
