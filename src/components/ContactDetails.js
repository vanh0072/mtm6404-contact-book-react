import React from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../db';
import { doc, getDoc } from 'firebase/firestore';

function ContactDetails({ contacts }) {
  const { email } = useParams();
  const contact = contacts.find(contact => contact.email === email);

  if (!contact) return <p>Contact not found.</p>;

  return (
    <div>
      <h2>Contact Details</h2>
      <p>First Name: {contact.firstName}</p>
      <p>Last Name: {contact.lastName}</p>
      <p>Email: {contact.email}</p>
    </div>
  );
}

export default ContactDetails;
