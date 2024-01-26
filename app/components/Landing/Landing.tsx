"use client";
import React, { useCallback, useEffect, useId, useRef, useState } from "react"; // { useEffect, useMemo, useState }
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Landing.module.scss";

import { ArrowDownIcon, InfiniteIcon } from "@/app/common";
import { useActiveSectionContext } from "@/app/hooks/sectionContext";
import { useInView } from "framer-motion";

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

  const isInView = useInView(ref, {
    root: undefined,
    margin: "-40%",
  });

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
    if (
      ref.current &&
      activeSection.section === "Landing" &&
      activeSection.willScroll
    ) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeSection]);

  useEffect(() => {
    if (isInView) {
      setActiveSection({ willScroll: false, section: "Landing" });
    }
  }, [isInView]);

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
        sizes="(max-width: 720px) 100vw, (max-width: 1280px) 50vw, 25vw, 1920px"
      />
      <div className={styles.wrapper}>
        <section className={styles.nameSection}>
          <div className={styles.names}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={styles.groom}
            >
              <div className={styles.groomFirstName}>Ephraim</div>
              <div className={styles.groomLastName}>CONALES</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={styles.bigAnd}
            >
              &
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={styles.bride}
            >
              <div className={styles.brideFirstName}>Elaine</div>
              <div className={styles.brideLastName}>LUCEÑADA</div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={styles.areGettingMarried}
          >
            are getting married
          </motion.div>
        </section>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className={styles.miniDetails}
        >
          April 13, 2024 | Quezon City, Manila
        </motion.section>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className={styles.inviteMessage}
        >
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
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className={styles.divider}
        >
          <Divider />
        </motion.div>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className={styles.countdownSection}
        >
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
        </motion.section>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className={styles.divider}
        >
          <Divider />
        </motion.div>
        <motion.footer
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className={styles.landingFooter}
          onClick={() =>
            setActiveSection({ willScroll: true, section: "Details" })
          }
        >
          <p className={styles.footerText}>Scroll down for more details..</p>
          <ArrowDownIcon />
        </motion.footer>
      </div>
    </main>
  );
};

export default Landing;
