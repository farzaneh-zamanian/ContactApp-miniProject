import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./Layout.module.css";
function Layout() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <main>content</main>
      <Footer />
    </div>
  );
}

export default Layout;
