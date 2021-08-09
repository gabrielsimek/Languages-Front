import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
      
    <header className="Header">
      <h1>Coding Languages</h1>
      <NavLink to="/add">Add a Language</NavLink>
      <NavLink to="/">See all Languages</NavLink>


    </header>
  );
};


export default Header;
