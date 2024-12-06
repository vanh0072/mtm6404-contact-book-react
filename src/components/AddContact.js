import React, { useState } from 'react';

function AddContact({ addContact }) {
  const [newContact, setNewContact] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewContact({
      ...newContact,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(newContact);
    setNewContact({ firstName: '', lastName: '', email: '' });
  };

  return (
    <div>
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={newContact.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={newContact.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          type="email"
          name="email"
          value={newContact.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
}

export default AddContact;
