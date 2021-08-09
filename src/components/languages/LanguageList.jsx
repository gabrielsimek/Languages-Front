import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LanguageItem from './LanguageItem';
import './LanguageList.css';
const LanguageList = ({ languages }) => {
  const languageItems = languages.map(language => ( 
    

    <LanguageItem 
      key={language.id}
      {...language} />
  ));

  return <ul className="LanguageList">{languageItems}</ul>;
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

