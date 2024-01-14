import React from "react";
import styles from "./TitleHeader.module.scss";
import { Divider } from "..";

interface ITitleHeader {
  title: string;
  fontSize?: number | undefined;
}

const TitleHeader: React.FC<ITitleHeader> = ({
  title,
  fontSize = undefined,
}) => {
  return (
    <>
      <header className={styles.titleHeader} style={{ fontSize: fontSize }}>
        {title}
      </header>
      <Divider orientation="horizontal" />
    </>
  );
};

export default TitleHeader;
