import type { IconProps } from './type';


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

export const AlertCircleIcon: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className,
}) => (
<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none" className={className}>
  <path d="M10.0013 18.3327C14.6037 18.3327 18.3346 14.6017 18.3346 9.99935C18.3346 5.39698 14.6037 1.66602 10.0013 1.66602C5.39893 1.66602 1.66797 5.39698 1.66797 9.99935C1.66797 14.6017 5.39893 18.3327 10.0013 18.3327Z" fill="#DC6803"/>
  <path d="M10 6.66602V9.99935M10 13.3327H10.0083" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
);

export const SuggestIcon: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className,
}) => (
<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none" className={className}>
  <path fillRule="evenodd" clipRule="evenodd" d="M19 4H5C3.895 4 3 4.895 3 6V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V6C21 4.895 20.105 4 19 4Z" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16 3V6" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12 3V6" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8 3V6" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12 16H17" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.63389 15.1161C9.12204 15.6043 9.12204 16.3957 8.63389 16.8839C8.14573 17.372 7.35428 17.372 6.86612 16.8839C6.37796 16.3957 6.37796 15.6043 6.86612 15.1161C7.35427 14.628 8.14573 14.628 8.63389 15.1161" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M12 11H17" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.63389 10.1161C9.12204 10.6043 9.12204 11.3957 8.63389 11.8839C8.14573 12.372 7.35428 12.372 6.86612 11.8839C6.37796 11.3957 6.37796 10.6043 6.86612 10.1161C7.35427 9.62796 8.14573 9.62796 8.63389 10.1161" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
);

export const CashIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  className,
}) => (
      <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <path d="M5.74565 14.7501C5.60761 14.7505 5.49596 14.8626 5.4962 15.0006C5.49644 15.1387 5.60847 15.2504 5.74652 15.2503C5.88456 15.2502 5.99641 15.1383 5.99641 15.0002C5.99611 14.8619 5.88391 14.75 5.74564 14.7501" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.99867 13.5C10.8274 13.5 11.4993 14.1719 11.4993 15.0006C11.4993 15.8294 10.8274 16.5013 9.99867 16.5013C9.1699 16.5013 8.49805 15.8294 8.49805 15.0006C8.49805 14.1719 9.1699 13.5 9.99867 13.5" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M17.0019 11.9989V18.0014C17.0019 19.1064 16.1061 20.0022 15.0011 20.0022H4.99583C4.46532 20.0021 3.95659 19.7912 3.58157 19.416C3.20655 19.0407 2.99595 18.5319 2.99609 18.0014V11.9978C2.99624 11.4673 3.20712 10.9585 3.58235 10.5835C3.95758 10.2085 4.46642 9.9979 4.99693 9.99805H15.0022C15.5327 9.99819 16.0414 10.2091 16.4164 10.5843C16.7915 10.9595 17.0021 11.4684 17.0019 11.9989Z" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.2509 15.2503C14.3889 15.25 14.5006 15.1378 14.5003 14.9998C14.5001 14.8617 14.388 14.75 14.25 14.7501C14.1119 14.7502 14.0001 14.8622 14.0001 15.0002C14.0004 15.1385 14.1126 15.2504 14.2509 15.2503" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.19531 9.99807L7.40614 5.47919L7.40645 5.47819C7.54389 4.96578 7.87925 4.52896 8.33876 4.26382C8.79827 3.99869 9.34429 3.92695 9.85669 4.0644L19.5199 6.6536L19.5209 6.65391C20.0333 6.79134 20.4701 7.1267 20.7353 7.58622C21.0004 8.04573 21.0721 8.59175 20.9347 9.10415L19.3812 14.9021C19.1016 15.9407 18.0497 16.5713 17.0019 16.3285" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
);

