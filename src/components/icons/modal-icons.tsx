import type { IconProps } from "./type";

export const InfoCircleIcon: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M9.99982 6.66732C9.88482 6.66732 9.79149 6.76065 9.79232 6.87565C9.79232 6.99065 9.88565 7.08398 10.0007 7.08398C10.1157 7.08398 10.209 6.99065 10.209 6.87565C10.209 6.76065 10.1157 6.66732 9.99982 6.66732"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 17.5V17.5C5.8575 17.5 2.5 14.1425 2.5 10V10C2.5 5.8575 5.8575 2.5 10 2.5V2.5C14.1425 2.5 17.5 5.8575 17.5 10V10C17.5 14.1425 14.1425 17.5 10 17.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.0007 10V14.1667"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
