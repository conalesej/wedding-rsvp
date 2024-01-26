import React, { useEffect, useRef } from "react";
import styles from "./useInViewHook.module.scss";
import { motion, useAnimation, useInView } from "framer-motion";
interface IUseInViewAnimate {
  children: React.ReactNode;
  useInViewProps?: {
    root: React.RefObject<Element> | undefined;
    margin: string | undefined;
    once: boolean;
  };
  initial?: object;
  animate?: object;
  transition?: object;
}
const UseInViewAnimate: React.FC<IUseInViewAnimate> = ({
  children,
  useInViewProps = {
    root: undefined,
    margin: "-20%",
    once: true,
  },
  animate = { opacity: 1, y: 0 },
  initial = { opacity: 0, y: 10 },
  transition = { duration: 0.5 },
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { ...useInViewProps });

  useEffect(() => {
    if (isInView) {
      controls.start({ ...animate });
    }
  }, [isInView]);
  return (
    <motion.main
      className={styles.main}
      ref={ref}
      initial={{ ...initial }}
      animate={controls}
      transition={{ ...transition }} 
    >
      {children}
    </motion.main>
  );
};

export default UseInViewAnimate;
