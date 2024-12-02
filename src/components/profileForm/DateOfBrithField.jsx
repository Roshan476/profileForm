import React from 'react';

const DateOfBirthField = ({ formData, handleInputChange }) => {
  return (
    <div className="name">
       <h3>
        Date of birth <span style={{ color: 'red' }}>*</span>
      </h3>
      <input
        type="date"
         className="common"
        name="dateOfBirth"
        value={formData.dateOfBirth}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default DateOfBirthField;
