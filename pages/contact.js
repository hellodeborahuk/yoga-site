import styles from "../styles/Contact.module.css";
import React, { useState } from "react";
import { useRouter } from "next/router";

const Contact = () => {
  const [submitterName, setSubmitterName] = useState("")
  const router = useRouter();
  const confirmationScreenVisible =
    router.query?.success && router.query.success === "true";
  const formVisible = !confirmationScreenVisible; 

  const ConfirmationMessage = (
    <React.Fragment>
      <p>
        Thank you for submitting this form. Someone should get back to you
        within 24-48 hours.
      </p>

      <button
        onClick={() => router.replace("/contact", undefined, { shallow: true })}
      >
        {" "}
        Submit Another Response{" "}
      </button>
    </React.Fragment>
  );

  const ContactForm = (
    <form
      method="POST"
      name="contact-form"
      action="contact/?success=true"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className={styles.form}
    >
      <input
        type="hidden"
        name="subject"
        value={`You've got mail from ${submitterName}`}
      />
      <input type="hidden" name="form-name" value="contact-form" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      <label htmlFor="name">Name *</label>
      <input
        id="name"
        name="name"
        required
        type="text"
        onChange={(e) => setSubmitterName(e.target.value)}
        className={styles.input}
      />
      <label htmlFor="email">E-mail Address *</label>
      <input
        id="email"
        type="email"
        name="email"
        required
        className={styles.input}
      />
      <label htmlFor="message">Message *</label>
      <textarea
        id="message"
        name="message"
        required
        className={styles.input}
      ></textarea>
      <button type="submit" className={styles.btn}>
        Submit
      </button>
    </form>
  );

  return (
    <div className={styles.container}>
      <h1>Get in touch</h1>
      <p>
        If you have any questions please complete the form below or reach out to
        me on social media.
      </p>
      {formVisible ? ContactForm : ConfirmationMessage}
      <p>
        Follow me on{" "}
        <a href="https://instagram.com/debbiedannyoga">Instagram</a> or{" "}
        <a href="https://www.facebook.com/debbiedannyoga">Facebook</a>.
      </p>
    </div>
  );
};

export default Contact;
