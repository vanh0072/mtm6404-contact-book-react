import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(savedContacts);
  }, []);

  const filteredContacts = contacts.filter(contact =>
    `${contact.firstName} ${contact.lastName}`.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search contacts by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <Link to={`/contact/${contact.id}`}>{contact.firstName} {contact.lastName}</Link>
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
            <Link to={`/edit-contact/${contact.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
