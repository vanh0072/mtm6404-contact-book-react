import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddContact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { id: Date.now().toString(), firstName, lastName, email };
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    savedContacts.push(newContact);
    localStorage.setItem('contacts', JSON.stringify(savedContacts));
    history.push('/contact-list');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default AddContact;
