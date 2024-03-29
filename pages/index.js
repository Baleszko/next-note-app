import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import List from "./components/List";
import Creator from "./components/Creator";
import Displayer from "./components/Displayer";

export default function Home() {
  const [openedTitle, setOpenedTitle] = useState("");
  const [openedBody, setOpenedBody] = useState("");
  const [isBodyEmpty, setIsBodyEmpty] = useState(true);
  const [isTitleEmpty, setIsTitleEmpty] = useState(true);

  function openNoteClick(title, body) {
    setOpenedTitle(title);
    setOpenedBody(body);
  }

  const formSubmit = (e) => {
    e.preventDefault();
  };

  const onChangeBody = (e) => {
    const change = e.target.value;
    if (change.length > 0) {
      isBodyEmpty = false;
    }
    if ((change.length = 0)) {
      isBodyEmpty = true;
    }
  };
  const onChangeTitle = (e) => {
    const change = e.target.value;
    if (change.length > 0) {
      isTitleEmpty = false;
    }
    if ((change.length = 0)) {
      isTitleEmpty = true;
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Note App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <List onClick={openNoteClick}></List>
      <Creator
        onSubmit={formSubmit}
        onChangeTitle={onChangeTitle}
        onChangeBody={onChangeBody}
      ></Creator>
      <Displayer title={openedTitle} body={openedBody}></Displayer>
    </div>
  );
}
