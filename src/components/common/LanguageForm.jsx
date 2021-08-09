import React from 'react';
import PropTypes from 'prop-types';
import useForm from '../../state/form.js';
import './LanguageForm.css';
 
const LanguageEdit = ({ language }) => {
  const [name, logo, designedBy, firstAppeared, website, onChange, onSubmit] = useForm(language);

  return (
    <form className="LanguageForm" onSubmit={onSubmit}
      style={{ display: 'flex', flexDirection: 'column' }}>
      <label >
        <span>Name</span>
        <input
          required
          type="text"
          name="name"
          value={name}
          onChange={onChange}
        />
      </label>
      <label >
        <span>Logo</span>
        <input
          required
          type="text"
          name="logo"
          value={logo}
          onChange={onChange}
        />
      </label>
      <label >
        <span>Designed By</span>
        <input
          required
          type="text"
          name="designedBy"
          value={designedBy}
          onChange={onChange}
        />
      </label>
      <label >
        <span>First Appeared</span>
        <input
          required pattern = "^(0[1-9]|1[012])[/](0[1-9]|[12][0-9]|3[01])[/](19|20)\d\d$"
          type="text"
          name="firstAppeared"
          value={firstAppeared}
          onChange={onChange}
          placeholder="dd/mm/yyyy"
        />
      </label>
      <label >
        <span>Website</span>
        <input
          required
          type="text"
          name="website"
          value={website}
          onChange={onChange}
        />
      </label>
      <button>{language ? 'Update' : 'Add'}</button>
    </form>
  );
};

LanguageEdit.propTypes = {
  language: PropTypes.object
};

export default LanguageEdit;
