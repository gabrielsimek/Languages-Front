import React from 'react';
import PropTypes from 'prop-types';
import LanguageItem from './LanguageItem';

const LanguageList = ({ languages }) => {
  const languageItems = languages.map(language => ( 
    <li key={language.id}>
      <LanguageItem {...language} />
    </li>
  ));

  return <ul>{languageItems}</ul>;
};

LanguageList.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      designedBy: PropTypes.string.isRequired,
      firstAppeared: PropTypes.string.isRequired,
      website: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired    
    })
  )
};

export default LanguageList;

