import styles from "./mimiPage.module.css";
import Image from "next/image";
export const metadata = {
  title: "Mimi Page",
  description: "Secretary: Read Revival initiative.",
};

const Mimipage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mediaContainer}>
        <div className={styles.imgContainer}>
          <Image
            src="/mimi.jpg"
            alt=""
            className={styles.img}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h3 className={styles.imgText}>Secretary: Barr. Mimihemba Nwokeh</h3>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Background</h1>
        <p className={styles.text}>
          Qualifications: LL.B (Hons), Benue State University, Makurdi | B.L.,
          Nigerian Law School |Professional Associations: Nigerian Bar
          Association| Institute of Chartered Mediators and Conciliators (ICMC)
          (Associate), Institute of Chartered Secretaries and Administrators of
          Nigeria (ICSAN) (Grad. ICSAN). Mimhemba Nwokeh is the Head Legal /
          Internal Control. She was called to the Nigerian Bar in the year 2005.
          Mimi is a Chartered Secretary and Administrator and a Chartered
          Mediator and Conciliator. Her Legal career has spanned over fifteen
          (15) years of which she has gained experience in alternative dispute
          resolution. She also has experience in the areas of Company Law;
          Company Secretarial services, Litigation Practice, and Real Estate.
          She has also served as Company Secretary for recognized companies in
          Nigeria
        </p>
      </div>
    </div>
  );
};

export default Mimipage;
