import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchLanguage, fetchLanguages } from '../services/languagesApi';
const useLanguages = () => {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    fetchLanguages()
      .then(languages => setLanguages(languages))
      .finally(() => setLoading(false));
  }, []);
  
  return [languages, loading];
};


const useLanguage = () => {
  const [language, setLanguage] = useState([]);
  const [loading, setLoading] = useState(true);
  //   const { id } = useParams();
  const id = 1;
  useEffect(() => {
    fetchLanguage(id)
      .then(language => setLanguage(language))
      .finally(() => setLoading(false));
  }, []);
    
  return [language, loading];
};
export { useLanguages, useLanguage };
