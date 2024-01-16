import React from "react";

interface ICloudIcon {
  size?: number;
  color?: string;
}
const CloudIcon: React.FC<ICloudIcon> = ({ size = 52, color = "#CCB017" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_16_22)">
        <path
          d="M41.925 21.7533C40.4517 14.2783 33.8867 8.66666 26 8.66666C19.7383 8.66666 14.3 12.22 11.5917 17.42C5.07 18.1133 0 23.6383 0 30.3333C0 37.505 5.82833 43.3333 13 43.3333H41.1667C47.1467 43.3333 52 38.48 52 32.5C52 26.78 47.5583 22.1433 41.925 21.7533ZM41.1667 39H13C8.21167 39 4.33333 35.1217 4.33333 30.3333C4.33333 25.545 8.21167 21.6667 13 21.6667H14.5383C15.9683 16.6617 20.54 13 26 13C32.5867 13 37.9167 18.33 37.9167 24.9167V26H41.1667C44.7633 26 47.6667 28.9033 47.6667 32.5C47.6667 36.0967 44.7633 39 41.1667 39Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_16_22">
          <rect width="52" height="52" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CloudIcon;
