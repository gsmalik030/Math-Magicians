import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navLinks = [
    { id: 1, path: '/', text: 'Home' },
    { id: 2, path: '/calculator', text: 'Calculator' },
    { id: 3, path: '/quote', text: 'Quote' },
  ];
  return (
    <nav className="navbar">
      <div className="logo">
        Math Magician
      </div>
      <ul className="navbar-list">
        {navLinks.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} className="nav-link" exact>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
