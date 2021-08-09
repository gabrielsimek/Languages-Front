import React from 'react';
import { useLanguages } from '../../state/languages';
import LanguageList from './LanguageList';
import './LanguagePage.css';

const LanguagePage = () => {
  const [languages, loading] = useLanguages();
  //set loading, set languages state [] useEffect render initial items
  if(loading) return <h1>Loading..</h1>;
  return (
    <div className="LanguagePage">
      <LanguageList languages={languages}/>
    </div>
  );
};

export default LanguagePage;
