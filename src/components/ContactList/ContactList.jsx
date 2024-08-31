import React, { useState } from "react";
import styles from "./ContactList.module.css";
import ContactItem from "../ContactItem/ContactItem";

function ContactList({
  contacts,
  deleteContactHandler,
  deleteContactsHandler,
}) {
  //* useStates  ******************
  const [deleteAllContact, setDeleteAllContact] = useState(false);
  //*impliment functions *************
  //   delete all contacts
  const deleteAllContacts = () => {
    setDeleteAllContact(true);
  };
  const confirmDeleteContacts = () => {
    setDeleteAllContact(false);
    deleteContactsHandler();
  };
  const cancelDeleteContacts = () => {
    setDeleteAllContact(false);
  };

  return (
    <div className={styles.containerContact}>
      <h2>Contacts List</h2>
      {/* if there is contact */}
      {contacts && contacts.length ? (
        <>
          <div>
            {deleteAllContact ? (
              <>
                You are delete All Contacts, are you sure ?
                <button
                  onClick={confirmDeleteContacts}
                  className="btn btn-sm btn-danger m-2"
                >
                  delete
                </button>
                <button
                  onClick={cancelDeleteContacts}
                  className="btn btn-sm btn-info m-2"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                className="btn btn-lg btn-danger"
                onClick={deleteAllContacts}
              >
                Delete All Contacts
              </button>
            )}
          </div>
          <ul className={styles.container}>
            {contacts.map((contact) => (
              <ContactItem
                key={contact.id}
                contact={contact}
                deleteContactHandler={deleteContactHandler}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>No Contact Yet!</p>
      )}
    </div>
  );
}

export default ContactList;
