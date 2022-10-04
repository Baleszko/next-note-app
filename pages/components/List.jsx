import styles from "../../styles/List.module.css";
import Card from "./Card";
import { useState, useEffect } from "react";

function List({ onClick }) {
  const [noteList, setNoteList] = useState([]);

  useEffect(() => {
    const getNoteList = async () => {
      const noteList = await fetch("/api/getNotes");
      const noteListResponse = await noteList.json();
      setNoteList(noteListResponse.note);
      //console.log(noteListResponse.note);
    };
    getNoteList();
  }, []);

  console.log(noteList);

  return (
    <>
      <aside className={styles.list}>
        {noteList.map((note) => (
          <Card
            onClick={onClick}
            key={note._id}
            id={note._id}
            title={note.title}
            body={note.body}
          ></Card>
        ))}
        {/* {noteList.map((note) => {
          <Card key={note._id} title={note.title} body={note.body}>
            {" "}
          </Card>;
        })} */}
      </aside>
    </>
  );
}

export default List;
