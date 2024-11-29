import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Footer = ({ handleSave }) => {
  return (
    <div className="footer">
      <div className="cancel">
        <button className="trash-button">
          <FontAwesomeIcon icon={faTrash} className="trash" />
          Delete User
        </button>
      </div>
      <div className="bottom">
        <button className="cancel-button">Cancel</button>
        <button className="save-button" onClick={handleSave}>
          Save changes
        </button>
      </div>
    </div>
  );
};

export default Footer;
