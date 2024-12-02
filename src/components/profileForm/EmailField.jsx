import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const EmailField = ({ formData, handleInputChange }) => {
  return (
    <div className="name">
  <h3>
        Email address <span style={{ color: 'red' }}>*</span>
      </h3>
      <div>
        <span className="emailIcon">
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
        <input
          type="email"
          name="email"
          className="emailfield"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default EmailField;
