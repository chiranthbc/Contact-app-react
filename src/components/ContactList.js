import React from "react";

const ContactList = ({ contacts, deleteContact }) => {
  const renderingContacts = contacts.map((contact) => {
    return (
      <ul
        key={contact.id}
        className="border-2 p-2 m-2 rounded-lg showdow-md bg-white"
      >
        <li className="font-bold text-green-500">{contact.name}</li>
        <li className="text-green-400">{contact.email}</li>
        <button
          onClick={() => deleteContact(contact.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
        >
          Delete
        </button>
      </ul>
    );
  });
  return (
    <div>
      <h1 className="text-center text-blue-400 text-xl font-semibold mb-4">
        Contact List
      </h1>
      <div>{renderingContacts}</div>
    </div>
  );
};

export default ContactList;
