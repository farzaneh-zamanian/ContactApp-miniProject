import React, { useState } from "react";
import styles from "./ContactEdit.module.css";
import inputs from "../../constants/inputs";
import { validateInput } from "../../constants/validationInputs";

function ContactEdit({ contact, editContactHandler, setEditMode }) {
  //* useStates ************************
  //   edited contact info
  const [editedContact, setEditedContact] = useState(contact);
  // validation errors
  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    email: "",
    telephone: "",
  });

  //* impliment functions **************
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setEditedContact({ ...editedContact, [name]: value });
    const error = validateInput(name, value);
    setErrors((errors) => ({ ...errors, [name]: error }));
  };
  const saveChnageHandler = () => {
    editContactHandler(editedContact);
    setEditMode(false);
  };
  return (
    <div className={styles.inputContainer}>
      {inputs.map((input, index) => (
        <p key={index}>
          <input
            type={input.type}
            name={input.name}
            value={editedContact[input.name]}
            onChange={changeHandler}
          />
          {errors[input.name] && (
            <span style={{ color: "red" }}>{errors[input.name]}</span>
          )}
        </p>
      ))}
      <button className="btn btn-md btn-success" onClick={saveChnageHandler}>
        Save Changes
      </button>
    </div>
  );
}

export default ContactEdit;
