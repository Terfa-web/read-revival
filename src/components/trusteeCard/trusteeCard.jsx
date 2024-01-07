import Link from "next/link";
import React from "react";
import styles from "./trusteeCard.module.css";
import Image from "next/image";

const TrusteeCard = () => {
  const trustees = [
    {
      imagePath: "/orsoo.webp",
      title: "Vice Chairman: Dr. Sooter Nomhwange",
      slug: "orsoo",
    },
    {
      imagePath: "/mimi.jpg",
      title: "Secretary: Barr. Mimihemba Nwokeh",
      slug: "mimi",
    },
    {
      imagePath: "/doosuur.webp",
      title: "Trustee: Mrs. Doosuur Nomhwange",
      slug: "doosuur",
    },
    {
      imagePath: "/kakwa.webp",
      title: "Trustee: Mrs. Beatrice Ngunyi Kakwagh",
      slug: "kakwa",
    },
  ];

  return (
    <div className={styles.container}>
      {trustees.map((trustee, index) => (
        <div key={index} className={styles.trusteeContainer}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              src={trustee.imagePath}
              alt={trustee.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className={styles.textContainer}>
            <h3 className={styles.title}>{trustee.title}</h3>
            <Link className={styles.link} href={`/trustees/${trustee.slug}`}>
              READ MORE..
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrusteeCard;
