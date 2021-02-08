import { createSelector } from "@reduxjs/toolkit";

const getContactsItem = (state) => state.contacts.item;

const getFilter = (state) => state.contacts.filter;

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
