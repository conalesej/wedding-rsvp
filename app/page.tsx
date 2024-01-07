import Faqs from "./components/FAQS/Faqs";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Faqs />
    </main>
  );
}
