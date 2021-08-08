import React from 'react';
import { useHistory } from 'react-router-dom';
import { deleteLanguage } from '../../services/languagesApi';

const LanguageDelete = ({ id, name }) => {
  const history = useHistory();
  const handleDelete = async (id) => {
    confirm(`Are you sure you want to delete ${name}`);
    const deletedLanguage = await deleteLanguage(id);
    alert(`${deletedLanguage.name} removed`);
    history.push('/');
  };  
  return <button onClick={() => handleDelete(id)}>Delete</button>;
};

export default LanguageDelete;
