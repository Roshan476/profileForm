import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const PasswordField = ({ formData, handleInputChange }) => {
  const [error, setError] = useState('');

  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

    if (!value) {
      return 'Password is required.';
    } else if (!passwordRegex.test(value)) {
      return 'Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character.';
    }
    return '';
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    const error = validatePassword(value);

    // Set error message for password
    setError(error);

    // Call handleInputChange for form state update
    handleInputChange(e);
  };

  return (
    <div className="name">
      <h3>
        Update Password <span style={{ color: 'red' }}>*</span>
      </h3>
      <div className="input-group">
        <FontAwesomeIcon icon={faLock} className="common1" />
        <input
          type="password"
          className="common"
          name="password"
          placeholder="Enter new password"
          value={formData.password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      {error && <span className="error-message">{error}</span>}
    </div>
  );
};

export default PasswordField;
