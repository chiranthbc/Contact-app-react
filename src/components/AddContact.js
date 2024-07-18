import React, { useState } from "react";

const AddContact = ({ addContact }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: new Date().getTime().toString(),
      name: formData.name,
      email: formData.email,
    };
    addContact(newContact);
    setFormData({ name: "", email: "" });
  };
  return (
    <div className="border-2 p-4 m-4 rounded-lg showdow-lg">
      <h1 className="text-center text-xl text-blue-600 font-semibold mb-4">
        Add Contact
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-3 border rounded-lg focus:outline-double "
          />
        </div>
        <div>
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            className="w-full px-3 py-3 border rounded-lg focus:outline-double"
            type="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-double my-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddContact;
