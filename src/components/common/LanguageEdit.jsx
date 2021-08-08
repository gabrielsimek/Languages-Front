import React from 'react';
import PropTypes from 'prop-types';
import useForm from '../../state/form.js';
 
const LanguageEdit = ({ language }) => {
  const [name, logo, designedBy, firstAppeared, website, onChange, onSubmit] = useForm(language);
  
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
