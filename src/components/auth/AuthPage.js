import React from 'react';
import useAuth from '../../state/auth';

const AuthPage = () => {

  const [name, email, password, onChange, onSubmit] = useAuth();
  return (
    <form onSubmit={onSubmit}>
      <label>
        <span>Name</span>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
        />
      </label>
      <label>
        <span>Email</span>
        <input
          type="text"
          name="email"
          value={email}
          onChange={onChange}
        />
      </label>
      <label>
        <span>Password</span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
        />
      </label>
      <button>Submit</button>

    </form>
  );
};

export default AuthPage;
