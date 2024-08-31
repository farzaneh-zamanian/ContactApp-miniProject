import React from "react";
import styles from "./Header.module.css";

function header() {
  return (
    <header className={styles.container}>
      <h1>Contact App</h1>
      <h3>React.js Course</h3>
    </header>
  );
}

export default header;
