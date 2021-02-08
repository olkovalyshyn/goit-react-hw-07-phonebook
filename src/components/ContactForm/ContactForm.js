import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addContact, getContacts } from "../../redux/operations";
import s from "./ContactForm.module.css";
import selectors from "../../redux/contacts-selectors";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contactsItem = useSelector(selectors.getContactsItem);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    switch (event.currentTarget.name) {
      case "name":
        setName(event.currentTarget.value);
        break;

      case "number":
        setNumber(event.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const onSubmit = (text) => dispatch(addContact(text));

  const handleSubmit = (event) => {
    event.preventDefault();
    const contact = { name, number };
    contactsItem.find((item) => item.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts.`)
      : onSubmit(contact);
    setName("");
    setNumber("");
  };

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          className={s.input}
          value={name}
          onChange={handleChange}
        ></input>
      </label>

      <label className={s.label}>
        Number
        <input
          type="tel"
          name="number"
          className={s.input}
          value={number}
          onChange={handleChange}
        ></input>
      </label>

      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
