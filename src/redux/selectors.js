import { createSelector } from "@reduxjs/toolkit";

const getContactsItem = (state) => state.contacts.item;
// console.log("!!!getContactsItem", getContactsItem());
// console.log("state.contacts.item", (state) => state.contacts.item);

const getFilter = (state) => state.contacts.filter;

// const getVisibleContacts = (state) => {
//   const contacts = getContactsItem(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

const getVisibleContacts = createSelector(
  [getContactsItem, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

export default { getContactsItem, getFilter, getVisibleContacts };
