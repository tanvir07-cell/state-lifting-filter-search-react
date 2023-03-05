import { useState } from "react";
import shortid from "shortid";
import ContactForm from "./components/contact-app/ContactForm";
import Table from "./components/contact-app/Table";

function App() {
  const [contacts, setContacts] = useState([]);
  const getContact = (contact) => {
    // immutable way to add the catact object property and it's not reflect the original contactForm.jsx values object:
    const newContact = { ...contact };
    newContact.id = shortid.generate();
    setContacts([newContact, ...contacts]);
  };
  console.log(contacts);
  return (
    <div>
      <h1>Contact App</h1>
      <ContactForm getContact={getContact} />
      <Table contacts={contacts} />
    </div>
  );
}
export default App;
