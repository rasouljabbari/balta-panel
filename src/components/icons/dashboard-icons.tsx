import type { IconProps } from './type';


export const DeliveryIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  className,
}) => (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M18.704 18.296C19.323 18.915 19.323 19.918 18.704 20.536C18.085 21.155 17.082 21.155 16.464 20.536C15.845 19.917 15.845 18.914 16.464 18.296C17.083 17.677 18.086 17.677 18.704 18.296" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.704 18.296C8.323 18.915 8.323 19.918 7.704 20.536C7.085 21.155 6.082 21.155 5.464 20.536C4.846 19.917 4.845 18.914 5.464 18.296C6.083 17.678 7.085 17.677 7.704 18.296" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 4H14C14.552 4 15 4.448 15 5V15H2" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 19.416H3C2.448 19.416 2 18.968 2 18.416V13" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 7H19.323C19.732 7 20.1 7.249 20.251 7.629L21.857 11.643C21.951 11.879 22 12.131 22 12.385V18.333C22 18.885 21.552 19.333 21 19.333H19.169" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 19.42H8.16998" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 14H18V10H21.2" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 4H7" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 7H5" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 10H2" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const PendingOrderIcon: React.FC<IconProps> = ({
    width = 24,
    height = 24,
    className,
  }) => (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M3.00002 15C2.80002 15 2.60002 14.9 2.50002 14.8L1.00002 13.2C0.700024 12.9 0.700024 12.4 1.00002 12.1C1.30002 11.8 1.80002 11.8 2.10002 12.1L3.10002 13.1L4.10002 12.2C4.30002 12 4.80002 12 5.00002 12.3C5.30002 12.6 5.30002 13.1 5.00002 13.4L3.50002 14.8C3.40002 14.9 3.20002 15 3.00002 15Z" fill="#667085"/>
        <path d="M22.5 12C22.3 12 22.1 11.9 22 11.8L21 10.8L20 11.7C19.7 12 19.2 12 18.9 11.7C18.6 11.4 18.6 10.9 18.9 10.6L20.4 9.20001C20.7 8.90001 21.2 8.90001 21.4 9.20001L22.9 10.7C23.2 11 23.2 11.5 22.9 11.8C22.9 12 22.7 12 22.5 12Z" fill="#667085"/>
        <path d="M3.20005 14.8C2.80005 14.8 2.50005 14.5 2.50005 14.2C2.40005 13.6 2.30005 12.8 2.30005 12.1C2.30005 6.7 6.70005 2.3 12.1 2.3C15.3 2.3 18.2001 3.8 20.1 6.4C20.3001 6.7 20.3 7.2 19.9 7.4C19.6 7.6 19.1 7.6 18.9 7.2C17.1 5 14.7 3.8 12 3.8C7.50005 3.8 3.80005 7.5 3.80005 12C3.80005 12.7 3.90005 13.3 4.00005 13.9C4.10005 14.3 3.80005 14.7 3.40005 14.8C3.30005 14.7 3.20005 14.8 3.20005 14.8Z" fill="#667085"/>
        <path d="M12 21.8C8.80002 21.8 5.90002 20.3 4.00002 17.7C3.80002 17.4 3.80002 16.9 4.20002 16.7C4.50002 16.5 5.00002 16.5 5.20002 16.9C6.90002 19.2 9.30002 20.4 12 20.4C16.5 20.4 20.2 16.7 20.2 12.2C20.2 11.5 20.1 10.9 20 10.3C19.9 9.9 20.2 9.5 20.6 9.4C21 9.3 21.4 9.6 21.5 10C21.6 10.6 21.7 11.4 21.7 12.1C21.8 17.4 17.4 21.8 12 21.8Z" fill="#667085"/>
        <path d="M13.7 9.9C13.3 9.9 12.9 9.6 12.9 9.1V8.3C12.9 7.7 12.5 7.3 11.9 7.3C11.3 7.3 10.9 7.8 10.9 8.3V9.1C10.9 9.5 10.6 9.9 10.1 9.9C9.6 9.9 9.5 9.5 9.5 9.1V8.3C9.5 6.9 10.6 5.8 12 5.8C13.4 5.8 14.5 7 14.5 8.3V9.1C14.5 9.5 14.1 9.9 13.7 9.9Z" fill="#667085"/>
        <path d="M15.2 16.8H8.90005C8.00005 16.8 7.30005 16.1 7.30005 15.1L7.70005 9.8C7.90005 8.9 8.60005 8.3 9.30005 8.3H14.7C15.5 8.3 16.2 8.9 16.3 9.7L16.8 15C16.8 16 16.1 16.8 15.2 16.8ZM9.30005 9.9C9.30005 9.9 9.20005 9.9 9.10005 10.1L8.70005 15.2C8.70005 15.2 8.80005 15.3 8.90005 15.3H15.2C15.3 15.3 15.3 15.2 15.3 15.1L14.9 10C14.9 9.9 14.8 9.9 14.7 9.9H9.30005Z" fill="#667085"/>
    </svg>
  );

export const UnapprovedOrderIcon: React.FC<IconProps> = ({
    width = 24,
    height = 24,
    className,
    }) => (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M8.00001 3L5.89001 6.777" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 3L17.3 6.777" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 21C13.239 21 11 18.761 11 16C11 13.239 13.239 11 16 11C18.762 11 21 13.239 21 16C21 18.761 18.762 21 16 21" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.441 12.375L20.144 9.12899C20.406 7.91999 19.487 6.77699 18.248 6.77699H4.93998C3.70398 6.77699 2.78298 7.91999 3.04398 9.12899L4.51498 15.921C4.70698 16.814 5.49698 17.45 6.41098 17.45H11.215" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.237 14.763L14.762 17.238" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.237 17.237L14.762 14.762" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>        
);

export const DonutChartIcon: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className,
  }) => (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10C17.5 14.1421 14.1421 17.5 10 17.5" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M15.3033 15.3033L10 10V9.98833V2.5" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 9.98826L16.9278 7.12759" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);