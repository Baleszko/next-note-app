import styles from "../../styles/List.module.css";
import Card from "./Card";

function List() {
  return (
    <>
      <aside className={styles.list}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </aside>
    </>
  );
}

export default List;
