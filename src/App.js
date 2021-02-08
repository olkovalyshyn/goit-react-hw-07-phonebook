import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";

import "./App.css";

function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />

      <h3>Find contacts by name</h3>
      <Filter />

      <h2>Contacts</h2>
      <ContactList />
    </>
  );
}

export default App;
