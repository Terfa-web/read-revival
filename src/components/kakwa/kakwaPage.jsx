import styles from "./kakwaPage.module.css";
import Image from "next/image";
export const metadata = {
  title: "Kakwa Page",
  description: "Trustee: Read Revival initiative.",
};

const Kakwapage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mediaContainer}>
        <div className={styles.imgContainer}>
          <Image
            src="/kakwa.webp"
            alt=""
            className={styles.img}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h3 className={styles.imgText}>
          Trustee: Mrs. Beatrice Ngunyi Kakwagh
        </h3>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Background</h1>
        <p className={styles.text}>
          Mrs Kakwagh Ngunyi Beatrice started her working career with the Benue
          State government in 1980 after the mandatory National Youth Service
          Corps scheme. She taught in many Secondary schools in the State and
          was later moved to the headquarters of the State Teaching Service
          Board. She later moved to the headquarters of the Ministry of
          Education where She served as an Inspector of Primary and Secondary
          Schools. She served in many other positions before She was finally
          appointed as the Director in charge of Secondary schools in 2012.The
          Director of Secondary Schools in Benue State oversees and coordinates
          teaching and learning activities In Primary and Secondary Schools in
          conjunction with the Area Education Officers. Observed challenges of
          Schools, teachers and Students during inspection are reported to the
          government including suggestions for improvement and further
          appropriate actions. After working for 35 years Mrs Kakwagh disengaged
          from Service in 2015.
        </p>
      </div>
    </div>
  );
};

export default Kakwapage;
