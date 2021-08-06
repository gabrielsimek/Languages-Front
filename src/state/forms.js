import { useState } from 'react';

const useForm = () => {
  const [name, setName] = useState('');
  const [logo, setLogo] = useState('');
  const [designedBy, setDesignedBy] = useState('');
  const [firstAppeared, setFirstAppeared] = useState('');
  const [website, setWebsite] = useState('');

  const handleChange = ({ target }) => {
    if(target.name === 'name') setName(target.value);
    if(target.name === 'logo')  setLogo(target.value);
    if(target.name === 'designedBy') setDesignedBy(target.value);
    if(target.name === 'firstAppeared') setFirstAppeared(target.value);
    if(target.name === 'website') setWebsite(target.value);
  };
  
  return [name, logo, designedBy, firstAppeared, website, handleChange];
};

export default useForm;

