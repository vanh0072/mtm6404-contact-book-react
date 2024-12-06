import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Contact Book</h2>
      <nav>
        <Link to="/contact-list">Contact List</Link>
        <Link to="/add-contact">Add New Contact</Link>
      </nav>
    </div>
  );
};

export default Home;
