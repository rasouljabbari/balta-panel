import type { IconProps } from "./type";

export const CartIcon: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className,
}) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      className={className}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M6.17419 11.8716L4.89502 5.83331H15.4167C15.9592 5.83331 16.3567 6.34248 16.225 6.86915L15.1017 11.3625C14.9309 12.045 14.3509 12.5466 13.6509 12.6166L7.97085 13.185C7.12419 13.2691 6.35002 12.7033 6.17419 11.8716Z" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.89508 5.83331L4.35341 3.33331H2.91675" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.2575 16.0558C14.0892 16.0558 13.9525 16.1925 13.9542 16.3608C13.9542 16.5292 14.0909 16.6658 14.2592 16.6658C14.4275 16.6658 14.5642 16.5292 14.5642 16.3608C14.5634 16.1925 14.4267 16.0558 14.2575 16.0558" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.24746 16.0558C7.07912 16.0558 6.94246 16.1925 6.94412 16.3608C6.94246 16.53 7.07996 16.6667 7.24829 16.6667C7.41662 16.6667 7.55329 16.53 7.55329 16.3617C7.55329 16.1925 7.41662 16.0558 7.24746 16.0558" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);