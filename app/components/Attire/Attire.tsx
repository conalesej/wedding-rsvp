"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Attire.module.scss";
import { Divider, LabelSection, TitleHeader } from "@/app/common";
import { useActiveSectionContext } from "@/app/hooks/sectionContext";
import { useInView } from "framer-motion";
import UseInViewAnimate from "@/app/hooks/useInViewHook";
const Attire = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    root: undefined,
    margin: "-40%",
  });

  const { activeSection, setActiveSection } = useActiveSectionContext();
  useEffect(() => {
    if (
      ref.current &&
      activeSection.section === "Attire" &&
      activeSection.willScroll
    ) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeSection]);
  useEffect(() => {
    if (isInView) {
      setActiveSection({ willScroll: false, section: "Attire" });
    }
  }, [isInView]);
  return (
    <main className={styles.main} ref={ref}>
      <div className={styles.wrapper}>
        <TitleHeader title="Attire" />

        <UseInViewAnimate>
          <LabelSection>
            <span>Strictly Formal Attire</span>
            <br />
            Preferably in a lighter shade of <b>Beige</b> or <b>Champagne</b>
          </LabelSection>
          <section className={styles.themeContainer}>
            <div className={styles.themeImage}>
              <Image
                className={styles.image}
                quality={10}
                priority
                src="/images/champagne-1.png"
                alt="My Image"
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 720px) 100vw, (max-width: 1280px) 50vw, 25vw, 1920px"
              />
            </div>
            <div className={styles.themeImage}>
              <Image
                className={styles.image}
                quality={10}
                priority
                src="/images/champagne-2.png"
                alt="My Image"
                layout="fill"
                sizes="(max-width: 720px) 100vw, (max-width: 1280px) 50vw, 25vw, 1920px"
              />
            </div>

            <div className={styles.themeImage}>
              <Image
                className={styles.image}
                quality={10}
                priority
                src="/images/champagne-3.png"
                alt="My Image"
                layout="fill"
                sizes="(max-width: 720px) 100vw, (max-width: 1280px) 50vw, 25vw, 1920px"
              />
            </div>
          </section>

          <section className={styles.genderAttire}>
            <div className={styles.side}>
              <header>LADIES</header>
              <Divider orientation="horizontal" />
              <p className={styles.attireName}>Long Gown / Dress</p>
            </div>
            <Divider orientation="vertical" height={80} />
            <div className={styles.side}>
              <header>GENTLEMEN</header>
              <Divider orientation="horizontal" />
              <p className={styles.attireName}>Long-sleeve Barong Tagalog & Black Slacks</p>
            </div>
          </section>

          <section className={styles.restrictionAttire}>
            <div className={styles.colors}>
              <div className={styles.white} />
              <div className={styles.black} />
              <div className={styles.navy} />
            </div>

            <LabelSection>
              Please reserve the color <b>White</b>, <b>Black</b> and{" "}
              <b>Navy</b> for the groom, bride, and the entourage.
            </LabelSection>
          </section>
        </UseInViewAnimate>
      </div>
    </main>
  );
};

export default Attire;
