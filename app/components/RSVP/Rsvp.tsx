"use client";
import React, { useEffect, useRef } from "react";
import styles from "./Rsvp.module.scss";
import { TitleHeader } from "@/app/common";
import { useActiveSectionContext } from "@/app/hooks/sectionContext";
import { useInView } from "framer-motion";
import UseInViewAnimate from "@/app/hooks/useInViewHook";
const Rsvp = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    root: undefined,
    margin: "-40%",
  });
  const { activeSection, setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (
      ref.current &&
      activeSection.section === "RSVP" &&
      activeSection.willScroll
    ) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeSection]);
  useEffect(() => {
    if (isInView) {
      setActiveSection({ willScroll: false, section: "RSVP" });
    }
  }, [isInView]);
  return (
    <main className={styles.rsvpMain} ref={ref}>
      <div className={styles.wrapper}>
        <TitleHeader title="RSVP" lineWidthPercentage="100%" />

        <UseInViewAnimate>
          <div className={styles.labelContainer}>
            <p className={styles.label}>
              Please respond by <b>March 03, 2024</b>, so we can make the
              necessary arrangements for your attendance. We look forward to
              celebrating with you.
            </p>

            <a
              className={styles.link}
              href="https://forms.gle/19eZCV8CbLmzLSwj8"
              target="_blank"
            >
              Click this link to fill up the forms!
            </a>
          </div>
        </UseInViewAnimate>
      </div>
    </main>
  );
};

export default Rsvp;
