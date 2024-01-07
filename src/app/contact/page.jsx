"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.css";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t86if4o",
        "template_asnpyrs",
        form.current,
        "I9vRKUSgiVOnyfXZG"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.location.reload();
          window.alert("Message sent successfully!");
          // Optionally, clear the form fields after sending
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={styles.parentContainer}>
      <h1>Contact Us</h1>
      <form className={styles.container} ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="to_name" />
        <label>Email</label>
        <input type="email" name="from_name" />
        <label>Message</label>
        <textarea cols={30} name="message" />
        <button className={styles.sendButton}>Send</button>
      </form>
    </div>
  );
};

export default ContactUs;
