import { useState } from 'react';
import { useHistory } from 'react-router';
import { addLanguage, editLanguage } from '../services/languagesApi';

const useForm = (language) => {
 
  const [name, setName] = useState(language ? language.name : '');
  const [logo, setLogo] = useState(language ? language.logo : '');
  const [designedBy, setDesignedBy] = useState(language ? language.designedBy : '');
  const [firstAppeared, setFirstAppeared] = useState(language ? language.firstAppeared : '');
  const [website, setWebsite] = useState(language ? language.website : '');
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
   
    if(language) {
      await editLanguage(language.id, { name, logo, designedBy, firstAppeared, website });
      history.push(`/${language.id}`);
    } else {
      const newLanguage = await addLanguage({ name, logo, designedBy, firstAppeared, website });
      history.push(`/${newLanguage.id}`);
    }

   
  };
  
  return [name, logo, designedBy, 
    firstAppeared, website, 
    handleChange, handleSubmit];
};

export default useForm;

