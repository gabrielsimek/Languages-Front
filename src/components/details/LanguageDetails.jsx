import React from 'react';
import { useLanguage } from '../../state/languages';
const LanguageDetails = () => {
  const [language, loading] = useLanguage();

  if(loading) return <h1>Loading...</h1>;
  return (
    <article>
      <h2>{language.name}</h2>
      <img src={language.logo} alt={`${language.name} logo`}/>
      <p>Designed By: {language.designedBy}</p>
      <p>First Appeared: {language.firstAppeared}</p>
      <a href={language.website}>Website Link</a>
    </article>
  );
};

export default LanguageDetails;
