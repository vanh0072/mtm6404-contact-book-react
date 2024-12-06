import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const ContactDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    const contact = contacts.find(contact => contact.id === id);
    setContact(contact);
  }, [id]);

  const handleDelete = () => {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    history.push('/contact-list');
  };

  if (!contact) return <div>Loading...</div>;

  return (
    <div>
      <h2>{contact.firstName} {contact.lastName}</h2>
      <p>Email: {contact.email}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ContactDetails;
