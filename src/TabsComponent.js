import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CardContainer from "./CardContainer";
import "./TabsComponent.css";

export default function TabsComponent() {

    return (
      <Tabs>
       <TabList className="tab-list">
       <Tab className="tab"><span className="link">Domains</span></Tab>
        <Tab className="tab"><span className="link">Web Hosting</span></Tab>
        <Tab className="tab"><span className="link">Dedicated Servers</span></Tab>
        <Tab className="tab"><span className="link">Virtual Cloud Servers</span></Tab>
        <Tab className="tab"><span className="link">WordPress Hosting</span></Tab>
        <Tab className="tab"><span className="link">Email Hosting</span></Tab>
        <Tab className="tab"><span className="link">VPS Hosting</span></Tab>
        <Tab className="tab"><span className="link">Servers</span></Tab>
        <Tab className="tab"><span className="link">Free Hosting</span></Tab>
      </TabList>
  
      <TabPanel>
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
      <TabPanel>
        <CardContainer domainSet={9} />
      </TabPanel>
    </Tabs>
  );
}
