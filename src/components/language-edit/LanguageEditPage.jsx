import React from 'react';

import { useLanguage } from '../../state/languages';
import LanguageEdit from '../common/LanguageForm';
import LanguageDelete from '../language-delete/DeleteLanguage';

const LanguageEditPage = () => {
  const [language, loading] = useLanguage();
  if(loading) return <h1>Loading...</h1>;
  return (<>
    <LanguageEdit language={language}  />
    <LanguageDelete name={language.name} id={language.id} />
  </>);
  
};

export default LanguageEditPage;
