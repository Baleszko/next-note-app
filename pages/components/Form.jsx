import styles from "../../styles/Form.module.css";

function Form() {
  return (
    <form className={styles.form}>
      <div className={styles.titleRow}>
        <input
          className={styles.title}
          type="text"
          placeholder="Title..."
        ></input>
        <input className={styles.button} type="submit" value="Create"></input>
      </div>
      <textarea
        className={styles.text}
        placeholder="Write something..."
      ></textarea>
    </form>
  );
}

export default Form;
