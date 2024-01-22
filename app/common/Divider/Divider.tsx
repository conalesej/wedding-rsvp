import React from "react";
import styles from "./Divider.module.scss";

interface IDivider {
  orientation: "horizontal" | "vertical";
  height?: number;
  lineWidthPercentage?: string;
}
const Divider: React.FC<IDivider> = ({
  orientation,
  height = "24",
  lineWidthPercentage = "100%",
}) => {
  return (
    <div
      className={[
        styles.verticalDivider,
        orientation === "vertical" ? styles.verticalResponsive : undefined,
        orientation === "vertical" ? styles.borderLeft : styles.borderBottom,
      ].join(" ")}
      style={{
        height: height,
        width: orientation === "horizontal" ? lineWidthPercentage : undefined,
      }}
    />
  );
};

export default Divider;
