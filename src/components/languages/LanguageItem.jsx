import React from 'react';
import PropTypes from 'prop-types';

const LanguageItem = ({ name, designedBy, firstAppeared, website, logo }) => {
  return (
    <figure>
      <img src={logo} alt={`${name} logo`}/>
      <figcaption>
        <h2>{name}</h2>
        <p>Designed By: {designedBy}</p>
        <p>First Appeared: {firstAppeared}</p>
        <a href={website}>Website Link</a>
      </figcaption>
    </figure>
  );
};

LanguageItem.propTypes = {
  name: PropTypes.string.isRequired,
  designedBy: PropTypes.string.isRequired,
  firstAppeared: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired
};

export default LanguageItem;
