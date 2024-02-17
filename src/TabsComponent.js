import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CardContainer from "./CardContainer";
import "./TabsComponent.css";

export default function TabsComponent() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabSelect = (index) => {
    setSelectedTabIndex(index);
  };

  return (
    <div className="tabs-container">
      <Tabs selectedIndex={selectedTabIndex} onSelect={handleTabSelect}>
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

        {Array.from({ length: 8 }).map((_, index) => (
          <TabPanel key={index}>
            <CardContainer domainSet={index + 1} />
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
}
