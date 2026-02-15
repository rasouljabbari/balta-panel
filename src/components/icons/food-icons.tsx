import type { IconProps } from "./type";


export const FoodIcons: React.FC<IconProps> = ({
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
      d="M16.6623 10H3.33767C3.09577 9.99979 2.86555 10.104 2.70607 10.2859C2.54658 10.4677 2.47335 10.7096 2.50515 10.9494C2.8013 12.9958 4.02994 14.789 5.83133 15.8041V16.6694C5.83133 17.1299 6.20458 17.5031 6.66501 17.5031H13.335C13.7954 17.5031 14.1687 17.1299 14.1687 16.6694V15.8041C15.97 14.789 17.1987 12.9958 17.4948 10.9494C17.5266 10.7096 17.4534 10.4677 17.2939 10.2859C17.1344 10.104 16.9042 9.99979 16.6623 10Z"
      stroke="var(--color-gray-light-500)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.569 9.99999C16.283 9.1634 16.6734 8.09858 16.6695 6.99874V6.66527C16.6695 6.20484 16.2962 5.83159 15.8358 5.83159H15.5023C13.1173 5.832 11.1156 7.62889 10.8587 9.99999"
      stroke="var(--color-gray-light-500)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.8587 10H5.42764C4.98543 10 4.56133 9.82433 4.24864 9.51163L3.90273 9.16574C3.14084 8.403 3.1411 7.16718 3.90331 6.40476C4.66552 5.64234 5.90134 5.64174 6.66429 6.40342V6.24888H6.66524C6.66508 5.0575 7.30053 3.95653 8.33221 3.3607C9.3639 2.76487 10.6351 2.7647 11.6669 3.36025C12.6988 3.95581 13.3345 5.0566 13.3347 6.24798V6.3644"
      stroke="var(--color-gray-light-500)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);