import React from 'react';

const UserNameField = ({ formData, handleInputChange }) => {
  return (
    <div className="name">
      Username
      <div className="username">
        <input
          type="text"
          name="username"
          className="userfield"
          placeholder="Enter your username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default UserNameField;
