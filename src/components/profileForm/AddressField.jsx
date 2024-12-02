import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // Import the address icon

const AddressField = ({ formData, handleInputChange }) => {
  return (
    <div className="name">
      <h3>
        Address <span style={{ color: 'red' }}>*</span>
      </h3>
      <div className="input-with-icon">
        <span className="common1">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </span>
        <input
          type="text"
          className="common"
          name="address"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default AddressField;
