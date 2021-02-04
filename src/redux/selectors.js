const getContactsItem = (state) => state.contacts.item;

const getFilter = (state) => state.contacts.filter;

const getVisibleContacts = (state) => {
  const contacts = getContactsItem(state);
  const filter = getFilter(state);
};

export default { getContactsItem, getFilter };
