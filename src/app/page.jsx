import styles from "./home.module.css";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Yes, I Can read.</h1>
        <p className={styles.quote}>
          It is my desire to see thousands of children become proficient at
          reading.
        </p>
        <span className={styles.author}>--Mr Terhemba Nomhwange(Founder)</span>
        <div className={styles.buttons}>
          <button className={styles.button}>Read More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.mediaLinks}>
          <FaFacebook size={30} style={{ marginRight: "10px" }} />
          <FaTwitter size={30} style={{ marginRight: "10px" }} />
          <FaWhatsapp size={30} style={{ marginRight: "10px" }} />
          <FaInstagram size={30} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/students.jpg"
          fill
          alt="children with books"
          className={styles.heroImg}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default Home;
