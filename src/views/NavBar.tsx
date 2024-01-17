// NavBar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import logo from '../assets/logo.png';

function NavBar() {
  const location = useLocation();
  return (
    <nav>
      <img className="logo" src={logo} alt="Logo" />
      <ul>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === '/bridal-shower' ? 'active' : ''}>
          <Link to="/bridal-shower">Chá da Manu e Julio</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
