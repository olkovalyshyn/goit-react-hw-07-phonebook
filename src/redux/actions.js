import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";
import axios from "axios";

import fetchAddNewContact from "./Api";

// import { addData } from "./contact-operations";

// import { ADDCONTACT, DELCONTACT, FINDCONTACT } from "./contact-types";

axios.defaults.baseURL = "http://localhost:4040/";

console.log("!!!fetchAddNewContact", fetchAddNewContact({}));

export const addContact = createAction("Contact/addContact", (name, number) => {
  return {
    payload: {
      name: name,
      number: number,
    },
  };
});

export const addData = () => async (dispatch) => {
  dispatch(addContactRequest());

  try {
    const contact = await fetchAddNewContact();
    dispatch(addContactSuccess(contact));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

// export const addContact = createAction("Contact/addContact", (name, number) => {
//   fetchAddNewContact(name, number);
// });

export const addContactRequest = createAction("Contact/addContactRequest");
export const addContactSuccess = createAction(
  "Contact/addContactSuccess",
  (name, number) => {
    return {
      payload: {
        name: name,
        number: number,
      },
    };
  }
);
export const addContactError = createAction("Contact/addContactError");

// export const addContact = (name, number) => ({
//   type: ADDCONTACT,
//   payload: {
//     id: shortid.generate(),
//     name: name,
//     number: number,
//   },
// });

export const deleteContact = createAction("Contact/deleteContact");
// export const deleteContact = (idForDelete) => ({
//   type: DELCONTACT,
//   payload: idForDelete,
// });

export const filterContact = createAction("Contact/ChangeFilter");
// export const filterContact = (value) => ({
//   type: FINDCONTACT,
//   payload: value,
// });

export default { addContact, deleteContact, filterContact };
