import React from "react";
import styles from "./TitleHeader.module.scss";
import { Divider } from "..";

interface ITitleHeader {
  title: string;
  fontSize?: number | undefined;
  lineWidthPercentage?: string;
}

const TitleHeader: React.FC<ITitleHeader> = ({
  title,
  fontSize = undefined,
  lineWidthPercentage = "100%",
}) => {
  return (
    <main className={styles.titleHeaderMain}>
      <header className={styles.titleHeader} style={{ fontSize: fontSize }}>
        {title}
      </header>
      <Divider
        orientation="horizontal"
        lineWidthPercentage={lineWidthPercentage}
      />
    </main>
  );
};

export default TitleHeader;
