import React from "react";
import styles from "./Divider.module.scss";

interface IDivider {
  orientation: "horizontal" | "vertical";
  height?: number;
}
const Divider: React.FC<IDivider> = ({ orientation, height = "24" }) => {
  const applyStyles: React.CSSProperties =
    orientation === "horizontal"
      ? { borderBottom: "1px solid var(--divider-color)" }
      : { borderLeft: "1px solid var(--divider-color)", height };

  return <div className={styles.verticalDivider} style={{ ...applyStyles }} />;
};

export default Divider;
