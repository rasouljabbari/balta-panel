import type { IconProps } from './type';

export const TruckIcon: React.FC<IconProps> = ({
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
      d="M5.81348 15.4189H12.9179"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="14.1684"
      cy="15.419"
      r="1.25052"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="4.56296"
      cy="15.419"
      r="1.25052"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.66318 11.5514H12.0842C12.3144 11.5514 12.501 11.3647 12.501 11.1345V5.83155C12.501 4.91069 11.7545 4.16418 10.8337 4.16418H3.33054C2.40968 4.16418 1.66318 4.91069 1.66318 5.83155V14.5852C1.66318 15.0456 2.03643 15.4189 2.49686 15.4189H3.31241"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.501 5.83154H15.2076C16.085 5.83154 16.8685 6.38102 17.1673 7.20597L18.2371 10.1597C18.3031 10.3418 18.3368 10.5339 18.3368 10.7276V14.1683C18.3368 14.859 17.7769 15.4189 17.0863 15.4189H15.4189"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.3368 10.8337H15.8358L15.2463 10.2442C15.0899 10.0878 14.8779 10 14.6568 10H12.501"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
