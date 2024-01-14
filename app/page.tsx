import { Attire, Faqs } from "./components";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Attire />
      <Faqs />
    </main>
  );
}
