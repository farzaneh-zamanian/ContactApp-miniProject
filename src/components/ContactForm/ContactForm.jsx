import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import inputs from "../../constants/inputs";
import { v4 } from "uuid";

function ContactFormCopy() {
  //*useState ********************
  // submitted contacts
  const [contacts, setContacts] = useState([]);
  //each contact info
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    telephone: "",
  });
  //alert message
  const [alert, setAlert] = useState("");

  //*implement functions **********
  //   handle inputs changes
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };
  const addHandler = () => {
    // check valid data
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.telephone
    ) {
      setAlert("please enter valid data");
      return;
    }
    setAlert("");
    //     add id to each contact info
    const contactAddedId = { ...contact, id: v4() };
    //     add data to the contacts array
    setContacts((contacts) => [...contacts, contactAddedId]);
    setContact({
      name: "",
      lastName: "",
      email: "",
      telephone: "",
    });
    console.log(contacts);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            onChange={changeHandler}
            value={contact[input.name]}
          />
        ))}
        <button className="btn btn-lg btn-success" onClick={addHandler}>
          Add Contact
        </button>
      </div>
      <div className={styles.message}>{alert && <p>{alert}</p>}</div>
    </div>
  );
}

export default ContactFormCopy;
