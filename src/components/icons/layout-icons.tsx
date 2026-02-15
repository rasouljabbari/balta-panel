import type { IconProps } from '@/components/icons/type';


export const SideBarIcon: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    className={className}
  >
    <path
      d="M14.1667 18.1667H5.83337C3.66671 18.1667 1.83337 16.4167 1.83337 14.1667V5.83334C1.83337 3.66667 3.58337 1.83334 5.83337 1.83334H14.1667C16.3334 1.83334 18.1667 3.58334 18.1667 5.83334V14.1667C18.1667 16.3333 16.3334 18.1667 14.1667 18.1667ZM5.83337 3.16667C4.33337 3.16667 3.16671 4.33334 3.16671 5.83334V14.1667C3.16671 15.6667 4.41671 16.8333 5.83337 16.8333H14.1667C15.6667 16.8333 16.8334 15.5833 16.8334 14.1667V5.83334C16.8334 4.33334 15.5834 3.16667 14.1667 3.16667H5.83337Z"
      fill="var(--color-gray-light-700)"
    />
    <path
      d="M10 18.1667C9.66671 18.1667 9.33337 17.9167 9.33337 17.5V2.5C9.33337 2.16667 9.58337 1.83334 10 1.83334C10.4167 1.83334 10.6667 2.08334 10.6667 2.5V17.5C10.6667 17.8333 10.3334 18.1667 10 18.1667Z"
      fill="var(--color-gray-light-700)"
    />
    <path
      d="M15 14H12.5C12.1667 14 11.8334 13.75 11.8334 13.3333C11.8334 12.9167 12.0834 12.6667 12.5 12.6667H15C15.3334 12.6667 15.6667 12.9167 15.6667 13.3333C15.6667 13.75 15.3334 14 15 14Z"
      fill="var(--color-gray-light-700)"
    />
    <path
      d="M15 10.6667H12.5C12.1667 10.6667 11.8334 10.4167 11.8334 10C11.8334 9.58333 12.0834 9.33333 12.5 9.33333H15C15.3334 9.33333 15.6667 9.58333 15.6667 10C15.6667 10.4167 15.3334 10.6667 15 10.6667Z"
      fill="var(--color-gray-light-700)"
    />
    <path
      d="M15 7.33333H12.5C12.1667 7.33333 11.8334 7.08333 11.8334 6.66667C11.8334 6.25 12.0834 6 12.5 6H15C15.3334 6 15.6667 6.25 15.6667 6.66667C15.6667 7.08333 15.3334 7.33333 15 7.33333Z"
      fill="var(--color-gray-light-700)"
    />
  </svg>
);

export const KnifeForkIcon: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    className={className}
  >
    <path
      d="M2.5 2.57V6.28833V6.36333V6.28833C2.5 7.35 2.9375 8.29 3.61583 8.89833C3.9475 9.19583 4.16667 9.5975 4.16667 10.0433V16.25C4.16667 16.94 4.72667 17.5 5.41667 17.5C6.10667 17.5 6.66667 16.94 6.66667 16.25V10.0433C6.66667 9.5975 6.88583 9.19583 7.2175 8.89833C7.89583 8.29 8.33333 7.35 8.33333 6.28833V2.57V6.28833"
      stroke="var(--color-gray-light-500)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.41667 6.66667V2.5"
      stroke="var(--color-gray-light-500)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.6667 3.37667C16.6667 2.91667 16.2933 2.54333 15.8333 2.54333H15C13.6192 2.54333 12.5 3.6625 12.5 5.04334V10.0433C12.5 11.13 13.1975 12.0458 14.1667 12.39V16.25C14.1667 16.94 14.7267 17.5 15.4167 17.5C16.1067 17.5 16.6667 16.94 16.6667 16.25V12.5433V3.37667Z"
      stroke="var(--color-gray-light-500)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LogOutIcon: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    className={className}
  >
    <path
      d="M13.3333 14.1667L17.5 10M17.5 10L13.3333 5.83333M17.5 10H7.5M7.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9001 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5H7.5"
      stroke="var(--color-gray-light-600)"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);