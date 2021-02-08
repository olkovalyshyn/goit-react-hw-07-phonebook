import { connect, useDispatch } from "react-redux";

import PropTypes from "prop-types";

import { useEffect } from "react";

import { deleteContact, getContacts } from "../../redux/operations";
import s from "./ContactList.module.css";
import selectors from "../../redux/selectors";

function ContactList({ contacts }) {
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

// const getVisibleContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();

//   return allContacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

const mapStateToProps = (state) => ({
  contacts: selectors.getVisibleContacts(state),
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onDeleteContact: (id) => dispatch(deleteContact(id)),
//   };
// };

export default connect(mapStateToProps)(ContactList);

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
