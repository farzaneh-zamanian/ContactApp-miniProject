import React, { useState } from "react";
import styles from "./ContactEdit.module.css";
import inputs from "../../constants/inputs";

function ContactEdit({ contact, editContactHandler, setEditMode }) {
  //* useStates ************************
  //   edited contact info
  const [editedContact, setEditedContact] = useState(contact);

  //* impliment functions **************
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setEditedContact({ ...editedContact, [name]: value });
  };
  const saveChnageHandler = () => {
        editContactHandler(editedContact);
        setEditMode(false);
  };
  return (
    <div  className={styles.inputContainer}>

      {inputs.map((input, index) => (
        <p key={index}>
          <input
            type={input.type}
            name={input.name}
            value={editedContact[input.name]}
            onChange={changeHandler}
          />
        </p>
      ))}
      <button className="btn btn-md btn-success" onClick={saveChnageHandler}>
        Save Changes
      </button>
    </div>
  );
}

export default ContactEdit;
