"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./ContactUs.module.scss";
import {
  Divider,
  MailIcon,
  TitleHeader,
  CellphoneIcon,
  MessengerIcon,
} from "@/app/common";
import { useActiveSectionContext } from "@/app/context/sectionContext";
const ContactUs = () => {
  const ref = useRef<HTMLElement>(null);
  const { activeSection, setActiveSection } = useActiveSectionContext();

  const [windowWidth, setWindowWidth] = useState(() => {
    // Use a callback to provide an initial value and check for SSR
    return typeof window !== "undefined" ? window.innerWidth : 0;
  });

  const handleResize = () => {
    setWindowWidth(typeof window !== "undefined" ? window.innerWidth : 0);
  };
  useEffect(() => {
    // Add event listener to update window width on resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (ref.current && activeSection === "Contacts") {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeSection]);
  return (
    <main className={styles.contactUsMain} ref={ref}>
      <Image
        quality={10}
        className={styles.imageBackground}
        src="/images/Roses.jpg"
        alt="My Image"
        layout="fill"
        objectFit="cover"
      />
      <div className={styles.wrapper}>
        <TitleHeader title="Contact Us" lineWidthPercentage="100%" />
        <article className={styles.paragraph}>
          💌 Let's Chat
          <br />
          Hey there! Your messages mean the world to us. Whether you're bursting
          with excitement, have a burning question, or just want to spread some
          love - we're all ears. Drop us a line and let's make the countdown to
          our big day even more special, together.
        </article>

        <section className={styles.contacts}>
          <div className={styles.contact}>
            <div className={styles.name}>Ephraim Conales</div>
            <div className={styles.icons}>
              <MessengerIcon
                href={`${
                  windowWidth > 768
                    ? "https://www.facebook.com/messages/t/conalesej"
                    : "https://www.messenger.com/t/conalesej"
                }`}
              />
              <MailIcon href="sms:+639496990828" />
              <CellphoneIcon contactUs href="tel:+639496990828" />
            </div>
          </div>
          <Divider orientation="vertical" />
          <div className={styles.contact}>
            <div className={styles.name}> Elaine Luceñada </div>
            <div className={styles.icons}>
              <MessengerIcon
                href={`${
                  windowWidth > 768
                    ? "https://www.facebook.com/messages/t/aine095"
                    : "https://www.messenger.com/t/aine095"
                }`}
              />
              <MailIcon href="sms:+639301997543" />
              <CellphoneIcon contactUs href="tel:+639301997543" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContactUs;
