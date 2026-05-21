import type { IconProps } from './type';


export const CategoryIcon: React.FC<IconProps> = ({
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
    <rect
      x="11.25"
      y="2.5"
      width="6.25"
      height="6.25"
      rx="2.5"
      stroke="var(--color-gray-light-500)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="11.25"
      y="11.25"
      width="6.25"
      height="6.25"
      rx="2.5"
      stroke="var(--color-gray-light-500)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="2.5"
      y="2.5"
      width="6.25"
      height="6.25"
      rx="2.5"
      stroke="var(--color-gray-light-500)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="2.5"
      y="11.25"
      width="6.25"
      height="6.25"
      rx="2.5"
      stroke="var(--color-gray-light-500)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PackagingIcon: React.FC<IconProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.4383 13.3325V6.66749C17.4383 6.07166 17.1208 5.52166 16.605 5.22416L10.8333 1.89166C10.3175 1.59416 9.68251 1.59416 9.16668 1.89166L3.39501 5.22416C2.87918 5.52166 2.56168 6.07249 2.56168 6.66749V13.3317C2.56168 13.9275 2.87918 14.4775 3.39501 14.775L9.16668 18.1083C9.68251 18.4058 10.3175 18.4058 10.8333 18.1083L16.605 14.7758C17.1208 14.4783 17.4383 13.9275 17.4383 13.3325Z"
      stroke="var(--color-gray-light-500)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.14166 10.525L7.64166 11.975"
      stroke="var(--color-gray-light-500)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.785 5.83417L10 10L17.215 5.83417"
      stroke="var(--color-gray-light-500)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 18.3333V10"
      stroke="var(--color-gray-light-500)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.6083 7.91665L6.28333 3.55832"
      stroke="var(--color-gray-light-500)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);