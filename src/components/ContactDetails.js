import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ContactDetails({ contacts, editContact }) {
  const { email } = useParams();
  const [contact, setContact] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundContact = contacts.find(contact => contact.email === email);
    if (foundContact) {
      setContact(foundContact);
    } else {
      navigate('/contact-list');
    }
  }, [contacts, email, navigate]);

  const handleEdit = () => {
    const updatedContact = { ...contact, firstName: 'Updated', lastName: 'Updated' };
    editContact(updatedContact);
    navigate('/contact-list');
  };

  if (!contact) return <p>Loading...</p>;

  return (
    <div>
      <h2>Contact Details</h2>
      <p>First Name: {contact.firstName}</p>
      <p>Last Name: {contact.lastName}</p>
      <p>Email: {contact.email}</p>
      <button onClick={handleEdit}>Edit Contact</button>
    </div>
  );
}

export default ContactDetails;
