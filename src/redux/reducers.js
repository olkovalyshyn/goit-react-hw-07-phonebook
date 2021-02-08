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
  filterContact,
} from "./actions";

const contacts = {
  items: [],
  filter: "",
  loading: false,
};

const itemReducer = createReducer(contacts.items, {
  [getContactsSuccess]: (state, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [payload, ...state],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer("", {
  [filterContact]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  item: itemReducer,
  filter: filterReducer,
});

export const loading = createReducer(false, {
  [getContactsRequest]: () => true,
  [getContactsSuccess]: () => false,
  [getContactsError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});
