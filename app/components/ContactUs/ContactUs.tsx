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
import { useActiveSectionContext } from "@/app/hooks/sectionContext";
import { useInView } from "framer-motion";
import UseInViewAnimate from "@/app/hooks/useInViewHook";
const ContactUs = () => {
  const ref = useRef<HTMLElement>(null);
  const { activeSection, setActiveSection } = useActiveSectionContext();
  const isInView = useInView(ref, {
    root: undefined,
    margin: "-40%",
  });

  useEffect(() => {
    if (
      ref.current &&
      activeSection.section === "Contacts" &&
      activeSection.willScroll
    ) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeSection]);

  useEffect(() => {
    if (isInView) {
      setActiveSection({ willScroll: false, section: "Contacts" });
    }
  }, [isInView]);
  return (
    <main className={styles.contactUsMain} ref={ref}>
      <Image
        quality={60}
        className={styles.imageBackground}
        src="/images/Roses.jpg"
        alt="My Image"
        layout="fill"
        objectFit="cover"
        sizes="(max-width: 720px) 100vw, (max-width: 1280px) 50vw, 25vw, 1920px"
      />
      <div className={styles.wrapper}>
        <TitleHeader title="Contact Us" lineWidthPercentage="100%" />
        <UseInViewAnimate>
          <article className={styles.paragraph}>
            💌 Let's Chat
            <br />
            Hey there! Your messages mean the world to us. Whether you're
            bursting with excitement, have a burning question, or just want to
            spread some love - we're all ears. Drop us a line and let's make the
            countdown to our big day even more special, together.
          </article>

          <section className={styles.contacts}>
            <div className={styles.contact}>
              <div className={styles.name}>Ephraim Conales</div>
              <div className={styles.icons}>
                <MessengerIcon
                  href={`${"https://www.messenger.com/t/conalesej"}`}
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
                  href={`${"https://www.messenger.com/t/aine095"}`}
                />
                <MailIcon href="sms:+639301997543" />
                <CellphoneIcon contactUs href="tel:+639301997543" />
              </div>
            </div>
          </section>
        </UseInViewAnimate>
      </div>
    </main>
  );
};

export default ContactUs;
