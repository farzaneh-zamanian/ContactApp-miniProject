import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./Layout.module.css";
import ContactForm from "../components/ContactForm/ContactForm";
function Layout() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <main>
        <ContactForm/>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
