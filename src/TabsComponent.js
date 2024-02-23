import React, { useState, useEffect, useRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import "react-tabs/style/react-tabs.css";
import CardContainer from "./CardContainer";
import "./TabsComponent.css";

export default function TabsComponent() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

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
      if (menuRef.current && !menuRef.current.contains(event.target)) {
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

  return (
    <div className={`tabs-container ${isMenuOpen ? "menu-visible" : ""}`} ref={menuRef}>
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
          <hr className="tab-line" />
          <Tab className="tab"><span className="link">Web Hosting</span></Tab>
          <hr className="tab-line" />
          <Tab className="tab"><span className="link">Dedicated Servers</span></Tab>
          <hr className="tab-line" />
          <Tab className="tab"><span className="link">Virtual Cloud Servers</span></Tab>
          <hr className="tab-line" />
          <Tab className="tab"><span className="link">WordPress Hosting</span></Tab>
          <hr className="tab-line" />
          <Tab className="tab"><span className="link">Email Hosting</span></Tab>
          <hr className="tab-line" />
          <Tab className="tab"><span className="link">VPS Hosting Servers</span>
          </Tab><hr className="tab-line" />
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