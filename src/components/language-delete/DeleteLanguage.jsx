import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { deleteLanguage } from '../../services/languagesApi';
import './DeleteLanguage.css';
const LanguageDelete = ({ id, name }) => {
  const history = useHistory();
  const handleDelete = async (id) => {
    confirm(`Are you sure you want to delete ${name}`);
    const deletedLanguage = await deleteLanguage(id);
    alert(`${deletedLanguage.name} removed`);
    history.push('/');
  };  
  return <button className="button" onClick={() => handleDelete(id)}>Delete</button>;
};

export default LanguageDelete;
LanguageDelete.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};
