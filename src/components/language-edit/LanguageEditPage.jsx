import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchLanguage } from '../../services/languagesApi';
import LanguageEdit from '../common/LanguageEdit';

const LanguageEditPage = () => {
  const [language, setLanguage] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    fetchLanguage(id)
      .then(language => setLanguage(language))
      .finally(() => setLoading(false));
  }, []);  
  if(loading) return <h1>Loading...</h1>;
  return <LanguageEdit language={language} />;
};

export default LanguageEditPage;
