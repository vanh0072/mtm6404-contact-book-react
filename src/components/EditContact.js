import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditContact = () => {
  const { id } = useParams();
  const [contact, setContact] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchedContact = { id, firstName: 'John', lastName: 'Doe', email: 'john@example.com' };
    setContact(fetchedContact);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={contact.firstName}
          onChange={(e) => setContact({ ...contact, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={contact.lastName}
          onChange={(e) => setContact({ ...contact, lastName: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={contact.email}
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
        />
        <button type="submit">Update Contact</button>
      </form>
    </div>
  );
};

export default EditContact;
