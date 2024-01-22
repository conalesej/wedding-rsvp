import React from "react";
import styles from "./Rsvp.module.scss";
import { TitleHeader } from "@/app/common";
const Rsvp = () => {
  return (
    <main className={styles.rsvpMain}>
      <TitleHeader title="RSVP" lineWidthPercentage="100%" />

      <div className={styles.wrapper}>
        <p className={styles.label}>
          Please respond by <b>March 03, 2024</b>, so we can make the necessary
          arrangements for your attendance. We look forward to celebrating with
          you.
        </p>

        <a
          className={styles.link}
          href="https://forms.gle/19eZCV8CbLmzLSwj8"
          target="_blank"
        >
          Click this link to fill up the forms!
        </a>
      </div>
    </main>
  );
};

export default Rsvp;
