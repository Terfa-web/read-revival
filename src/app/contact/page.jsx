import React from "react";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact page",
  description: "Get in touch with us.",
};

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formTextContainer}>
        <h1 className={styles.contactTitle}>Get in touch.</h1>
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea name="" id="" cols="80" placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
