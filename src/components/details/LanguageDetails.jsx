import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../state/languages';
import LanguageDelete from '../language-delete/DeleteLanguage';
const LanguageDetails = () => {
  const [language, loading] = useLanguage();

  if(loading) return <h1>Loading...</h1>;
  return (
    <>
      <article>
        <h2>{language.name}</h2>
        <img src={language.logo} alt={`${language.name} logo`}/>
        <p>Designed By: {language.designedBy}</p>
        <p>First Appeared: {language.firstAppeared}</p>
        <a href={language.website}>Website Link</a>
      </article>
      <Link to={`/edit/${language.id}`} >Edit</Link>
      <LanguageDelete name={language.name} id={language.id} />
    </>
  );
};

export default LanguageDetails;
