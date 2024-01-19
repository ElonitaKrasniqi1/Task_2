import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CardContainer from "./CardContainer";
import "./TabsComponent.css";

export default function TabsComponent() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  useEffect(() => {
    const savedTabIndex = localStorage.getItem("selectedTabIndex");
    if (savedTabIndex !== null) {
      setSelectedTabIndex(parseInt(savedTabIndex, 10));
    }
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    if (!menuVisible) {
      setSelectedTabIndex(0);
    }
  };

  const handleTabSelect = (index) => {
    setSelectedTabIndex(index);
    localStorage.setItem("selectedTabIndex", index.toString());
  };

  return (
    <div className={`tabs-container ${menuVisible ? "menu-visible" : ""}`}>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <Tabs
        className={`tab-container ${menuVisible ? "menu-visible" : "menu-hidden"}`}
        selectedIndex={selectedTabIndex}
        onSelect={handleTabSelect}
      >
        <TabList className="tab-list">
       <Tab className="tab"><span className="link">Domains</span></Tab>
        <Tab className="tab"><span className="link">Web Hosting</span></Tab>
        <Tab className="tab"><span className="link">Dedicated Servers</span></Tab>
        <Tab className="tab"><span className="link">Virtual Cloud Servers</span></Tab>
        <Tab className="tab"><span className="link">WordPress Hosting</span></Tab>
        <Tab className="tab"><span className="link">Email Hosting</span></Tab>
        <Tab className="tab"><span className="link">VPS Hosting Servers</span></Tab>
        <Tab className="tab"><span className="link">Free Hosting</span></Tab>
      </TabList>
  
      <TabPanel className={`menu__box ${menuVisible ? "open" : ""}`}>
        <CardContainer domainSet={1} />
      </TabPanel>
      <TabPanel>
        <CardContainer domainSet={2} />
      </TabPanel>
      <TabPanel>
        <CardContainer domainSet={3} />
      </TabPanel>
      <TabPanel>
        <CardContainer domainSet={4} />
      </TabPanel>
      <TabPanel>
        <CardContainer domainSet={5} />
      </TabPanel>
      <TabPanel>
        <CardContainer domainSet={6} />
      </TabPanel>
      <TabPanel>
        <CardContainer domainSet={7} />
      </TabPanel>
      <TabPanel>
        <CardContainer domainSet={8} />
      </TabPanel>
    </Tabs>
    </div>
  );
}
