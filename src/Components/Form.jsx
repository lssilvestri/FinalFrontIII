import { useState } from 'react';
import styles from '../Styles/Form.module.css';

const Form = () => {
  const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  const [err, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const validateEmail = (email) => {
    return emailRegex.test(email);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (name.trim().length >= 5 && validateEmail(email)) {
      setError(false);
      setSuccess(true);
      console.log("Form submitted successfully with data:", {
        name: name.trim(),
        email: email.trim(),
      });
    } else {
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Want to know more?</h2>
      <p className={styles.formDescription}>Send us your questions and we will contact you</p>
      <form onSubmit={submitHandler} className={styles.form}>
        <input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.formInput}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.formInput}
        />
        <button type="submit" className={styles.formButton}>
          Send
        </button>

        {err && (
          <h3 className={`${styles.formMessage} ${styles.formMessageError}`}>
            Please, check the information is correct
          </h3>
        )}

        {success && (
          <h3 className={`${styles.formMessage} ${styles.formMessageSuccess}`}>
            Thank you, {name.trim()}! Your information has been successfully registered.
          </h3>
        )}
      </form>
    </div>
  );
};

export default Form;
