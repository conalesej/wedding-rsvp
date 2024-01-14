import React, { CSSProperties, ReactNode } from "react";
import styles from "./LabelSection.module.scss";

interface ILabelSection {
  children: ReactNode;
  sx?: CSSProperties | undefined;
}

const LabelSection: React.FC<ILabelSection> = ({
  children,
  sx = undefined,
}) => {
  return (
    <section className={styles.main} style={{ ...sx }}>
      <p className={styles.label}>{children}</p>
    </section>
  );
};

export default LabelSection;
