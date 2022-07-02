import React from 'react';

const Filter = ({ state, onChange }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={state.filter}
          onInput={onChange}
        />
      </label>
    </div>
  );
};

export default Filter;
