"use client"
import React, { useEffect, useRef, useState } from "react";
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
  const detailsRef = useRef<HTMLDivElement>(null);
  const [detailPageWidth, setDetailPageWidth] = useState<number>(0);

  useEffect(() => {
    const updateWidth = () => {
      if (detailsRef.current) {
        const width = detailsRef.current.getBoundingClientRect().width;
        setDetailPageWidth(width);
      }
    };

    // Initial width update
    updateWidth();

    // Update width when the window is resized
    window.addEventListener("resize", updateWidth);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const dividerSize = detailPageWidth >= 1280 ? 278 : 211;

  return (
    <main className={styles.main} ref={detailsRef}>
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

          <Divider orientation="vertical" height={dividerSize} />

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
        ---------------------------------Google
        maps---------------------------------
        <TitleHeader title="Accomodations" />
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
        </section>
      </div>
    </main>
  );
};

export default Details;
