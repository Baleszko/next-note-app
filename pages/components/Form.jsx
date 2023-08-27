import styles from "../../styles/Form.module.css";

function Form({ onSubmit, onChangeBody, onChangeTitle }) {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.titleRow}>
        <input
          className={styles.title}
          type="text"
          placeholder="Title..."
          onChange={onChangeTitle}
        ></input>
        <input className={styles.button} type="submit" value="Create"></input>
      </div>
      <textarea
        className={styles.text}
        placeholder="Write something..."
        onChange={onChangeBody}
      ></textarea>
    </form>
  );
}

export default Form;
