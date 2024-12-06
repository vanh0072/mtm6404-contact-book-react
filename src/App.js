import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (email) => {
    setContacts(contacts.filter(contact => contact.email !== email));
  };

  const editContact = (editedContact) => {
    setContacts(contacts.map(contact => 
      contact.email === editedContact.email ? editedContact : contact
    ));
  };

  return (
    <Router>
      <nav>
        <Link to="/contact-list">Contact List</Link>
        <Link to="/add-contact">Add New Contact</Link>
      </nav>

      <Routes>
        <Route path="/contact-list" element={<ContactList contacts={contacts} deleteContact={deleteContact} />} />
        <Route path="/add-contact" element={<AddContact addContact={addContact} />} />
        <Route path="/contact-details/:email" element={<ContactDetails contacts={contacts} editContact={editContact} />} />
      </Routes>
    </Router>
  );
}

export default App;
