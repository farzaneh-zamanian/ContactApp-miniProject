import React from "react";
import styles from "./ContactList.module.css";
import ContactItem from "../ContactItem/ContactItem";

function ContactList({ contacts }) {
  return (
    <ul className={styles.container}>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

export default ContactList;
