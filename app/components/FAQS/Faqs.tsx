import React from "react";
import styles from "./Faqs.module.scss";

const LeafDivider = () => {
  return (
    <img
      className={styles.imageDivider}
      src="/images/tree-divider.png"
      alt="My Image"
    />
  );
};

const Faqs = () => {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <header className={styles.titleHeader}>
          Frequently Asked Questions
        </header>
        <div className={styles.verticalDivider} />

        <section className={styles.faqSection}>
          <header className={styles.question}>
            What time should I arrive?
          </header>
          <p className={styles.answer}>
            The wedding ceremony will start at <b>3:30PM</b>. We recommend
            arriving <b>30 minutes</b> before the scheduled ceremony start time.
            This allows for ample time to find parking get seated, and be
            debriefed.
          </p>
        </section>

        <LeafDivider />

        <section className={styles.faqSection}>
          <header className={styles.question}>Where should I park?</header>
          <p className={styles.answer}>
            The area inside the church premise can house up to approximately{" "}
            <b>200</b> cars. The Parking space is <b>safe</b> and{" "}
            <b>free of charge</b>.
          </p>
        </section>

        <LeafDivider />

        <section className={styles.faqSection}>
          <header className={styles.question}>
            Are cameras or smartphones allowed during the wedding ceremony?
          </header>
          <p className={styles.answer}>
            <p className={styles.cursive}>Absolutely! </p>
            <p style={{ display: "inline" }}>
              You're welcome to use phones and cameras to capture memories. We
              kindly ask guests to remain at their designated places during the
              ceremony, as professional photographers and cinematographers will
              be documenting the special moments.
            </p>
          </p>
        </section>

        <LeafDivider />

        <section className={styles.faqSection}>
          <header className={styles.question}>
            Are cameras or smartphones allowed during the wedding ceremony?
          </header>
          <p className={styles.answer}>
            <p className={styles.cursive}>Absolutely! </p>
            <p style={{ display: "inline" }}>
              You're welcome to use phones and cameras to capture memories. We
              kindly ask guests to remain at their designated places during the
              ceremony, as professional photographers and cinematographers will
              be documenting the special moments.
            </p>
          </p>
        </section>

        <LeafDivider />

        <section className={styles.faqSection}>
          <header className={styles.question}>
            What is the timeline of events on that day?
          </header>
          <p className={styles.answer}>To follow</p>
        </section>

        <LeafDivider />

        <section className={styles.faqSection}>
          <header className={styles.question}>Can I Bring a plus one? </header>
          <p className={styles.answer}>
            While we'd love to accommodate everyone, please <b>refrain</b> from
            inviting additional guests <b>without prior arrangement</b> to
            ensure our celebration goes as planned.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Faqs;
