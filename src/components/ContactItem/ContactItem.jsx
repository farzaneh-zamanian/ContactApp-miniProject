import React from "react";
import styles from "./ContactItem.module.css";
import { BsTelephoneForward } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

function ContactItem({ contact }) {
  const { id, name, lastName, email, telephone } = contact;

  //* impliment function*******
  const deleteContact = () => {
    console.log("delete");
  };
  const editContact = (contact) => {
    console.log("edit");
  };
  return (
    <>
      <li className={styles.container}>
        <span className={styles.name}>
          {name} {lastName}
        </span>
        <span className={styles.email}>{email}</span>
        <p>
          <BsTelephoneForward />
          <span className={styles.telephone}>
            <a href={`tel:${telephone}`}> {telephone}</a>
          </span>
        </p>
        <p className={styles.btnContactControler}>
          <button onClick={deleteContact} className="m-2 btn btn-md btn-danger">
            <AiTwotoneDelete fontSize="1.6rem" />
          </button>
          <button
            className="btn btn-md btn-warning"
            onClick={() => editContact(contact)}
          >
            <FaRegEdit fontSize="1.6rem" color="#fff" />
          </button>
        </p>
      </li>
    </>
  );
}

export default ContactItem;
