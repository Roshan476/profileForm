import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons'; // Import the clipboard icon

const DescriptionField = ({ formData, handleInputChange }) => {
  return (
    <div className="name">
      <h3>
        Description <span style={{ color: 'red' }}>*</span>
      </h3>
      <div className="input-with-icon">
        <span className="common1">
          <FontAwesomeIcon icon={faClipboard} />
        </span>
        <textarea
          className="common"
          name="description"
          placeholder="Enter a description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default DescriptionField;
