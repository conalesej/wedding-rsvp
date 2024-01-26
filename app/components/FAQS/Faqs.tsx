"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Faqs.module.scss";
import { TitleHeader } from "@/app/common";
import { useActiveSectionContext } from "@/app/hooks/sectionContext";

import { useInView } from "framer-motion";

import { Typography } from "@mui/material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import UseInViewAnimate from "@/app/hooks/useInViewHook";
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

const TimeLineComponent = () => {
  return (
    <Timeline className={styles.timelineWrapper}>
      <TimelineItem>
        <TimelineOppositeContent sx={{ flex: "unset" }}>
          <Typography>3:30PM</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: "#CCB017" }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>
            Guests converge at the Reception, greeted with cocktails and the
            joyous anticipation of an evening filled with photobooth delights,
            delectable soups, salads, and pasta.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent sx={{ flex: "unset" }}>
          <Typography>4:45PM</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: "#CCB017" }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>
            Guests converge at the Reception, greeted with cocktails and the
            joyous anticipation of an evening filled with photobooth delights,
            delectable soups, salads, and pasta.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent sx={{ flex: "unset" }}>
          <Typography>6:00PM</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: "#CCB017" }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>
            A warm welcome by the host initiates the festivities, introducing
            guests from various corners of the world and kicking off an exciting
            Raffle Part 1.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent sx={{ flex: "unset" }}>
          <Typography>6:35PM</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: "#CCB017" }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>
            Indulge in a delightful Dinner & Pictorial session, capturing
            cherished moments in a backdrop of celebration.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent sx={{ flex: "unset" }}>
          <Typography>7:05PM</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: "#CCB017" }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>
            Experience the journey of love through a Growing UP AVP and Prenup
            AVP, followed by the suspense of Raffle Part 2.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent sx={{ flex: "unset" }}>
          <Typography>7:40PM</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: "#CCB017" }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>
            Immerse in an On-Site Video, offering glimpses into the heartwarming
            moments of the day.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent sx={{ flex: "unset" }}>
          <Typography>7:55PM</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: "#CCB017" }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography>
            Excitement peaks with Raffle Part 3, as the host expresses gratitude
            to suppliers, including the talented team from Weddings by Z Events,
            and the grand awarding of prizes.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent sx={{ flex: "unset" }}>
          <Typography>8:00PM</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ backgroundColor: "#CCB017" }} />
          {/* No TimelineConnector since it's the last item */}
        </TimelineSeparator>
        <TimelineContent>
          <Typography>
            Capture the unity of all guests on stage in a Group Picture, marking
            the conclusion of a joyous celebration.
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

const Faqs = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    root: undefined,
    margin: "-40%",
  });

  const { activeSection, setActiveSection } = useActiveSectionContext();
  useEffect(() => {
    if (
      ref.current &&
      activeSection.section === "FAQs" &&
      activeSection.willScroll
    ) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeSection]);

  useEffect(() => {
    if (isInView) {
      setActiveSection({ willScroll: false, section: "FAQs" });
    }
  }, [isInView]);
  return (
    <main className={styles.main} ref={ref}>
      <div className={styles.wrapper}>
        <TitleHeader title="Frequently Asked Questions" />
        <UseInViewAnimate>
          <section className={styles.faqSection}>
            <header className={styles.question}>
              What time should I arrive?
            </header>
            <p className={styles.answer}>
              The wedding ceremony will start at <b>3:30PM</b>. We recommend
              arriving <b>30 minutes</b> before the scheduled ceremony start
              time. This allows for ample time to find parking get seated, and
              be debriefed.
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
                kindly ask guests to remain at their designated places during
                the ceremony. This to esnsure that our professional
                photographers and cinematographers can <b>effectively</b>{" "}
                document all the special momets.
              </span>
            </p>
          </section>

          <LeafDivider />

          <section className={styles.faqSection}>
            <header className={styles.question}>
              What is the timeline of events on that day?
            </header>
            <p className={styles.answer}>
              While the details are not yet finalized, here is a preliminary
              timeline of events for your consideration. Please note that
              adjustments may be made as the planning progresses.
            </p>

            <div className={styles.timeline}>
              <TimeLineComponent />
            </div>
          </section>

          <LeafDivider />

          <section className={styles.faqSection}>
            <header className={styles.question}>Can I Bring a plus one?</header>
            <p className={styles.answer}>
              While we'd love to accommodate everyone, please <b>refrain</b>{" "}
              from inviting additional guests <b>without prior arrangement</b>{" "}
              to ensure our celebration goes as planned.
            </p>
          </section>

          <LeafDivider />

          <section className={styles.faqSection}>
            <header className={styles.question}>How do I RSVP?</header>
            <p className={styles.answer}>
              You can RSVP by filling out the provided{" "}
              <a href="https://forms.gle/19eZCV8CbLmzLSwj8" target="_blank">
                forms
              </a>{" "}
              or contacting us directly. Choose the method that suits you best,
              and we look forward to receiving your response!
              <br />
              <b
                className={styles.underlined}
                onClick={() =>
                  setActiveSection({ willScroll: true, section: "Contacts" })
                }
              >
                Contact Us
              </b>{" "}
              or{" "}
              <b
                className={styles.underlined}
                onClick={() =>
                  setActiveSection({ willScroll: true, section: "RSVP" })
                }
              >
                RSVP
              </b>
            </p>
          </section>

          <LeafDivider />

          <section className={styles.faqSection}>
            <header className={styles.question}>
              When is the RSVP Deadline?
            </header>
            <p className={styles.answer}>
              The RSVP deadline is set for <b>6 weeks</b> before the wedding
              date or by
              <b> March 3, 2024</b>. We appreciate your prompt response!
            </p>
          </section>

          <LeafDivider />

          <section className={styles.faqSection}>
            <header className={styles.question}>
              What happens in case of bad weather?
            </header>
            <p className={styles.answer}>
              In case of inclement weather, both the <b>wedding ceremony</b> and
              <b> reception</b> are planned to be held <b>indoors</b>. While the
              parking space is not covered, we recommend bringing{" "}
              <b>umbrellas</b> for your convenience. Your comfort and enjoyment
              are important to us, and we appreciate your preparedness for any
              unexpected weather conditions.
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
              I have a question not answered here; how do I contact you?
            </header>
            <p className={styles.answer}>
              If you have additional questions or need further assistance,
              please reach out to us directly. You can find our contact
              information in the{" "}
              <b
                className={styles.underlined}
                onClick={() =>
                  setActiveSection({ willScroll: true, section: "Contacts" })
                }
              >
                Contact Us
              </b>{" "}
              section of this website.
            </p>
          </section>
        </UseInViewAnimate>
      </div>
    </main>
  );
};

export default Faqs;
