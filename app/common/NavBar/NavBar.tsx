"use client";
import React from "react";
import styles from "./NavBar.module.scss";
import {
  SectionName,
  useActiveSectionContext,
} from "@/app/context/sectionContext";

const NavBar: React.FC = () => {
  const NavOptions: SectionName[] = [
    "Home",
    "Details",
    "Attire",
    "FAQs",
    "RSVP",
    "Contacts",
  ];

  const { activeSection, setActiveSection } = useActiveSectionContext();

  const isOnLanding = activeSection === "Home";

  return (
    <section
      className={[
        styles.navBar,
        activeSection === "Home" ? styles.navBarDark : styles.navBarLight,
      ].join(" ")}
    >
      {NavOptions.map((option, index) => {
        let className = [styles.nav];
        if (activeSection === option) {
          className.push(
            option === "Home" ? styles.darkSelected : styles.lightSelected
          );
        }
        if (isOnLanding) {
          className.push(styles.darkBase);
        }else{
          className.push(styles.lightBase);

        }

        return (
          <div
            key={option + index}
            className={className.join(" ")}
            onClick={() => setActiveSection(option)}
          >
            {option}
          </div>
        );
      })}
    </section>
  );
};

export default NavBar;
