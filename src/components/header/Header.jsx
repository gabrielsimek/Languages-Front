import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
      
    <header
      style={{
        padding: '20px',
        borderBottom: '1px solid lightgray',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h1>Coding Languages</h1>
      <NavLink to="/add">Add a Language</NavLink>
      <NavLink to="/">See all Languages</NavLink>


    </header>
  );
};


export default Header;
