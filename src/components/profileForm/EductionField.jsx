import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faGraduationCap, faTrophy } from '@fortawesome/free-solid-svg-icons';

const EducationField = ({ education, handleEducationChange }) => {
  const [errors, setErrors] = useState(education.map(() => ({})));

  const validateField = (fieldName, value) => {
    let errorMessage = '';
    switch (fieldName) {
      case 'institution':
        if (!value || value.trim().length < 3) {
          errorMessage = 'Institution name must be at least 3 characters long.';
        }
        break;
      case 'degree':
        if (!value || value.trim().length < 3) {
          errorMessage = 'Degree must be at least 3 characters long.';
        }
        break;
      case 'startDate':
      case 'endDate':
        if (!value) {
          errorMessage = 'This date field is required.';
        }
        break;
      case 'achievements':
        if (value.trim().length > 200) {
          errorMessage = 'Achievements cannot exceed 200 characters.';
        }
        break;
      default:
        break;
    }
    return errorMessage;
  };

  const handleInputChange = (type, index, fieldName, value) => {
    const error = validateField(fieldName, value);

    setErrors((prevErrors) => {
      const updatedErrors = [...prevErrors];
      updatedErrors[index] = {
        ...updatedErrors[index],
        [fieldName]: error,
      };
      return updatedErrors;
    });

    handleEducationChange(type, index, fieldName, value);
  };

  const handleRemove = (index) => {
    handleEducationChange('remove', index);
    setErrors((prevErrors) => prevErrors.filter((_, i) => i !== index)); // Remove associated errors
  };

  const handleAdd = () => {
    handleEducationChange('add');
    setErrors((prevErrors) => [...prevErrors, {}]); // Add an empty error object for the new entry
  };

  return (
    <div className="EducationField">
      <h3>
        Education <span style={{ color: 'red' }}>*</span>
      </h3>

      {education.map((edu, index) => (
        <div key={index} className="education-entry">
          <div className="educationdiv">
            <label>Institution Name:</label>
            <FontAwesomeIcon icon={faSchool} className="common2" />
            <input
              type="text"
              name="institution"
              className="common"
              placeholder="Institution"
              value={edu.institution}
              onChange={(e) =>
                handleInputChange('update', index, 'institution', e.target.value)
              }
              required
            />
            {errors[index]?.institution && (
              <span className="error-message">{errors[index].institution}</span>
            )}
          </div>

          <div>
            <label>Degree:</label>
            <FontAwesomeIcon icon={faGraduationCap} className="common4" />
            <input
              type="text"
              name="degree"
              className="common"
              placeholder="Educational level"
              value={edu.degree}
              onChange={(e) =>
                handleInputChange('update', index, 'degree', e.target.value)
              }
              required
            />
            {errors[index]?.degree && (
              <span className="error-message">{errors[index].degree}</span>
            )}
          </div>

          <div>
            <label>Start Date:</label>
            <input
              type="date"
              name="startDate"
              className="common"
              value={edu.startDate}
              onChange={(e) =>
                handleInputChange('update', index, 'startDate', e.target.value)
              }
              required
            />
            {errors[index]?.startDate && (
              <span className="error-message">{errors[index].startDate}</span>
            )}

            <label>End Date:</label>
            <input
              type="date"
              name="endDate"
              className="common"
              value={edu.endDate}
              onChange={(e) =>
                handleInputChange('update', index, 'endDate', e.target.value)
              }
              required
            />
            {errors[index]?.endDate && (
              <span className="error-message">{errors[index].endDate}</span>
            )}
          </div>

          <div>
            <label>Achievements:</label>
            <FontAwesomeIcon icon={faTrophy} className="common5" />
            <textarea
              placeholder="Achievements"
              name="achievements"
              className="common"
              value={edu.achievements}
              onChange={(e) =>
                handleInputChange('update', index, 'achievements', e.target.value)
              }
              required
            />
            {errors[index]?.achievements && (
              <span className="error-message">{errors[index].achievements}</span>
            )}
          </div>

          <button
            type="button"
            onClick={() => handleRemove(index)}
            className="education"
          >
            Remove
          </button>
        </div>
      ))}

      {education.length === 0 && (
        <button type="button" onClick={handleAdd} className="addEducation">
          Add Education
        </button>
      )}
    </div>
  );
};

export default EducationField;
