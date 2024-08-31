import React, { useEffect, useState } from "react";
import inputs from "../../constants/inputs";
import { validateInput } from "../../constants/validationInputs";
import { v4 } from "uuid";
import styles from "./ContactForm.module.css";
import ContactList from "../ContactList/ContactList";

function ContactForm() {
  //*useState ********************
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
  // submitted contacts
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) || []
  );
  // validation errors
  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    email: "",
    telephone: "",
  });

  //*implement functions **********
  // useEffect
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  //   handle inputs changes and validation
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
    //     call validation function
    const error = validateInput(name, value);
    setErrors((errors) => ({ ...errors, [name]: error }));
  };

  const addHandler = () => {
    if (
      // if inputs are empty
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.telephone ||
      // if data is invalid in inputs
      errors.name ||
      errors.lastName ||
      errors.email ||
      errors.telephone
    ) {
      setAlert("Please enter valid data");
      return;
    } else {
      setAlert("");
      // Add the contact to the list of contacts
      const contactAddedId = { ...contact, id: v4() };
      setContacts((contacts) => [...contacts, contactAddedId]);
      // Reset the contact form
      setContact({
        id: "",
        name: "",
        lastName: "",
        email: "",
        telephone: "",
      });
      // reset the errors
      setErrors({
        name: "",
        lastName: "",
        email: "",
        telephone: "",
      });
      // alert when added successfully
      setAlert("Contact added successfully!");
      setTimeout(() => {
        setAlert("");
      }, 2000); // clea
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.alertContainer}>
        {alert && (
          <p style={{ color: "#fff", backgroundColor: "grey" }}>{alert}</p>
        )}
      </div>

      <div className={styles.formContainer}>
        {inputs.map((input, index) => (
          <div key={index}>
            <input
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              onChange={changeHandler}
              value={contact[input.name]}
            />
            {errors[input.name] && (
              <p style={{ color: "red" }}>{errors[input.name]}</p>
            )}
          </div>
        ))}
        <button className="btn btn-lg btn-success" onClick={addHandler}>
          Add Contact
        </button>
      </div>

      <div>
        <ContactList contacts={contacts} />
      </div>
    </div>
  );
}

export default ContactForm;
