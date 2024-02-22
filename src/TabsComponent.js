import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import "react-tabs/style/react-tabs.css";
import CardContainer from "./CardContainer";
import "./TabsComponent.css";

export default function TabsComponent() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTabSelect = (index) => {
    setSelectedTabIndex(index);
    setIsMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.tabs-container')) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const savedTabIndex = localStorage.getItem("selectedTabIndex");
    const initialTabIndex = savedTabIndex !== null ? parseInt(savedTabIndex, 10) : 0;
  
    setSelectedTabIndex(initialTabIndex);
  
    if (!initialTabIndex) {
      handleTabSelect(0);
    }
  }, []);

  return (
    <div className={`tabs-container ${isMenuOpen ? "menu-visible" : ""}`}>
      <button className="menu-toggle" onClick={handleMenuToggle}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
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