import { useState } from "react";
import { connect, useDispatch } from "react-redux";

import PropTypes from "prop-types";

import * as actions from "../../redux/operations";
import s from "./ContactForm.module.css";
import selectors from "../../redux/selectors";

function ContactForm({ contactsItem, onAdd }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
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

  const handleSubmit = ({ event }) => {
    event.preventDefault();
    contactsItem.find((item) => item.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts.`)
      : dispatch(actions.addContact(name, number));
    setName("");
    setNumber("");
  };

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

const mapStateToProps = (state) => {
  return {
    contactsItem: selectors.getContactsItem(state),
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAdd: (name, number) => dispatch(actions.addContact(name, number)),
//   };
// };

export default connect(mapStateToProps)(ContactForm);

// ContactForm.propTypes = {
//   onAdd: PropTypes.func,
// };
