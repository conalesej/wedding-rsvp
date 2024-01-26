"use client";
import React, { useEffect, useId, useRef } from "react";
import styles from "./Details.module.scss";

import {
  CalendarIcon,
  CellphoneIcon,
  CloudIcon,
  Divider,
  LabelSection,
  LocationIcon,
  TitleHeader,
} from "@/app/common";

import { useActiveSectionContext } from "@/app/context/sectionContext";
import { useInView } from "framer-motion";

interface IEvent {
  iconInfo: {
    icon: "CalendarToday" | "CloudQueue";
    label: string;
    color: string;
    size: number;
  };
  labelPairs: { key: string; value: string }[];
}
const Event: React.FC<IEvent> = ({ iconInfo, labelPairs }) => {
  const { icon, label, color, size } = iconInfo;
  const renderPairs = labelPairs.map(({ key, value }) => (
    <div key={key} className={styles.eventPairs}>
      <b>{key + ":"}</b> {value}
    </div>
  ));
  return (
    <main className={styles.eventMain}>
      {icon === "CalendarToday" ? <CalendarIcon /> : <CloudIcon />}
      <div className={styles.eventLabel}>{label}</div>
      {renderPairs}
    </main>
  );
};

const eventDetails = [
  { key: "Date", value: "April 13, 2024" },
  { key: "Time", value: "3:30PM" },
  { key: "Location", value: "Santuario de San Vicente de Paul - Tandang Sora" },
  {
    key: "Address",
    value: "221 Tandang Sora Ave, Tandang Sora, Quezon City, 1116 Metro Manila",
  },
];

const weatherDetails = [
  { key: "Temperature", value: "36°C / 96.8°F" },
  { key: "Rain", value: "46%" },
  { key: "Humidity", value: "30%" },
  { key: "Wind", value: "3km/h" },
];

interface IAccomodation {
  name: string;
  address: string;
  cellphone: string;
}
const Accomodation: React.FC<IAccomodation> = ({
  name,
  address,
  cellphone,
}) => {
  return (
    <div className={styles.accomodationMain}>
      <span className={styles.accomodationName}>{name}</span>
      <span className={styles.accomodationLabel}>
        <LocationIcon /> {address}
      </span>
      <span className={styles.accomodationLabel}>
        <CellphoneIcon /> {cellphone}
      </span>
    </div>
  );
};

const Details = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    root: undefined,
    margin: "-40%",
  });

  const { activeSection, setActiveSection } = useActiveSectionContext();
  useEffect(() => {
    if (
      ref.current &&
      activeSection.section === "Details" &&
      activeSection.willScroll
    ) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeSection]);
  useEffect(() => {
    if (isInView) {
      setActiveSection({ willScroll: false, section: "Details" });
    }
  }, [isInView]);
  return (
    <main className={styles.main} ref={ref}>
      <div className={styles.wrapper}>
        <TitleHeader title="When & Where" />
        <LabelSection>
          The ceremony and reception will be held on the same location. While it
          is indoor, don't forget to bring your umbrellas!
        </LabelSection>
        <section className={styles.eventDetails}>
          <Event
            iconInfo={{
              icon: "CalendarToday",
              color: "#CCB017",
              label: "Event Details",
              size: 52,
            }}
            labelPairs={eventDetails}
          />

          <Divider orientation="vertical" />

          <Event
            iconInfo={{
              icon: "CloudQueue",
              color: "#CCB017",
              label: "Predicted Weather",
              size: 52,
            }}
            labelPairs={weatherDetails}
          />
        </section>
        <TitleHeader title="Map & Location" />
        <section className={styles.mapContainer}>
          <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=221%20Tandang%20Sora%20Ave,%20Tandang%20Sora,%20Quezon%20City,%201116%20Metro%20Manila+(Our%20Wedding%20Venue)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            <a href="https://www.maps.ie/population/">
              Population Estimator map
            </a>
          </iframe>
        </section>

        {/* <TitleHeader title="Accomodations" />
        <LabelSection>
          If you're coming from far, you might want to consider booking in a
          place to stay! Here are some of them!
        </LabelSection>
        <section className={styles.accomodations}>
          <Accomodation
            name="Go Hotels - N. Edsa"
            address="1107 Epifanio de los Santos Ave, Project 7, Quezon City, 1105 Metro Manila"
            cellphone="+ 63 917 620 1624"
          />
          <Accomodation
            name="VS Hotel Quezon City"
            address="799 Epifanio de los Santos Ave, South Triangle, Quezon City, 1103 Metro Manila"
            cellphone="+ 63 919 056 7788"
          />
        </section> */}
      </div>
    </main>
  );
};

export default Details;
