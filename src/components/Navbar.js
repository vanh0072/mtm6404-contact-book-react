import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
      <Link to="/">Contact List</Link>
      <Link to="/">Add New Contact</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
