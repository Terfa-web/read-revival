import React from "react";
import styles from "./founder.module.css";
import Image from "next/image";

export const metadata = {
  title: "Founder Page",
  description: "Founder of Read Riveval initiative.",
};
const FounderPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mediaContainer}>
        <div className={styles.imgContainer}>
          <Image
            src="/founder.jpg"
            alt=""
            className={styles.img}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h3 className={styles.imgText}>Founder: Mr. Terhemba Nomhwange</h3>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Background</h1>
        <p className={styles.text}>
          My working career began in 1972 after graduating from St.Augustine’s
          Teachers College Lafia. l taught in the Primary school for 18 months
          before proceeding for further studies. After serving in the NYSC
          program between 1976 and 1977, I became actively engaged in teaching
          English Language and Literature in various secondary schools across
          BENUE STATE. Between1981and1999 I served as Principal of some
          secondary schools in BENUE STATE. At the end of 1999 I moved from
          secondary schools to the Inspectorate department of the ministry of
          education where I first served as the Area Education Officer for
          VANDEIKYA LOCAL GOVT. My job here was to supervise teaching and
          learning activities in Primary and secondary schools in the local
          government. I served in two other local governments before finally
          moving to the Headquarters of the ministry of education Inspectorate
          department in charge of Zone C which comprises nine local governments.
          In 2010 I was promoted to the Rank of Director Inspectorate services.
          As a Director, my job involved coordinating the activities of the Area
          Education Offices in the 23 local governments in BENUE STATE;
          formulating and developing policies for the department; reporting to
          the government observed progress and challenges encountered by school
          administrators and teachers for necessary attention. I finally
          disengaged from service in August 2012 after completing the mandatory
          35 years of service.
        </p>
      </div>
    </div>
  );
};

export default FounderPage;
