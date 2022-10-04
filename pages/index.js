import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import List from "./components/List";
import Creator from "./components/Creator";
import Displayer from "./components/Displayer";

export default function Home() {
  const [openedTitle, setOpenedTitle] = useState("");
  const [openedBody, setOpenedBody] = useState("");

  function openNoteClick(title, body) {
    setOpenedTitle(title);
    setOpenedBody(body);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Note App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <List onClick={openNoteClick}></List>
      <Creator></Creator>
      <Displayer title={openedTitle} body={openedBody}></Displayer>
    </div>
  );
}
