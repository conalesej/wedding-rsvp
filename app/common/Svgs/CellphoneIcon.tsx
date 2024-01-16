import React from "react";

interface ICellphoneIcon {
  size?: number;
  color?: string;
}
const CellphoneIcon: React.FC<ICellphoneIcon> = ({
  size = 8,
  color = "#CCB017",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.60889 3.46222C2.24889 4.72 3.28 5.74667 4.53778 6.39111L5.51556 5.41333C5.63556 5.29333 5.81333 5.25333 5.96889 5.30667C6.46667 5.47111 7.00444 5.56 7.55556 5.56C7.8 5.56 8 5.76 8 6.00444V7.55556C8 7.8 7.8 8 7.55556 8C3.38222 8 0 4.61778 0 0.444444C0 0.2 0.2 0 0.444444 0H2C2.24444 0 2.44444 0.2 2.44444 0.444444C2.44444 1 2.53333 1.53333 2.69778 2.03111C2.74667 2.18667 2.71111 2.36 2.58667 2.48444L1.60889 3.46222Z"
        fill={color}
      />
    </svg>
  );
};

export default CellphoneIcon;
