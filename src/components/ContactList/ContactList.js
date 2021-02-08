import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { deleteContact } from "../../redux/operations";
import s from "./ContactList.module.css";
import selectors from "../../redux/contacts-selectors";

function ContactList() {
  const contacts = useSelector(selectors.getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul className={s.formContact}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.formContactItem}>
          {name}: {number}
          <button
            className={s.formContactButton}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;

ContactList.propType = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};
