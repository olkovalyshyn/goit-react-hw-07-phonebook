import axios from "axios";

axios.defaults.baseURL = "http://localhost:4040";

// export const fetchAddNewContact = async (contact) => {
//   console.log(contact);
//   await axios.post("/contacts", contact);
// };

// export const fetchAddNewContact = () => async dispatch=> {
//   await Axios.post("/contacts", contact);
// };

// const BASE_URL = "http://localhost:4040";

// export function fetchAddNewContact(newContact) {
//   const options = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(newContact),
//   };

//   return fetch(`${BASE_URL}/contacts`, options).then((res) => res.json());
//   // .then((info) => console.log(info));
// }

// console.log(
//   "!!!fetchAddNewContact({ name: far number: 2352 })",
//   fetchAddNewContact({ name: "far", number: 2352 })
// );
// fetchAddNewContact({ name: "qqq", number: 333 });
// console.log("!!!fetchAddNewContact()", fetchAddNewContact());

// fetchAddNewContact({ name: "far", number: 2352 });

//фес
// export const addContact = (name, number) => async (dispatch) => {
//   dispatch(actions.addContactRequest());
//   try {
//     const contact = { name, number, id: uid() };
//     await contactsAPI.addContact(contact);
//     dispatch(actions.addContactSuccess(contact));
//   } catch (error) {
//     dispatch(actions.addContactReject(error));
//   }
// };
//фес
