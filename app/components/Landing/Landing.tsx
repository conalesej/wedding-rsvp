"use client";
import React, { useCallback, useEffect, useId, useRef, useState } from "react"; // { useEffect, useMemo, useState }
import Countdown from "react-countdown";
import Image from "next/image";
import styles from "./Landing.module.scss";

import { ArrowDownIcon, InfiniteIcon } from "@/app/common";
import { useActiveSectionContext } from "@/app/context/sectionContext";

const Divider = () => {
  return (
    <div className={styles.dividerMain}>
      <div className={styles.line} />
      <InfiniteIcon />
      <div className={styles.line} />
    </div>
  );
};

const Landing = () => {
  const id = useId();
  const ref = useRef<HTMLElement>(null);

  const { activeSection, setActiveSection } = useActiveSectionContext();

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const countFunction = useCallback(() => {
    const target = new Date("04/13/2024 15:30:00");

    const now = new Date();
    const difference = target.getTime() - now.getTime();

    const d = Math.floor(difference / (1000 * 60 * 60 * 24));
    setDays(d);

    const h = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    setHours(h);

    const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    setMinutes(m);

    const s = Math.floor((difference % (1000 * 60)) / 1000);
    setSeconds(s);
  }, []);

  useEffect(() => {
    const interval = setInterval(countFunction, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (ref.current && activeSection === "Home") {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeSection]);
  return (
    <main className={styles.main} ref={ref}>
      <Image
        quality={10}
        priority
        className={styles.imageBackground}
        src="/images/Roses.jpg"
        alt="My Image"
        layout="fill"
        objectFit="cover"
        style={{ opacity: "20%" }}
      />
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
              <div key={id} className={styles.countdownNumber}>
                {days.toString().length === 1 ? "0" + days : days}
              </div>
              <div className={styles.countdownUnit}>Days</div>
            </div>

            <div className={styles.countdown}>
              <div key={id} className={styles.countdownNumber}>
                {hours.toString().length === 1 ? "0" + hours : hours}
              </div>
              <div className={styles.countdownUnit}>Hours</div>
            </div>

            <div className={styles.countdown}>
              <div key={id} className={styles.countdownNumber}>
                {minutes.toString().length === 1 ? "0" + minutes : minutes}
              </div>
              <div className={styles.countdownUnit}>Mins</div>
            </div>

            <div className={styles.countdown}>
              <div
                key={id}
                className={[styles.countdownNumber, styles.golden].join(" ")}
              >
                {seconds.toString().length === 1 ? "0" + seconds : seconds}
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
        <ArrowDownIcon />
      </div>
    </main>
  );
};

export default Landing;
