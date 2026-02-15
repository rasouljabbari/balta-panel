import type { MenuItem } from '@/components/layout/sidebar/type';



export const sidebarMenuItems: MenuItem[] = [
  {
    icon: (isActive: boolean) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="18"
        viewBox="0 0 14 18"
        fill="none"
      >
        <path
          d="M13 17V7M7 17V1M1 17V11"
          stroke={
            isActive ? 'var(--color-brand-600)' : 'var(--color-gray-light-500)'
          }
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: 'داشبورد',
    to: '/dashboard',
  },
  {
    icon: (isActive: boolean) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.40902 14.246L5.87402 7H18.5C19.151 7 19.628 7.611 19.47 8.243L18.122 13.635C17.917 14.454 17.221 15.056 16.381 15.14L9.56502 15.822C8.54902 15.923 7.62002 15.244 7.40902 14.246Z"
          stroke={
            isActive ? 'var(--color-brand-600)' : 'var(--color-gray-light-500)'
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.874 7L5.224 4H3.5"
          stroke={
            isActive ? 'var(--color-brand-600)' : 'var(--color-gray-light-500)'
          }
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.109 19.267C16.907 19.267 16.743 19.431 16.745 19.633C16.745 19.835 16.909 19.999 17.111 19.999C17.313 19.999 17.477 19.835 17.477 19.633C17.476 19.431 17.312 19.267 17.109 19.267"
          stroke={
            isActive ? 'var(--color-brand-600)' : 'var(--color-gray-light-500)'
          }
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.697 19.267C8.495 19.267 8.331 19.431 8.333 19.633C8.331 19.836 8.496 20 8.698 20C8.9 20 9.064 19.836 9.064 19.634C9.064 19.431 8.9 19.267 8.697 19.267"
          stroke={
            isActive ? 'var(--color-brand-600)' : 'var(--color-gray-light-500)'
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: 'سفارش ها',
    to: '/orders',
  },
  {
    icon: (isActive: boolean) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M9.333 21H4V13H9.333"
          stroke={
            isActive ? 'var(--color-brand-600)' : 'var(--color-gray-light-500)'
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.33301 3H14.666V21H9.33301V3Z"
          stroke={
            isActive ? 'var(--color-brand-600)' : 'var(--color-gray-light-500)'
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.667 8H20V21H14.667"
          stroke={
            isActive ? 'var(--color-brand-600)' : 'var(--color-gray-light-500)'
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: 'گزارش‌ها',
    to: '/reports',
  },
  {
    icon: (isActive: boolean) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.9948 12H4.0052C3.71492 11.9998 3.43866 12.1248 3.24728 12.343C3.0559 12.5613 2.96802 12.8515 3.00618 13.1393C3.36156 15.5949 4.83592 17.7468 6.99759 18.9649V20.0033C6.99759 20.5558 7.4455 21.0038 7.99801 21.0038H16.002C16.5545 21.0038 17.0024 20.5558 17.0024 20.0033V18.9649C19.1641 17.7468 20.6384 15.5949 20.9938 13.1392C21.0319 12.8515 20.9441 12.5613 20.7527 12.343C20.5613 12.1248 20.285 11.9998 19.9948 12Z"
          stroke={
            isActive ? 'var(--color-brand-600)' : 'var(--color-gray-light-500)'
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.6827 12C19.5395 10.9961 20.008 9.71831 20.0033 8.39851V7.99834C20.0033 7.44583 19.5554 6.99792 19.0029 6.99792H18.6027C15.7407 6.99842 13.3387 9.15468 13.0304 12"
          stroke={
            isActive ? 'var(--color-brand-600)' : 'var(--color-gray-light-500)'
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.0304 12H6.5132C5.98254 12 5.47363 11.7892 5.0984 11.414L4.68329 10.9989C3.76903 10.0836 3.76935 8.60062 4.684 7.68572C5.59865 6.77082 7.08164 6.7701 7.99718 7.68411V7.49867H7.99832C7.99812 6.06901 8.76066 4.74785 9.99868 4.03285C11.2367 3.31786 12.7621 3.31765 14.0003 4.03231C15.2386 4.74697 16.0015 6.06793 16.0016 7.49759V7.63728"
          stroke={
            isActive ? 'var(--color-brand-600)' : 'var(--color-gray-light-500)'
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: 'غذاها',
    to: '/foods',
  },
  {
    icon: (isActive: boolean) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M15 13.757C15.961 13.438 16.946 13.235 18 13.117"
          stroke={
            isActive ? 'var(--color-brand-600)' : 'var(--color-gray-light-500)'
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 13.118C7.054 13.235 8.039 13.439 9 13.758"
          stroke={
            isActive ? 'var(--color-brand-600)' : 'var(--color-gray-light-500)'
          }
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 9.11799C16.946 9.23499 15.961 9.43899 15 9.75799"
          stroke={
            isActive ? 'var(--color-brand-600)' : 'var(--color-gray-light-500)'
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 9.75701C8.039 9.43801 7.054 9.23501 6 9.11701"
          stroke={
            isActive ? 'var(--color-brand-600)' : 'var(--color-gray-light-500)'
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 6.13099C9.406 4.67799 7.088 4.09999 4.017 4.00099C3.459 3.98199 3 4.44199 3 5.00099V16.854C3 17.395 3.433 17.844 3.974 17.852C7.066 17.898 9.394 18.468 12 20C14.606 18.468 16.934 17.898 20.026 17.852C20.567 17.844 21 17.395 21 16.853V4.99999C21 4.44099 20.541 3.98199 19.983 3.99999C16.912 4.09999 14.594 4.67799 12 6.13099Z"
          stroke={
            isActive ? 'var(--color-brand-600)' : 'var(--color-gray-light-500)'
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 6.13V20"
          stroke={
            isActive ? 'var(--color-brand-600)' : 'var(--color-gray-light-500)'
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: 'تعاریف',
    to: '/definition',
  },
  {
    icon: (isActive: boolean) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 13.12V9.38"
          stroke={
            isActive ? 'var(--color-brand-600)' : 'var(--color-gray-light-500)'
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.999 16.125C11.861 16.125 11.749 16.237 11.75 16.375C11.75 16.513 11.862 16.625 12 16.625C12.138 16.625 12.25 16.513 12.25 16.375C12.25 16.237 12.138 16.125 11.999 16.125"
          stroke={
            isActive ? 'var(--color-brand-600)' : 'var(--color-gray-light-500)'
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.029 4.139L21.688 17.543C22.578 19.101 21.453 21.04 19.659 21.04H4.34101C2.54601 21.04 1.42101 19.101 2.31201 17.543L9.97101 4.139C10.868 2.568 13.132 2.568 14.029 4.139Z"
          stroke={
            isActive ? 'var(--color-brand-600)' : 'var(--color-gray-light-500)'
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: 'استثناها',
    to: '/exceptions',
  },
  {
    icon: (isActive: boolean) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 21H17C18.6569 21 20 19.6569 20 18V8.37167C20 7.57602 19.6839 6.81296 19.1213 6.25035L16.7497 3.87868C16.187 3.31607 15.424 3 14.6283 3H7C5.34315 3 4 4.34315 4 6V18C4 19.6569 5.34315 21 7 21Z"
          stroke={
            isActive ? 'var(--color-brand-600)' : 'var(--color-gray-light-500)'
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 17H8"
          stroke={
            isActive ? 'var(--color-brand-600)' : 'var(--color-gray-light-500)'
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 13.5H8"
          stroke={
            isActive ? 'var(--color-brand-600)' : 'var(--color-gray-light-500)'
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 10H8"
          stroke={
            isActive ? 'var(--color-brand-600)' : 'var(--color-gray-light-500)'
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 8.5H16.5C15.3954 8.5 14.5 7.60457 14.5 6.5V3"
          stroke={
            isActive ? 'var(--color-brand-600)' : 'var(--color-gray-light-500)'
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: 'قراردادها',
    to: '/contracts',
  },
  {
    icon: (isActive: boolean) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M6.9762 18.5027H15.5015"
          stroke={
            isActive ? 'var(--color-brand-600)' : 'var(--color-gray-light-500)'
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="17.0021"
          cy="18.5027"
          r="1.50063"
          stroke={
            isActive ? 'var(--color-brand-600)' : 'var(--color-gray-light-500)'
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="5.47548"
          cy="18.5027"
          r="1.50063"
          stroke={
            isActive ? 'var(--color-brand-600)' : 'var(--color-gray-light-500)'
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.99585 13.8617H14.5011C14.7773 13.8617 15.0013 13.6377 15.0013 13.3615V6.9979C15.0013 5.89287 14.1055 4.99707 13.0004 4.99707H3.99668C2.89165 4.99707 1.99585 5.89287 1.99585 6.9979V17.5023C1.99585 18.0548 2.44375 18.5027 2.99627 18.5027H3.97493"
          stroke={
            isActive ? 'var(--color-brand-600)' : 'var(--color-gray-light-500)'
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.0012 6.99792H18.2491C19.302 6.99792 20.2421 7.6573 20.6007 8.64723L21.8845 12.1918C21.9637 12.4102 22.0041 12.6408 22.0041 12.8732V17.0021C22.0041 17.8309 21.3323 18.5027 20.5035 18.5027H18.5027"
          stroke={
            isActive ? 'var(--color-brand-600)' : 'var(--color-gray-light-500)'
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22.0041 13.0004H19.0029L18.2955 12.293C18.1079 12.1054 17.8534 12 17.5881 12H15.0012"
          stroke={
            isActive ? 'var(--color-brand-600)' : 'var(--color-gray-light-500)'
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: 'رانندگان',
    to: '/drivers',
  },
];
