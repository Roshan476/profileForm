import React from 'react';

const NameField = ({ formData, handleInputChange }) => {
  return (
    <div className="name">
      Name
      <div className="inputfield">
        <input
          type="text"
          name="firstName"
          className="profilename"
          placeholder="Enter your Firstname"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          className="profilename"
          placeholder="Enter your Lastname"
          value={formData.lastName}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default NameField;
