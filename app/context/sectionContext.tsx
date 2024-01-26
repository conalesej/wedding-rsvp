"use client";

import React, { useState, createContext, useContext } from "react";

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

export type SectionName =
  | "Landing"
  | "Details"
  | "Attire"
  | "FAQs"
  | "RSVP"
  | "Contacts";

interface IActiveSection {
  willScroll: boolean;
  section: SectionName;
}

type ActiveSectionContextType = {
  activeSection: IActiveSection;
  setActiveSection: React.Dispatch<React.SetStateAction<IActiveSection>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<IActiveSection>({
    willScroll: false,
    section: "Landing",
  });

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
