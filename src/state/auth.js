import React, { useState } from 'react';
import { signUp } from '../services/authServices';
const useAuth = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target }) => {
    if(target.name === 'name') setName(target.value);
    if(target.name === 'email') setEmail(target.value);
    if(target.name === 'password') setPassword(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await signUp({ name, email, password });
    console.log(user);
  };

  return [name, email, password, handleChange, handleSubmit];
};

export default useAuth;
