"use client";
import React from "react";
import styles from "./NavBar.module.scss";
import {
  SectionName,
  useActiveSectionContext,
} from "@/app/hooks/sectionContext";
import UseInViewAnimate from "@/app/hooks/useInViewHook";
import { motion } from "framer-motion";

const NavBar: React.FC = () => {
  const NavOptions: SectionName[] = [
    "Landing",
    "Details",
    "Attire",
    "FAQs",
    "RSVP",
    "Contacts",
  ];

  const { activeSection, setActiveSection } = useActiveSectionContext();

  const isOnLanding = activeSection.section === "Landing";

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={[
        styles.navBar,
        isOnLanding ? styles.navBarDark : styles.navBarLight,
      ].join(" ")}
    >
      {NavOptions.map((option, index) => {
        let className = [styles.nav];
        if (activeSection.section === option) {
          className.push(
            option === "Landing" ? styles.darkSelected : styles.lightSelected
          );
        }
        if (isOnLanding) {
          className.push(styles.darkBase);
        } else {
          className.push(styles.lightBase);
        }

        return (
          <div
            key={option + index}
            className={className.join(" ")}
            onClick={() => {
              if (activeSection.section !== option)
                setActiveSection({ willScroll: true, section: option });
            }}
          >
            {option === "Landing" ? "Home" : option}
          </div>
        );
      })}
    </motion.section>
  );
};

export default NavBar;
