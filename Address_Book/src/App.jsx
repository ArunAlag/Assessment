import { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const [editContact, setEditContact] = useState(null);

  const addContact = (contact) => setContacts([...contacts, contact]);

  const updateContact = (updatedContact) => {
    setContacts(contacts.map((contact) => (contact.id === updatedContact.id ? updatedContact : contact)));
    setEditContact(null);
  };

  const deleteContact = (id) => setContacts(contacts.filter((contact) => contact.id !== id));

  const startEditContact = (contact) => setEditContact(contact);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-[500px] p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Address Book</h1>
        <ContactForm onAddContact={addContact} onUpdateContact={updateContact} editContact={editContact} />
        <ContactList contacts={contacts} onDeleteContact={deleteContact} onEditContact={startEditContact} />
      </div>
    </div>
  );
}

export default App;
