"use client";
import React, { useEffect, useRef } from "react";
import styles from "./TitleHeader.module.scss";
import { Divider } from "..";

import { motion, useAnimation, useInView } from "framer-motion";

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
  const ref = useRef<HTMLElement | null>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, {
    root: undefined,
    margin: "-20%",
    once: true,
  });

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, x: 0 });
    }
  }, [isInView]);
  return (
    <motion.main
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={controls}
      transition={{ duration: 0.6 }}
      className={styles.titleHeaderMain}
    >
      <header className={styles.titleHeader} style={{ fontSize: fontSize }}>
        {title}
      </header>
      <Divider
        orientation="horizontal"
        lineWidthPercentage={lineWidthPercentage}
      />
    </motion.main>
  );
};

export default TitleHeader;
