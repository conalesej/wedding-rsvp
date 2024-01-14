import React from "react";
import styles from "./Attire.module.scss";
import { Divider, LabelSection, TitleHeader } from "@/app/common";
const Attire = () => {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <TitleHeader title="Attire" />

        <LabelSection>
          <span>Strictly Formal Attire</span>
          <br />
          Preferably in a lighter shade of <b>Champagne</b> or <b>Beige</b>
        </LabelSection>

        <section className={styles.themeContainer}>
          <div className={styles.themeImage}></div>

          <div className={styles.themeImage}></div>

          <div className={styles.themeImage}></div>
        </section>

        <section className={styles.genderAttire}>
          <div className={styles.side}>
            <header>LADIES</header>
            <Divider orientation="horizontal" />
            <p>Long Gown / Dress</p>
          </div>
          <Divider orientation="vertical" height={60} />
          <div className={styles.side}>
            <header>GENTLEMEN</header>
            <Divider orientation="horizontal" />
            <p>Barong Tagalog & Black Slacks</p>
          </div>
        </section>

        <section className={styles.restrictionAttire}>
          <div className={styles.colors}>
            <div className={styles.white} />
            <div className={styles.black} />
            <div className={styles.navy} />
          </div>

          <LabelSection>
            Please reserve the color <b>White</b>, <b>Black</b> and <b>Navy</b>{" "}
            for the groom, bride, and the entourage.
          </LabelSection>
        </section>
      </div>
    </main>
  );
};

export default Attire;
