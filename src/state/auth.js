import React, { useState } from 'react';

const useAuth = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target }) => {
    if(target.name === 'name') setName(target.value);
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
  };

  return [name, email, password, handleChange, handleSubmit];
};

export default useAuth;
