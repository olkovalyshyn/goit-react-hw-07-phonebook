import { connect, useDispatch } from "react-redux";

import PropTypes from "prop-types";

import { deleteContact } from "../../redux/actions";
import s from "./ContactList.module.css";
import selectors from "../../redux/selectors";

function ContactList({ contacts, onDeleteContact }) {
  // console.log("!!!contacts in ContactsList", contacts);
  // console.log("!!!state.contacts.items", contacts);
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
            // onClick={() => onDeleteContact(id)}
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

// const mapStateToProps = (state) => ({
//   contacts: selectors.getVisibleContacts(state),
// });

// COPY
const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = (state) => ({
  contacts: selectors.getVisibleContacts(state),
});
// COPY

// const mapStateToProps = (state) => {
//   const { item, filter } = state.contacts;
//   const normalizedFilter = filter.toLowerCase();
//   const visibleContacts = item.filter((data) =>
//     data.name.toLowerCase().includes(normalizedFilter)
//   );

//   return {
//     contacts: visibleContacts,
//   };
// };

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
