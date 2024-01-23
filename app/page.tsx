import React from "react";
import { Attire, ContactUs, Details, Faqs, Landing, Rsvp } from "./components";
import styles from "./page.module.scss";
import { NavBar } from "./common";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <Landing />
      <Details />
      <Attire />
      <Faqs />
      <Rsvp />
      <ContactUs />
    </main>
  );
}
