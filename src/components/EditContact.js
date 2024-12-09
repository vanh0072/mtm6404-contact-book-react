import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { db } from '../db';
import { doc, updateDoc } from 'firebase/firestore';

function EditContact({ contacts, editContact }) {
  const { email } = useParams();
  const contact = contacts.find(contact => contact.email === email);
  const [firstName, setFirstName] = useState(contact.firstName);
  const [lastName, setLastName] = useState(contact.lastName);
  const [emailState, setEmailState] = useState(contact.email);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    editContact({ firstName, lastName, email: emailState });
    navigate('/contact-list');
  };

  return (
    <div>
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
        />
        <input 
          type="text" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
        />
        <input 
          type="email" 
          value={emailState} 
          onChange={(e) => setEmailState(e.target.value)} 
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditContact;
