import React from "react";
import styles from "./events.module.css";
import EventsCard from "@/components/eventsCard/eventsCard";

export const metadata = {
  title: "Events Page",
  description: "Events so far.",
};

const EventsPage = () => {
  return (
    <div className={styles.container}>
      <EventsCard />
    </div>
  );
};

export default EventsPage;
