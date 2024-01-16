import React from "react";
import { Attire, Details, Faqs } from "./components";
import styles from "./page.module.scss";

export default function Home() {
  const [number, setNumber] = React.useState<number>(0);

  return (
    <main className={styles.main}>
      {/* <input
        type="number"
        onChange={(e) => setNumber(e.target.valueAsNumber)}
      />
      <div>{Math.round(number * 1.2 * 10)/10 + "px"}</div>
      <div>{Math.round(number * 1.4 * 10)/10 + "px"}</div>
      <div>{Math.round(number * 1.6 * 10)/10 + "px"}</div> */}
      <Details />
      <Attire />
      <Faqs />
    </main>
  );
}
