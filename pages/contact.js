import styles from "../styles/Contact.module.css";

const Contact = () => {
  const ContactForm = (
    <form
      method="POST"
      name="contact-form"
      action="contact/?success=true"
      data-netlify="true"
      className={styles.form}
    >
      <input
        type="hidden"
        name="form-name"
        value="contact-form"
        className={styles.input}
      />
      <label htmlFor="name">Name *</label>
      <input
        id="name"
        name="name"
        required
        type="text"
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
        If you have any questions please complete the form below or reach out to me on
        social media.
      </p>
      {ContactForm}
      <p>
        Follow me on{" "}
        <a href="https://instagram.com/debbiedannyoga">Instagram</a> or{" "}
        <a href="https://www.facebook.com/debbiedannyoga">Facebook</a>.
      </p>
    </div>
  );
};

export default Contact;
