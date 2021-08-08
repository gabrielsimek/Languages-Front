import React from 'react';
import { useHistory } from 'react-router-dom';
import LanguageEdit from '../common/LanguageEdit';
import useAdd from '../../state/add.js';
// import { addLanguage } from '../../services/languagesApi';
const LanguageAddPage = () => {
  const [name, logo, designedBy, firstAppeared, website, handleChange, handleSubmit] = useAdd();
  return <LanguageEdit 
    name={name} logo={logo} 
    designedBy={designedBy}
    firstAppeared={firstAppeared}
    website={website}
    onChange={handleChange}
    onSubmit={handleSubmit}
  />;
};

export default LanguageAddPage;
