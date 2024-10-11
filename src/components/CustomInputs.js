import React from 'react';

export const CustomSelect = ({ id, value, onChange, options, disabled, placeholder }) => {
  return (
    <div className="custom-select-container">
      <select
        id={id}
        value={value}
        onChange={onChange}
        className="custom-select"
        disabled={disabled}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="custom-select-arrow"></div>
    </div>
  );
};