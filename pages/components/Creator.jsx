import styles from "../../styles/Creator.module.css";
import Form from "./Form";

function Creator() {
  return (
    <>
      <section className={styles.creator}>
        <h1>Take a Note</h1>
        <Form></Form>
      </section>
    </>
  );
}

export default Creator;
