import React from "react";
import Image from "next/image";
import styles from "./Faqs.module.scss";
import { TitleHeader } from "@/app/common";

const LeafDivider = () => {
  return (
    <Image
      className={styles.imageDivider}
      width={145}
      height={35}
      src="/images/tree-divider.png"
      alt="My Image"
    />
  );
};

const Faqs = () => {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <TitleHeader title="Frequently Asked Questions" />

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
            <span className={styles.cursive}>Absolutely! </span>
            <span style={{ display: "inline" }}>
              You're welcome to use phones and cameras to capture memories. We
              kindly ask guests to remain at their designated places during the
              ceremony, as professional photographers and cinematographers will
              be documenting the special moments.
            </span>
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
          <header className={styles.question}>Can I Bring a plus one?</header>
          <p className={styles.answer}>
            While we'd love to accommodate everyone, please <b>refrain</b> from
            inviting additional guests <b>without prior arrangement</b> to
            ensure our celebration goes as planned.
          </p>
        </section>

        <LeafDivider />

        <section className={styles.faqSection}>
          <header className={styles.question}>How do I RSVP?</header>
          <p className={styles.answer}>
            You can RSVP by filling out the provided <b>forms</b> or contacting
            us directly. Choose the method that suits you best, and we look
            forward to receiving your response! Insert mo dito pre yung link sa
            google forms or HyperLink sa Contact Us Forms
          </p>
        </section>

        <LeafDivider />

        <section className={styles.faqSection}>
          <header className={styles.question}>
            When is the RSVP Deadline?
          </header>
          <p className={styles.answer}>
            The RSVP deadline is set for <b>6 weeks</b> before the wedding date
            or by
            <b>March 3, 2024</b>. We appreciate your prompt response!
          </p>
        </section>

        <LeafDivider />

        <section className={styles.faqSection}>
          <header className={styles.question}>
            What happens in case of bad weather?
          </header>
          <p className={styles.answer}>
            In case of inclement weather, both the <b>wedding ceremony</b> and
            <b>reception</b> are planned to be held <b>indoors</b>. While the
            parking space is not covered, we recommend bringing <b>umbrellas</b>{" "}
            for your convenience. Your comfort and enjoyment are important to
            us, and we appreciate your preparedness for any unexpected weather
            conditions.
          </p>
        </section>

        <LeafDivider />

        <section className={styles.faqSection}>
          <header className={styles.question}>
            I’m planning on considering a gift, any preferences?
          </header>
          <p className={[styles.answer, styles.italicized].join(" ")}>
            " Grateful for all we possess, Our hearts truly blessed,
            <br /> Your presence and prayers, our dearest quest. <br />
            If you wish to gift with kindness nonetheless, <br />
            Monetary blessings, we humbly suggest. "
          </p>
        </section>

        <LeafDivider />

        <section className={styles.faqSection}>
          <header className={styles.question}>
            II have a question not answered here; how do I contact you?
          </header>
          <p className={styles.answer}>
            If you have additional questions or need further assistance, please
            reach out to us directly. You can find our contact information in
            the <b className={styles.underlined}>"Contact Us"</b> section of
            this website.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Faqs;
