import React from "react";
import styles from "./Landing.module.scss";
const Landing = () => {
  return (
    <main className={styles.main}>
      <section className={styles.nameSection}>
        <div className={styles.names}>
          <div className={styles.groom}>
            <div>Ephraim</div>
            <div>CONALES</div>
          </div>
          <div className={styles.bigAnd}>&</div>
          <div className={styles.bride}>
            <div>Elaine</div>
            <div>LUCEÑADA</div>
          </div>
        </div>
        <div className={styles.areGettingMarried}>are getting married</div>
      </section>

      <section className={styles.miniDetails}>
        April 13, 2024 | Quezon City, Manila
      </section>

      <article>
        <p>
          Please join us on April 13, 2024 for the marriage of Ephraim Conales
          and Elaine Luceñada. The ceremony will begin at 3:30PM at the
          Santuario de San Vicente de Paul. We can’t wait to see you there!
          Please RSVP by March 03, 2024 so that we can be prepared.
        </p>
      </article>

      {/* divider */}
      <div />

      <section className={styles.countdownSection}>
        <div className={styles.weAreWaitingFor}>We are waiting for..</div>

        <div className={styles.countdowns}>
          <div className={styles.countdown}>
            <div className={styles.countdownNumber}></div>
            <div className={styles.countdownUnit}></div>
          </div>

          <div className={styles.countdown}>
            <div className={styles.countdownNumber}></div>
            <div className={styles.countdownUnit}></div>
          </div>

          <div className={styles.countdown}>
            <div className={styles.countdownNumber}></div>
            <div className={styles.countdownUnit}></div>
          </div>

          <div className={styles.countdown}>
            <div className={styles.countdownNumber}></div>
            <div className={styles.countdownUnit}></div>
          </div>
        </div>

        <div className={styles.countdownDetail}>
          The ceremony begins in 93 days, 14 hours, 04 minutes, 39 seconds!
        </div>
      </section>

      <div />

      <footer>Scroll down for more details..</footer>
    </main>
  );
};

export default Landing;
