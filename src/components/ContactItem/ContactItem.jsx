import React, { useState } from "react";
import styles from "./ContactItem.module.css";
import { BsTelephoneForward } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

function ContactItem({ contact ,deleteContactHandler}) {
  const { id, name, lastName, email, telephone } = contact;

  //* useState part ***********
  //   if delete btn is pressed or not
  const [DeleteConfirmation, setDeleteConfirmation] = useState(false);

  //* impliment function*******

  //   delete each contact
  const deleteContact = () => {
    setDeleteConfirmation(true);
  };

  //   confirm delete each contact
  const confirmDeletehandler = () => {
      deleteContactHandler(id);
      setDeleteConfirmation(false);
  };
  //   cancel delete each item
  const cancelDeletehandler = () => {
      setDeleteConfirmation(false);
  };

  //   edit each item
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
          {DeleteConfirmation ? (
            <div className={styles.confirmMessage}>
              Sure to delete {name} {lastName}?
              <button
                onClick={confirmDeletehandler}
                className="btn btn-sm btn-danger m-2"
              >
                delete
              </button>
              <button
                onClick={cancelDeletehandler}
                className="btn btn-sm btn-info m-2"
              >
                Cancel
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={deleteContact}
                className="m-2 btn btn-md btn-danger"
              >
                <AiTwotoneDelete fontSize="1.6rem" />
              </button>
              <button
                className="btn btn-md btn-warning"
                onClick={() => editContact(contact)}
              >
                <FaRegEdit fontSize="1.6rem" color="#fff" />
              </button>
            </>
          )}
        </p>
      </li>
    </>
  );
}

export default ContactItem;
