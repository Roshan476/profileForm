import { useState } from 'react';
import profile from '../assets/dog.jpg';

export const useFormData = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    profilePhoto: profile,
    gender: '',
    skills: [''],
    password: '',
    address: '',
    description: '',
    dateOfBirth: '',
    education: [
      {
        institution: '',
        degree: '',
        startDate: '',
        endDate: '',
        achievements: '',
      },
    ],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, profilePhoto: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEducationChange = (type, index, field, value) => {
    const updatedEducation = [...formData.education];
    if (type === 'update') {
      updatedEducation[index][field] = value;
    } else if (type === 'remove') {
      updatedEducation.splice(index, 1);
    } else if (type === 'add') {
      updatedEducation.push({
        institution: '',
        degree: '',
        startDate: '',
        endDate: '',
        achievements: '',
      });
    }
    setFormData({ ...formData, education: updatedEducation });
  };
  

  const handleSkillsChange = (type, index, value) => {
    const updatedSkills = [...formData.skills];
    if (type === 'update') {
      updatedSkills[index] = value;
    } else if (type === 'remove') {
      updatedSkills.splice(index, 1);
    } else if (type === 'add') {
      updatedSkills.push('skills');
    }
    setFormData({ ...formData, skills: updatedSkills });
  };

  const handleSave = (e) => {
    e.preventDefault();
  
    // Validate top-level required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'address', 'dateOfBirth', 'description', 'gender'];
    const missingFields = requiredFields.filter((field) => !formData[field]);
  
    // Validate nested education fields
    const educationErrors = formData.education.map((edu, index) => {
      const missingEduFields = [];
      if (!edu.institution || edu.institution.trim() === '') missingEduFields.push('institution');
      if (!edu.degree || edu.degree.trim() === '') missingEduFields.push('degree');
      if (!edu.startDate) missingEduFields.push('startDate');
      if (!edu.endDate) missingEduFields.push('endDate');
      if (!edu.achievements || edu.achievements.trim() === '') missingEduFields.push('achievements');
  
      return { index, missingEduFields };
    }).filter((edu) => edu.missingEduFields.length > 0); // Only include education entries with missing fields
  
    // Combine errors
    if (missingFields.length > 0 || educationErrors.length > 0) {
      let errorMessage = '';
  
      if (missingFields.length > 0) {
        errorMessage += `Please fill in the required fields: ${missingFields.join(', ')}.\n`;
      }
  
      if (educationErrors.length > 0) {
        educationErrors.forEach(({ index, missingEduFields }) => {
          errorMessage += `Education entry ${index + 1} is missing: ${missingEduFields.join(', ')}.\n`;
        });
      }
  
      alert(errorMessage.trim());
      return;
    }
  
    // If no errors, submit the form
    console.log('Form submitted successfully:', JSON.stringify(formData, null, 2));
  };
  

  return {
    formData,
    handleInputChange,
    handleImageChange,
    handleEducationChange,
    handleSkillsChange,
    handleSave,
  };
};
