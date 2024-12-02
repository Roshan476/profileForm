import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const NameField = ({ formData, handleInputChange }) => {
  const [errors, setErrors] = useState({ firstName: '', lastName: '' });

  const validateName = (fieldName, value) => {
    // Regex for alphabetic characters and spaces only
    const nameRegex = /^[a-zA-Z\s]*$/;

    if (!value) {
      return `${fieldName} is required.`;
    } else if (!nameRegex.test(value)) {
      return `${fieldName} should only contain letters and spaces.`;
    }
    return '';
  };

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    const error = validateName(name, value);

    // Set error message for the respective field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    // Call handleInputChange for form state update
    handleInputChange(e);
  };

  return (
    <div className="name">
      <h3>
        Name <span style={{ color: 'red' }}>*</span>
      </h3>
      <div className="inputfield">
        <div className="input-group">
          <FontAwesomeIcon icon={faUser} className="com-name" />
          <input
            type="text"
            name="firstName"
            className="profilename"
            placeholder="Enter your Firstname"
            value={formData.firstName}
            onChange={handleNameChange}
            required
          />
        </div>
        {errors.firstName && <span className="error-message">{errors.firstName}</span>}

        <div className="input-group">
          <FontAwesomeIcon icon={faUser} className="com-name" />
          <input
            type="text"
            name="lastName"
            className="profilename"
            placeholder="Enter your Lastname"
            value={formData.lastName}
            onChange={handleNameChange}
            required
          />
        </div>
        {errors.lastName && <span className="error-message">{errors.lastName}</span>}
      </div>
    </div>
  );
};

export default NameField;
