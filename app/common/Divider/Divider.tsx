import React from "react";
import styles from "./Divider.module.scss";

interface IDivider {
  orientation: "horizontal" | "vertical";
  height?: number;
}
const Divider: React.FC<IDivider> = ({ orientation, height = "24" }) => {
  return (
    <div
      className={[
        styles.verticalDivider,
        orientation === "vertical" ? styles.verticalResponsive : undefined,
        orientation === "vertical" ? styles.borderLeft : styles.borderBottom,
      ].join(" ")}
      style={{ height: height }}
    />
  );
};

export default Divider;
