import React from "react";
import styles from "./ScrollDownIcon.module.scss";
interface IArrowDownIcon {
  size?: number;
  color?: string;
}
const ArrowDownIcon: React.FC<IArrowDownIcon> = ({
  size = 8,
  color = "#CCB017",
}) => {
  return (
    <div className={styles.scrollDownIconMain}>
      <svg
        className={styles.aboveArrow}
        viewBox="0 0 16 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.2625 0.737488L8 6.46249L13.7375 0.737488L15.5 2.49999L8 9.99999L0.5 2.49999L2.2625 0.737488Z"
          fill={color}
          fill-opacity="0.5"
        />
      </svg>
      <svg
        className={styles.belowArrow}
        viewBox="0 0 20 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.35 0.31665L10 7.94998L17.65 0.31665L20 2.66665L10 12.6667L0 2.66665L2.35 0.31665Z"
          fill={color}
          fillOpacity="0.5"
        />
      </svg>
    </div>
  );
};

export default ArrowDownIcon;
