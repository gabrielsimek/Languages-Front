import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './LanguageItem.css';

const LanguageItem = ({ id, name, designedBy, firstAppeared, logo }) => {
  return (
    <li className="LanguageItem">
      <Link 
        to={`/${id}`}>
        <figure>
          <img src={logo} alt={`${name} logo`}/>
          <figcaption>
            <h2>{name}</h2>
            <p>Designed By: {designedBy}</p>
            <p>First Appeared: {firstAppeared}</p>
          </figcaption>
        </figure>
      </Link>
    </li>
  );
};

LanguageItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  designedBy: PropTypes.string.isRequired,
  firstAppeared: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired
};

export default LanguageItem;
