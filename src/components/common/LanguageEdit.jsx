import React from 'react';
import useForm from '../../state/forms';
import PropTypes from 'prop-types';

const LanguageEdit = () => {
  const [name, logo, designedBy, firstAppeared, website, onChange, onSubmit] = useForm();
  return (
    <form onSubmit={onSubmit}
      style={{ display: 'flex', flexDirection: 'column' }}>
      <label >
        name
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
        />
      </label>
      <label >
        logo
        <input
          type="text"
          name="logo"
          value={logo}
          onChange={onChange}
        />
      </label>
      <label >
        designedBy
        <input
          type="text"
          name="designedBy"
          value={designedBy}
          onChange={onChange}
        />
      </label>
      <label >
        firstAppeared
        <input
          type="text"
          name="firstAppeared"
          value={firstAppeared}
          onChange={onChange}
        />
      </label>
      <label >
        website
        <input
          type="text"
          name="website"
          value={website}
          onChange={onChange}
        />
      </label>
      <button>Submit</button>
    </form>
  );
};

// LanguageEdit.propTypes = {
//   onSubmit: PropTypes.func.isRequired
// };

export default LanguageEdit;
