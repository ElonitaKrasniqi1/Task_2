import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CardContainer from "./CardContainer";
import "./TabsComponent.css";
import "./TabsComponent.scss";

export default function TabsComponent() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const handleTabSelect = (index) => {
    setSelectedTabIndex(index);
    setIsMenuOpen(false);
    setHamburgerOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setHamburgerOpen(!isMenuOpen);
  };

  useEffect(() => {
    const savedTabIndex = localStorage.getItem("selectedTabIndex");
    const initialTabIndex = savedTabIndex !== null ? parseInt(savedTabIndex, 10) : 0;

    setSelectedTabIndex(initialTabIndex);
    setIsMenuOpen(false);

    if (!initialTabIndex) {
      handleTabSelect(0);
    }
  }, []);

  return (
    <div className={`tabs-container ${isMenuOpen ? "menu-visible" : ""}`}>
      <button className="menu-toggle" onClick={toggleMenu}>
        {hamburgerOpen ? "☰ Close" : "☰ Open"}
      </button>

      <Tabs
        className={`tabs ${isMenuOpen ? "menu-visible" : ""}`}
        selectedIndex={selectedTabIndex}
        onSelect={handleTabSelect}
      >
        <TabList className={`tab-list ${isMenuOpen ? "menu-visible" : ""}`}>
          <Tab className="tab"><span className="link">Domains</span></Tab>
          <Tab className="tab"><span className="link">Web Hosting</span></Tab>
          <Tab className="tab"><span className="link">Dedicated Servers</span></Tab>
          <Tab className="tab"><span className="link">Virtual Cloud Servers</span></Tab>
          <Tab className="tab"><span className="link">WordPress Hosting</span></Tab>
          <Tab className="tab"><span className="link">Email Hosting</span></Tab>
          <Tab className="tab"><span className="link">VPS Hosting Servers</span></Tab>
          <Tab className="tab"><span className="link">Free Hosting</span></Tab>
        </TabList>

        {Array.from({ length: 8 }).map((_, index) => (
          <TabPanel key={index}>
            <CardContainer domainSet={index + 1} />
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}
