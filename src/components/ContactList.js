import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../db';
import { collection, getDocs } from 'firebase/firestore';

function ContactList({ contacts, deleteContact }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter contacts by search query
  const filteredContacts = contacts.filter(contact => 
    `${contact.firstName} ${contact.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Contact List</h2>
      <input
        type="text"
        placeholder="Search contacts by name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div>
        {filteredContacts
          .sort((a, b) => a.lastName.localeCompare(b.lastName)) // Sort by last name
          .map(contact => (
            <div key={contact.email} className="contact-item">
              <Link to={`/contact-details/${contact.email}`} className="contact-name">
                {contact.firstName} {contact.lastName}
              </Link>
              <div className="button-container">
                <Link to={`/edit-contact/${contact.email}`}><button className="edit-btn">Edit</button></Link>
                <button className="delete-btn" onClick={() => deleteContact(contact.email)}>Delete</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ContactList;
