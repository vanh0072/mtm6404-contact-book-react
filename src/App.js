import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import ContactDetails from './components/ContactDetails';
import EditContact from './components/EditContact';

function App() {
  const [contacts, setContacts] = useState([
    { firstName: 'John', lastName: 'Doe', email: 'john@example.com' },
    { firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com' },
    { firstName: 'Tom', lastName: 'Brown', email: 'tom@example.com' },
  ]);

  // Add new contact
  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  // Delete contact
  const deleteContact = (email) => {
    setContacts(contacts.filter(contact => contact.email !== email));
  };

  // Edit contact
  const editContact = (updatedContact) => {
    setContacts(contacts.map(contact => 
      contact.email === updatedContact.email ? updatedContact : contact
    ));
  };

  return (
    <Router>
      <nav>
        <Link to="/contact-list">Contact List</Link>
        <Link to="/add-contact">Add New Contact</Link>
      </nav>

      <h1>Welcome to the Contact Book</h1>

      <Routes>
        <Route path="/contact-list" element={<ContactList contacts={contacts} deleteContact={deleteContact} />} />
        <Route path="/add-contact" element={<AddContact addContact={addContact} />} />
        <Route path="/contact-details/:email" element={<ContactDetails contacts={contacts} />} />
        <Route path="/edit-contact/:email" element={<EditContact contacts={contacts} editContact={editContact} />} />
      </Routes>
    </Router>
  );
}

export default App;
