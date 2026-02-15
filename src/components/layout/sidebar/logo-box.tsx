import { Link } from 'react-router-dom';
import Image from '@/components/shared/image';

export default function SidebarLogoBox() {
  return (
    <div className="py-4xl px-3xl bg-white">
      <Link to="/dashboard" className="flex items-center justify-start p-3">
        <Image
          src="/assets/images/Logo.webp"
          alt="Logo"
          width={120}
          height={40}
        />
      </Link>
    </div>
  );
}
