import { createStore, combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactError,
  deleteContactSuccess,
  deleteContact,
  filterContact,
} from "./actions";

const contacts = {
  items: [
    // { id: "1", name: "Rosie Simpson", number: "459-12-56" },
    // { id: "2", name: "Hermione Kline", number: "443-89-12" },
    // { id: "3", name: "Eden Clements", number: "645-17-79" },
    // { id: "4", name: "Annie Copeland", number: "227-91-26" },
  ],
  filter: "a",
};

const itemReducer = createReducer(contacts.items, {
  [getContactsSuccess]: (state, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [payload, ...state],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const filterReducer = createReducer(contacts.filter, {
  [filterContact]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  item: itemReducer,
  filter: filterReducer,
});
