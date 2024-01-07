import styles from "./doosuurPage.module.css";
import Image from "next/image";
export const metadata = {
  title: "Doosuur Page",
  description: "Trustee: Read Revival initiative.",
};

const Doosuurpage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mediaContainer}>
        <div className={styles.imgContainer}>
          <Image
            src="/doosuur.webp"
            alt=""
            className={styles.img}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h3 className={styles.imgText}>Trustee: Mrs. Doosuur Nomhwange</h3>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Background</h1>
        <p className={styles.text}>
          Mrs Doosuur Nomhwange is a retired School Principal who started her
          teaching career in 1978. She taught in various Schools and later
          attained the rank of Principal . Basic duties of a Principal here
          include planning and budgeting ,physical development of the School,
          routine maintenance of the School buildings and equipment, maintenance
          of school finances in line with government financial regulations.
          Supervision of teaching and learning in the School is one of the
          duties of the Principal as well as ensuring good conduct by staff and
          students .Mrs Nomhwange served as Principal until 2013 when She
          retired from service.
        </p>
      </div>
    </div>
  );
};

export default Doosuurpage;
