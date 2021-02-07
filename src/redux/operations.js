import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";
import axios from "axios";

import { fetchAddNewContact } from "./Api";

import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from "./actions";

axios.defaults.baseURL = "http://localhost:4040";

export const getContacts = () => (dispatch) => {
  dispatch(getContactsRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(getContactsSuccess(data)))
    .catch((error) => dispatch(getContactsError(error)));
};

export const addContact = ({ name, number }) => (dispatch) => {
  dispatch(addContactRequest());

  const contact = {
    name: name,
    number: number,
  };

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error)));
};

// export const addContact = (name, number) => async (dispatch) => {
//   dispatch(addContactRequest());
//   try {
//     const contact = {
//       name: name,
//       number: number,
//     };
//     await fetchAddNewContact(contact);
//     dispatch(addContactSuccess(contact));
//   } catch (error) {
//     dispatch(addContactError(error));
//   }
// };

export const deleteContact = (idForDelete) => (dispatch) => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${idForDelete}`)
    .then(() => dispatch(deleteContactSuccess(idForDelete)))
    .catch((error) => dispatch(deleteContactError(error)));
};

export default { deleteContact };
