"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styles from "./home.module.css";

const Home = () => {
  const router = useRouter();

  return (
    <div className={styles.genContainer}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Yes, I Can read.</h1>
          <p className={styles.quote}>
            It is my desire to see thousands of children become proficient at
            reading.
          </p>
          <span className={styles.author}>
            --Mr Terhemba Nomhwange(Founder)
          </span>
          <div className={styles.buttons}>
            <button
              onClick={() => router.push("/founder")}
              className={styles.button}
            >
              Read More
            </button>

            <button
              onClick={() => router.push("/contact")}
              className={styles.button}
              as
              Link
            >
              Contact
            </button>
          </div>
          <div className={styles.mediaLinks}>
            <a
              href={"https://www.facebook.com/profile.php?id=61555163053778"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={30} style={{ marginRight: "10px" }} />
            </a>

            <FaTwitter size={30} style={{ marginRight: "10px" }} />
            {/* <FaWhatsapp size={30} style={{ marginRight: "10px" }} /> */}
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
      <div className={styles.videoContainer}>
        <video className={styles.video} controls>
          <source src="/ReadRevivalVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.videoContainer}>
        <video className={styles.video} controls>
          <source src="/testimonial1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Home;
