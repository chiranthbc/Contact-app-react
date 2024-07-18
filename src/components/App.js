import React, { useState } from "react";

import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="container mx-auto p-4 max-w-xl">
      <Header />

      <AddContact addContact={addContact} />

      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
