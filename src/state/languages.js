import { useState, useEffect } from 'react';
import { fetchLanguages } from '../services/languagesApi';
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
    
};
export { useLanguages };
