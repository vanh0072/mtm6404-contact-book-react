import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const EditContact = () => {
  const { id } = useParams();
  const history = useHistory();
  const [contact, setContact] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    const contact = contacts.find(contact => contact.id === id);
    if (contact) {
      setContact(contact);
      setFirstName(contact.firstName);
      setLastName(contact.lastName);
      setEmail(contact.email);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    const updatedContacts = contacts.map(contact =>
      contact.id === id ? { ...contact, firstName, lastName, email } : contact
    );
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    history.push(`/contact/${id}`);
  };

  if (!contact) return <div>Loading...</div>;

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
      <button type="submit">Update Contact</button>
    </form>
  );
};

export default EditContact;
