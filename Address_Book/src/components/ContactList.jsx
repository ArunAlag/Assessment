function ContactList({ contacts, onDeleteContact, onEditContact }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Contact List</h2>
      {contacts.length === 0 ? (
        <p className="text-gray-500">No contacts yet</p>
      ) : (
        <ul className="space-y-4">
          {contacts.map((contact) => (
            <li key={contact.id} className="p-4 bg-gray-50 border rounded shadow-sm flex justify-between items-center">
              <div>
                <p className="font-bold text-gray-800">{contact.name}</p>
                <p className="text-gray-600">Email: {contact.email}</p>
                <p className="text-gray-600">Phone: {contact.phone}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => onEditContact(contact)}
                  className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDeleteContact(contact.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactList;
