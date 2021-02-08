import { useSelector } from "react-redux";

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

import "./App.css";
import { checkPropTypes } from "prop-types";

function App() {
  const contacts = useSelector((state) => state.contacts.items);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />

      <h3>Find contacts by name</h3>
      <Filter />

      <h2>Contacts</h2>
      {/* <ContactList contacts={contacts} /> */}
      <ContactList />
    </>
  );
}

export default App;
