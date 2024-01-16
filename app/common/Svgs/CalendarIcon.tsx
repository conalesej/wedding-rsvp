import React from "react";

interface ICalendarIcon {
  size?: number;
  color?: string;
}
const CalendarIcon: React.FC<ICalendarIcon> = ({
  size = 52,
  color = "#CCB017",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_15_13)">
        <path
          d="M43.3333 6.5H41.1667V2.16666H36.8333V6.5H15.1667V2.16666H10.8333V6.5H8.66667C6.28333 6.5 4.33333 8.45 4.33333 10.8333V45.5C4.33333 47.8833 6.28333 49.8333 8.66667 49.8333H43.3333C45.7167 49.8333 47.6667 47.8833 47.6667 45.5V10.8333C47.6667 8.45 45.7167 6.5 43.3333 6.5ZM43.3333 45.5H8.66667V17.3333H43.3333V45.5Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_15_13">
          <rect width="52" height="52" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CalendarIcon;
