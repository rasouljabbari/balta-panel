export interface SidebarProps {
  isMobileOpen?: boolean;
  onClose?: () => void;
  isMobile?: boolean;
}

export interface SidebarMenuProps {
  onItemClick?: () => void;
}

export interface MenuItem {
  icon?: ((isActive: boolean) => React.ReactNode) | React.ReactNode;
  label: string;
  to?: string;
  children?: MenuItem[];
}

export interface SidebarMenuItemProps {
  icon?: ((isActive: boolean) => React.ReactNode) | React.ReactNode;
  label: string;
  to?: string;
  isActive: boolean;
  children?: MenuItem[];
  isChild?: boolean;
  onItemClick?: () => void;
}
