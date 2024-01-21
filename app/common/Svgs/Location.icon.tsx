import React from "react";
import styles from "./Location.module.scss";
interface ILocationIcon {
  color?: string;
}
const LocationIcon: React.FC<ILocationIcon> = ({ color = "#CCB017" }) => {
  return (
    <svg
      className={styles.locationIconMain}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_17_47)">
        <path
          d="M6 1C4.065 1 2.5 2.565 2.5 4.5C2.5 5.37 2.75 6.185 3.205 6.92C3.68 7.69 4.305 8.35 4.785 9.12C5.02 9.495 5.19 9.845 5.37 10.25C5.5 10.525 5.605 11 6 11C6.395 11 6.5 10.525 6.625 10.25C6.81 9.845 6.975 9.495 7.21 9.12C7.69 8.355 8.315 7.695 8.79 6.92C9.25 6.185 9.5 5.37 9.5 4.5C9.5 2.565 7.935 1 6 1ZM6 5.875C5.31 5.875 4.75 5.315 4.75 4.625C4.75 3.935 5.31 3.375 6 3.375C6.69 3.375 7.25 3.935 7.25 4.625C7.25 5.315 6.69 5.875 6 5.875Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_17_47">
          <rect width="12" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LocationIcon;
