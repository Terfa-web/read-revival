import React from "react";
import styles from "./trustees.module.css";
import TrusteeCard from "@/components/trusteeCard/trusteeCard";

export const metadata = {
  title: "Trustees Page",
  description: "Meet the team of trustees.",
};

const TrusteesPage = () => {
  return (
    <div className={styles.container}>
      <TrusteeCard />
    </div>
  );
};

export default TrusteesPage;
