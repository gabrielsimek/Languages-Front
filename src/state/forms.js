import { useState } from 'react';
import { useHistory } from 'react-router';
import { addLanguage } from '../services/languagesApi';

const useForm = () => {
  const [name, setName] = useState('');
  const [logo, setLogo] = useState('');
  const [designedBy, setDesignedBy] = useState('');
  const [firstAppeared, setFirstAppeared] = useState('');
  const [website, setWebsite] = useState('');
  const history = useHistory();

  const handleChange = ({ target }) => {
    if(target.name === 'name') setName(target.value);
    if(target.name === 'logo')  setLogo(target.value);
    if(target.name === 'designedBy') setDesignedBy(target.value);
    if(target.name === 'firstAppeared') setFirstAppeared(target.value);
    if(target.name === 'website') setWebsite(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newLanguage = await addLanguage({ name, logo, designedBy, firstAppeared, website });
    history.push(`/${newLanguage.id}`);
  };
  
  return [name, logo, designedBy, 
    firstAppeared, website, 
    handleChange, handleSubmit];
};

export default useForm;

