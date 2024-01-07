import styles from "./orsooPage.module.css";
import Image from "next/image";
export const metadata = {
  title: "Orsoo Page",
  description: "Vice Chairman: Read Revival initiative.",
};

const Orsoopage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mediaContainer}>
        <div className={styles.imgContainer}>
          <Image
            src="/orsoo.webp"
            alt=""
            className={styles.img}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h3 className={styles.imgText}>Vice Chairman: Dr. Sooter Nomhwange</h3>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Background</h1>
        <p className={styles.text}>
          B.Sc. Economics, MSc. International Business, PhD Management. Sooter
          graduated from the University of Hull in 2017 with a Doctorate in
          Management. He has worked as a Teaching Associate for the University
          of Cambridge and Anglia Ruskin University, both Universities are based
          in Cambridge, United Kingdom. Sooter is the UK representative for the
          Read Revival (RR) Initiative.
        </p>
      </div>
    </div>
  );
};

export default Orsoopage;
