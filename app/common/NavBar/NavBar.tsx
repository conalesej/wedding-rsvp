import React from "react";
import styles from "./NavBar.module.scss";

const NavBar: React.FC = () => {
  const NavOptions = ["Home", "Details", "Attire", "FAQs", "RSVP", "Contacts"];
  const isOnLanding = true;
  const selectedOption = "Details";
  return (
    <section className={styles.navBar}>
      {NavOptions.map((option, index) => {
        let className = [styles.nav];
        if (isOnLanding) {
          className.push(styles.whiteBase);
          if (selectedOption === option) {
            className.push(styles.whiteSelected);
          }
        }

        return (
          <div key={option + index} className={className.join(" ")}>
            {option}
          </div>
        );
      })}
    </section>
  );
};

export default NavBar;
