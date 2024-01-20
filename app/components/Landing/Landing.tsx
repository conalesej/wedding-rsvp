import React from "react";
import styles from "./Landing.module.scss";
import { InfiniteIcon } from "@/app/common";

const Divider = () => {
  return (
    <div className={styles.dividerMain}>
      <div className={styles.line} />
      <InfiniteIcon size={32} />
      <div className={styles.line} />
    </div>
  );
};

const Landing = () => {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <section className={styles.nameSection}>
          <div className={styles.names}>
            <div className={styles.groom}>
              <div className={styles.groomFirstName}>Ephraim</div>
              <div className={styles.groomLastName}>CONALES</div>
            </div>
            <div className={styles.bigAnd}>&</div>
            <div className={styles.bride}>
              <div className={styles.brideFirstName}>Elaine</div>
              <div className={styles.brideLastName}>LUCEÑADA</div>
            </div>
          </div>
          <div className={styles.areGettingMarried}>are getting married</div>
        </section>

        <section className={styles.miniDetails}>
          April 13, 2024 | Quezon City, Manila
        </section>

        <p className={styles.inviteMessage}>
          Please join us on{" "}
          <span className={styles.italicized}>April 13, 2024</span> for the
          marriage of Ephraim Conales and Elaine Luceñada. The ceremony will
          begin at 3:30PM at the{" "}
          <span className={styles.underlined}>
            {" "}
            Santuario de San Vicente de Paul
          </span>
          . We can't wait to see you there! Please RSVP by{" "}
          <span className={styles.italicized}>
            <b>March 03, 2024</b>
          </span>{" "}
          so that we can be prepared.
        </p>

        <Divider />

        <section className={styles.countdownSection}>
          <div className={styles.weAreWaitingFor}>We are waiting for..</div>

          <div className={styles.countdowns}>
            <div className={styles.countdown}>
              <div className={styles.countdownNumber}>93</div>
              <div className={styles.countdownUnit}>Days</div>
            </div>

            <div className={styles.countdown}>
              <div className={styles.countdownNumber}>14</div>
              <div className={styles.countdownUnit}>Hours</div>
            </div>

            <div className={styles.countdown}>
              <div className={styles.countdownNumber}>04</div>
              <div className={styles.countdownUnit}>Mins</div>
            </div>

            <div className={styles.countdown}>
              <div
                className={[styles.countdownNumber, styles.golden].join(" ")}
              >
                39
              </div>
              <div className={styles.countdownUnit}>Sec</div>
            </div>
          </div>

          <div className={styles.hopeMessage}>Hope to see you there!</div>
        </section>

        <Divider />

        <footer className={styles.landingFooter}>
          Scroll down for more details..
        </footer>
      </div>
    </main>
  );
};

export default Landing;
