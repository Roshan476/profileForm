import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const SkillsField = ({ skills, handleSkillsChange }) => {
  const [showAddButton, setShowAddButton] = useState(skills.length === 0);
  const [error, setError] = useState('');

  // Validate skill: Only letters and spaces allowed
  const validateSkill = (value) => {
    const regex = /^[A-Za-z\s]+$/;
    if (!value) {
      return 'Skill is required';
    } else if (!regex.test(value)) {
      return 'Skill must contain only letters and spaces';
    }
    return '';
  };

  const handleRemove = (index) => {
    handleSkillsChange('remove', index);
    setShowAddButton(true); // Show Add button after a field is removed
  };

  const handleAdd = () => {
    if (showAddButton) {
      handleSkillsChange('add'); // Add a new entry
      setShowAddButton(false); // Hide the Add button
    }
  };

  const handleSkillChange = (index, e) => {
    const errorMessage = validateSkill(e.target.value);
    setError(errorMessage);

    if (!errorMessage) {
      handleSkillsChange('update', index, e.target.value);
    }
  };

  return (
    <div className="name">
      <h3>
        Skills <span style={{ color: 'red' }}>*</span>
      </h3>
      {skills.map((skill, index) => (
        <div key={index} className="skill-entry">
          <div className="input-group">
            <FontAwesomeIcon icon={faEdit} className="common1" />
            <input
              className="common"
              type="text"
              placeholder="Enter skill"
              value={skill}
              onChange={(e) => handleSkillChange(index, e)}
            />
          </div>
          <button type="button" onClick={() => handleRemove(index)} className="addremoveskill">
            Remove
          </button>
        </div>
      ))}
      {error && <div className="error-message">{error}</div>}
      {showAddButton && (
        <button type="button" onClick={handleAdd} className="addremoveskill">
          Add Skill
        </button>
      )}
    </div>
  );
};

export default SkillsField;
