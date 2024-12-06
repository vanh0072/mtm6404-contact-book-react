import React from 'react';
import { Link } from 'react-router-dom';

function ContactList({ contacts, deleteContact }) {
  return (
    <div>
      <h2>Contact List</h2>
      <input type="text" placeholder="Search contacts by name" />
      {contacts.length === 0 ? (
        <p>No contacts to display.</p>
      ) : (
        contacts.map(contact => (
          <div key={contact.email} className="contact-item">
            <Link to={`/contact-details/${contact.email}`}>
              {contact.firstName} {contact.lastName}
            </Link>
            <button onClick={() => deleteContact(contact.email)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default ContactList;
