import styles from "../../styles/Displayer.module.css";

function Displayer({ title, body }) {
  return (
    <>
      <section className={styles.displayer}>
        <h1>{title}</h1>
        <p>{body}</p>
      </section>
    </>
  );
}

export default Displayer;
