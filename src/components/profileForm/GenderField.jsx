import React from 'react';

const GenderField = ({ selectedGender, handleInputChange }) => {
  return (
    <div className="name">
        <h3>
        Gender <span style={{ color: 'red' }}>*</span>
      </h3>
      <div>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={selectedGender === 'Male'}
            onChange={handleInputChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={selectedGender === 'Female'}
            onChange={handleInputChange}
          />
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Other"
            checked={selectedGender === 'Other'}
            onChange={handleInputChange}
          />
          Other
        </label>
      </div>
    </div>
  );
};

export default GenderField;
