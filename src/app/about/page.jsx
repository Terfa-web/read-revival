import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Mission Statement</h1>
          <p className={styles.text}>
            To source for and make available to students a variety of
            supplementary readers and other books, and to corroborate with
            schools towards encouraging and reviving the culture of reading for
            information, knowledge, and enjoyment.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.imgContainerImage}
            src="/handingbooktostudents.jpg"
            alt=""
            fill
          />
        </div>
      </div>
      <div className={styles.secondContainer}>
        <h1 className={styles.title}>The RR Initiative</h1>
        <p className={styles.text}>
          The main aim of this INITIATIVE is to stimulate students to engage in
          reading books and developing their reading culture. To achieve this
          goal, the INITIATIVE will embark on procuring books and making them
          available to participating schools and ensuring that the books are
          fully utilized. The INITIATIVE will partner with the schools to engage
          the students in activities that will arouse their interest in reading
          books. These activities may include, reading competition among classes
          in the school and among participating schools. Schools that do not
          have Libraries but secure classrooms may be allotted books as Class
          Libraries to be rotated among the classes. Participating schools will
          be encouraged to allocate at least one period of English Language for
          reading and accompanying exercises.
        </p>
        <div className={styles.img2Container}>
          <Image
            className={styles.imgContainerImage}
            src="/group1.jpg"
            alt="group pic"
            fill
          />
        </div>
        <h1 className={styles.title2}>
          {" "}
          Criteria for a school to receive books
        </h1>
        <ul className={styles.text2}>
          <li>The School must have a functional library</li>
          <li>
            There must be a qualified teacher of English Language to handle the
            program
          </li>
          <li>The school must be government approved</li>
          <li>Willingness by the school heads to participate in the program</li>
        </ul>
        <h1 className={styles.title3}>How do we measure our success?</h1>
        <p className={styles.text3}>
          Each student participating in the initiative will be encouraged to
          always fill out a simple questionnaire in their “Yes, I can Read
          Booklet”. These questions should be answered after each book is read;
        </p>
      </div>
      <ol className={styles.text3}>
        <li>What is the title of the book?</li>
        <li>What is the name of the Author?</li>
        <li>What is the story about?</li>
        <li>What is the name of the main character?</li>
        <li>Which character do you like most? Why?</li>
        <li>Which characters do you not like? Why?</li>
        <li>How does the story end? On a sad note? On a happy note?</li>
        <li>Ten (any number) new words I have learned are…</li>
        <li>What is the moral message the book is giving to us?</li>
        <li>In which environment is the story set?</li>
      </ol>
      <h1 className={styles.title4}>
        How do we reward schools performing well?
      </h1>
      <ol className={styles.text4}>
        <li>
          Awarding books/cash incentives to participating schools and teachers
        </li>
        <li>
          Instituting best student in Reading prizes in various classes in the
          schools
        </li>
        <li>Donating additional books to schools doing well</li>
      </ol>
    </div>
  );
};

export default AboutPage;