export const RamenIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  className,
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M16.0001 3.49609L10.998 9.49859" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.0021 5.49609L15 9.49776" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M19.8031 18.6023V18.6023C18.6695 20.1138 16.8904 21.0033 15.0011 21.0033H8.99859C7.10926 21.0033 5.33019 20.1138 4.19659 18.6023V18.6023C3.41734 17.5633 2.99609 16.2996 2.99609 15.0008V15.0008C2.99609 13.8958 3.8919 13 4.99693 13H19.0028C20.1078 13 21.0036 13.8958 21.0036 15.0008V15.0008C21.0036 16.2996 20.5824 17.5633 19.8031 18.6023V18.6023Z" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Clock2Icon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  className,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 7V12.5H8"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IdIcon: React.FC<IconProps> = ({
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
      d="M15.3451 5.345L12.9884 2.98833C12.6759 2.67583 12.2517 2.5 11.8101 2.5H5.83341C4.91258 2.5 4.16675 3.24583 4.16675 4.16667V15.8333C4.16675 16.7542 4.91258 17.5 5.83341 17.5H14.1667C15.0876 17.5 15.8334 16.7542 15.8334 15.8333V6.52333C15.8334 6.08167 15.6576 5.6575 15.3451 5.345V5.345Z"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.8334 6.66667H12.5001C12.0401 6.66667 11.6667 6.29333 11.6667 5.83333V2.5"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.08325 15L9.04159 9.2417"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.9583 15L11.9166 9.2417"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.1666 10.7082H7.33325"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.6666 13.5417H6.83325"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FoodIcon: React.FC<IconProps> = ({
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
      d="M12.4999 15.4165H5.83325C4.45242 15.4165 3.33325 14.2973 3.33325 12.9165V8.74984C3.33325 8.28984 3.70659 7.9165 4.16659 7.9165H14.1666C14.6266 7.9165 14.9999 8.28984 14.9999 8.74984V12.9165C14.9999 14.2973 13.8808 15.4165 12.4999 15.4165Z"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.3334 2.9165L9.16675 7.9165"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.6667 4.5835L12.5 7.91683"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.3333 15.2739V16.4581C13.3333 17.0331 12.8667 17.4998 12.2917 17.4998H6.04167C5.46667 17.4998 5 17.0331 5 16.4581V15.2739"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.16661 4.16667C8.61077 3.70667 8.61077 2.96 9.16661 2.5"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.83323 4.1665C6.38906 4.6265 6.38906 5.37317 5.83323 5.83317"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PackageIcon: React.FC<IconProps> = ({
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
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.4384 13.3324V6.66742C17.4384 6.07158 17.1209 5.52158 16.6051 5.22408L10.8334 1.89158C10.3176 1.59408 9.6826 1.59408 9.16677 1.89158L3.3951 5.22408C2.87927 5.52158 2.56177 6.07242 2.56177 6.66742V13.3316C2.56177 13.9274 2.87927 14.4774 3.3951 14.7749L9.16677 18.1083C9.6826 18.4058 10.3176 18.4058 10.8334 18.1083L16.6051 14.7757C17.1209 14.4782 17.4384 13.9274 17.4384 13.3324Z"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.14185 10.5249L7.64185 11.9749"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.78516 5.83398L10.0002 9.99982L17.2152 5.83398"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.0002 18.3333V10"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.6084 7.91644L6.28345 3.55811"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({
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
      d="M4.86533 15.0021L2.94286 11.6674C2.34717 10.6356 2.34717 9.36442 2.94286 8.33265L4.86616 4.99793C5.46199 3.96593 6.56322 3.3303 7.75487 3.33057H12.2451C13.437 3.33 14.5386 3.96567 15.1346 4.99793L17.0571 8.33265C17.6528 9.36442 17.6528 10.6356 17.0571 11.6674L15.1338 15.0021C14.5379 16.0341 13.4367 16.6697 12.2451 16.6695H7.75487C6.56292 16.67 5.4613 16.0344 4.86533 15.0021Z"
      stroke="#344054"
      strokeWidth="1.5"
    />
    <path
      d="M7.91577 12.0844L12.0842 7.91602"
      stroke="#344054"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.0842 12.0844L7.91577 7.91602"
      stroke="#344054"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Truck2Icon: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className,
  stroke = 'white',
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
      d="M15.5867 15.2467C16.1025 15.7626 16.1025 16.5984 15.5867 17.1134C15.0708 17.6292 14.235 17.6292 13.72 17.1134C13.2042 16.5976 13.2042 15.7617 13.72 15.2467C14.2358 14.7309 15.0717 14.7309 15.5867 15.2467"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M6.41998 15.2464C6.93581 15.7623 6.93581 16.5981 6.41998 17.1131C5.90414 17.6289 5.06831 17.6289 4.55331 17.1131C4.03831 16.5973 4.03748 15.7614 4.55331 15.2464C5.06914 14.7314 5.90414 14.7306 6.41998 15.2464"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M8.33329 3.3335H11.6666C12.1266 3.3335 12.5 3.70683 12.5 4.16683V12.5002H1.66663"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M4.16663 16.1802H2.49996C2.03996 16.1802 1.66663 15.8068 1.66663 15.3468V10.8335"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M12.5 5.8335H16.1025C16.4433 5.8335 16.75 6.041 16.8758 6.35766L18.2142 9.70266C18.2925 9.89933 18.3333 10.1093 18.3333 10.321V15.2777C18.3333 15.7377 17.96 16.111 17.5 16.111H15.9742"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M13.3333 16.1833H6.80835"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M18.3333 11.6668H15V8.3335H17.6667"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M1.66663 3.33317H5.83329"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M1.66663 5.83317H4.16663"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M2.49996 8.33317H1.66663"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ForkIcon: React.FC<IconProps> = ({
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
      d="M2.5 2.56982V6.28816V6.36316V6.28816C2.5 7.34982 2.9375 8.28982 3.61583 8.89816C3.9475 9.19566 4.16667 9.59732 4.16667 10.0432V16.2498C4.16667 16.9398 4.72667 17.4998 5.41667 17.4998C6.10667 17.4998 6.66667 16.9398 6.66667 16.2498V10.0432C6.66667 9.59732 6.88583 9.19566 7.2175 8.89816C7.89583 8.28982 8.33333 7.34982 8.33333 6.28816V2.56982V6.28816"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.41667 6.66667V2.5"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.6667 3.37679C16.6667 2.91679 16.2933 2.54346 15.8333 2.54346H15C13.6192 2.54346 12.5 3.66262 12.5 5.04346V10.0435C12.5 11.1301 13.1975 12.046 14.1667 12.3901V16.2501C14.1667 16.9401 14.7267 17.5001 15.4167 17.5001C16.1067 17.5001 16.6667 16.9401 16.6667 16.2501V12.5435V3.37679Z"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LogIcon: React.FC<IconProps> = ({
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
      d="M10 4.16667H16.6667"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="5.00004"
      cy="4.16667"
      r="1.66667"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 10.0002H16.6667"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 15.8332H16.6667"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="5.00004"
      cy="10.0002"
      r="1.66667"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="5.00004"
      cy="15.8332"
      r="1.66667"
      stroke="#667085"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CalendarDetailIcon: React.FC<IconProps> = ({
  width = 40,
  height = 40,
  className,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M12.4993 5V10"
      stroke="#667085"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27.4993 5V10"
      stroke="#667085"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.1667 19.1673H12.5"
      stroke="#667085"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.1667 24.9993H12.5"
      stroke="#667085"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.8327 19.1673H19.166"
      stroke="#667085"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.8327 24.9993H19.166"
      stroke="#667085"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27.5007 19.1673H25.834"
      stroke="#667085"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27.5007 24.9993H25.834"
      stroke="#667085"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="5"
      y="7.5"
      width="30"
      height="27.5"
      rx="3"
      stroke="#667085"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FileIcon: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className,
}) => (
<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none" className={className}>
  <path fillRule="evenodd" clipRule="evenodd" d="M15.3463 5.345L12.9896 2.98833C12.6771 2.67583 12.253 2.5 11.8113 2.5H5.83464C4.9138 2.5 4.16797 3.24583 4.16797 4.16667V15.8333C4.16797 16.7542 4.9138 17.5 5.83464 17.5H14.168C15.0888 17.5 15.8346 16.7542 15.8346 15.8333V6.52333C15.8346 6.08167 15.6588 5.6575 15.3463 5.345V5.345Z" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.8346 6.66667H12.5013C12.0413 6.66667 11.668 6.29333 11.668 5.83333V2.5" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.3333 9.26676H9.375" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.3333 11.6667H9.375" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M13.3333 14.0666H9.375" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.77214 9.1665C6.71464 9.1665 6.66797 9.21317 6.66797 9.27067C6.66797 9.32817 6.71464 9.37484 6.77214 9.37484C6.82964 9.37484 6.8763 9.32817 6.8763 9.27067C6.8763 9.21317 6.82964 9.1665 6.77214 9.1665" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.77214 11.5625C6.71464 11.5625 6.66797 11.6092 6.66797 11.6667C6.66797 11.7242 6.71464 11.7708 6.77214 11.7708C6.82964 11.7708 6.8763 11.7242 6.8763 11.6667C6.8763 11.6092 6.82964 11.5625 6.77214 11.5625" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M6.77214 13.9585C6.71464 13.9585 6.66797 14.0052 6.66797 14.0627C6.66797 14.1202 6.71464 14.1668 6.77214 14.1668C6.82964 14.1668 6.8763 14.1202 6.8763 14.0627C6.8763 14.0052 6.82964 13.9585 6.77214 13.9585" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
);

export const PlateCircleIcon: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className,
}) => (
 <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 160 160" fill="none" className={className}>
  <path d="M33.7382 63.1504L127.576 60.0254C127.576 60.0254 142.613 87.5504 122.326 115.3C102.513 142.413 60.8757 139.288 42.3507 117.063C21.5882 92.1379 33.7382 63.1504 33.7382 63.1504Z" fill="#D4D4D4"/>
  <path d="M79.9376 29.8629C49.9876 30.0754 32.0751 50.6254 31.6376 77.7254C31.2001 105.05 52.1751 130.388 82.3376 130.388C113.813 130.388 131.513 104.825 131.725 77.9379C131.925 54.1004 110.963 29.6379 79.9376 29.8629Z" fill="#F6F6F6"/>
  <path d="M46.0879 78.5496L48.9004 70.6371C48.9004 70.6371 56.6129 47.6871 81.0504 47.8121C103.825 47.9371 112.263 69.5621 112.263 69.5621L114.85 77.9496L116.225 73.2246L112.975 61.9496L101.975 49.1621L83.4379 43.4121L67.9629 45.5871L55.3004 53.6246L46.8629 66.6746L46.0879 78.5496Z" fill="#D5D5D5"/>
  <path d="M80.8247 115.574C60.8122 115.574 45.4247 100.749 44.0622 80.0116C43.4122 70.1241 46.8497 60.6616 53.7497 53.3866C60.7622 45.9616 70.6122 41.7491 80.8247 41.8616C91.5622 41.9616 100.787 45.8366 107.525 53.0616C114.4 60.4366 117.975 70.5866 117.337 80.8866C116.125 100.562 101.15 115.137 81.7247 115.574C81.4122 115.562 81.1122 115.574 80.8247 115.574ZM80.4872 44.9741C71.2747 44.9741 62.3622 48.8116 56.0122 55.5241C49.7247 62.1741 46.5872 70.7991 47.1747 79.7991C48.4372 99.1116 62.8997 112.824 81.6372 112.424C99.3997 112.037 113.087 98.6866 114.2 80.6741C114.775 71.3616 111.412 61.8241 105.225 55.1616C99.0872 48.5741 90.6372 45.0491 80.7872 44.9616C80.6872 44.9741 80.5872 44.9741 80.4872 44.9741Z" fill="white"/>
</svg>
);