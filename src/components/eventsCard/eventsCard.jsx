import Image from "next/image";
import styles from "./eventsCard.module.css";

const EventsCard = () => {
  const trustees = [
    {
      imagePath: "/images/boywithbook.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    {
      imagePath: "/images/one.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    {
      imagePath: "/images/two.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    {
      imagePath: "/images/three.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    {
      imagePath: "/images/four.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    {
      imagePath: "/images/five.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    {
      imagePath: "/images/six.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    {
      imagePath: "/images/seven.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    {
      imagePath: "/images/eight.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    {
      imagePath: "/images/nine.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    {
      imagePath: "/images/ten.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    {
      imagePath: "/images/eleven.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    {
      imagePath: "/images/fiftheen.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    {
      imagePath: "/images/thirteen.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    {
      imagePath: "/images/fourteen.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    {
      imagePath: "/images/sixteen.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    {
      imagePath: "/images/seventeen.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    {
      imagePath: "/images/eighteen.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    {
      imagePath: "/images/nineteen.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    {
      imagePath: "/images/twenty.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    {
      imagePath: "/images/twentyone.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    {
      imagePath: "/images/twentytwo.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    {
      imagePath: "/images/twentythree.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    {
      imagePath: "/images/twentyfour.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    // {
    //   imagePath: "/images/twentyfive.jpg",
    //   // title: "Vice Chairman: Dr. Sooter Nomhwange",
    //   // slug: "orsoo",
    // },
    // {
    //   imagePath: "/images/twentysix.jpg",
    //   // title: "Vice Chairman: Dr. Sooter Nomhwange",
    //   // slug: "orsoo",
    // },
    // {
    //   imagePath: "/images/twentyseven.jpg",
    //   // title: "Vice Chairman: Dr. Sooter Nomhwange",
    //   // slug: "orsoo",
    // },
    // {
    //   imagePath: "/images/twentyeight.jpg",
    //   // title: "Vice Chairman: Dr. Sooter Nomhwange",
    //   // slug: "orsoo",
    // },
    // {
    //   imagePath: "/images/twentynine.jpg",
    //   // title: "Vice Chairman: Dr. Sooter Nomhwange",
    //   // slug: "orsoo",
    // },
    {
      imagePath: "/images/thirty.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    {
      imagePath: "/images/thirtyone.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    {
      imagePath: "/images/thirtytwo.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    {
      imagePath: "/images/thirtythree.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    // {
    //   imagePath: "/images/thirtyfour.jpg",
    //   // title: "Vice Chairman: Dr. Sooter Nomhwange",
    //   // slug: "orsoo",
    // },
    {
      imagePath: "/images/thirtyfive.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    {
      imagePath: "/images/thirtysix.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    {
      imagePath: "/images/thirtyseven.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    {
      imagePath: "/images/thirtyeight.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    {
      imagePath: "/images/thirtynine.jpg",
      // title: "Vice Chairman: Dr. Sooter Nomhwange",
      // slug: "orsoo",
    },
    // {
    //   imagePath: "/images/fourty.jpg",
    //   // title: "Vice Chairman: Dr. Sooter Nomhwange",
    //   // slug: "orsoo",
    // },
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
          {/* <div className={styles.textContainer}>
            <h3 className={styles.title}>{trustee.title}</h3>
            <Link className={styles.link} href={`/trustees/${trustee.slug}`}>
              READ MORE..
            </Link>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default EventsCard;
