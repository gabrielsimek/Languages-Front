import React from 'react';
import { useLanguages } from '../../state/languages';
import LanguageList from './LanguageList';
const LanguagePage = () => {
  const [languages, loading] = useLanguages();
  //set loading, set languages state [] useEffect render initial items
  if(loading) return <h1>Loading..</h1>;
  return <LanguageList languages={languages}/>;
};

export default LanguagePage;
