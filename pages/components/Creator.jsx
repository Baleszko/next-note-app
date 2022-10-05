import styles from "../../styles/Creator.module.css";
import Form from "./Form";

function Creator({ onSubmit, onChangeTitle, onChangeBody }) {
  return (
    <>
      <section className={styles.creator}>
        <h1>Take a Note</h1>
        <Form
          onSubmit={onSubmit}
          onChangeBody={onChangeBody}
          onChangeTitle={onChangeTitle}
        ></Form>
      </section>
    </>
  );
}

export default Creator;
