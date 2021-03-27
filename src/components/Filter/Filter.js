import React from 'react';
import PropTypes from 'prop-types';
import './Filter.scss';

const Filter = ({ value, handleInput }) => {
  return (
    <label>
      <p>Find contacts by name</p>
      <input
        className="Filter__input"
        type="text"
        onChange={handleInput}
        name="filter"
        value={value}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  handleInput: PropTypes.func.isRequired,
};

export default Filter;
