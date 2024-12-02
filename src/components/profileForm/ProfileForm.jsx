import React from 'react';
import './ProfileForm.css';
import { useFormData } from './formDataState';
import ProfilePhoto from './ProfilePhoto';
import NameField from './NameField';
import EmailField from './EmailField';
import Footer from './Footer';
import GenderField from './GenderField';
import SkillsField from './SkillField';
import PasswordField from './PasswordField';
import AddressField from './AddressField';
import DescriptionField from './DescriptionField';
import DateOfBirthField from './DateOfBrithField';
import EducationField from './EductionField';

const ProfileForm = () => {
  const {
    formData,
    handleInputChange,
    handleImageChange,
    handleSkillsChange,
    handleEducationChange,
    handleSave,
  } = useFormData();

  // Full name is derived from first and last name
  const fullName = `${formData.firstName} ${formData.lastName}`;

  return (
    <div className="upc">
      <div className="gradiant"></div>
      <div className="profile-down">
        <ProfilePhoto
          profilePhoto={formData.profilePhoto}
          handleImageChange={handleImageChange}
          fullName={fullName} // Pass full name to ProfilePhoto
          email={formData.email} // Pass email to ProfilePhoto
        />
      </div>
      <div className="fieldbox">
        <NameField formData={formData} handleInputChange={handleInputChange} />
        <EmailField formData={formData} handleInputChange={handleInputChange} />
        <GenderField
          selectedGender={formData.gender}
          handleInputChange={handleInputChange}
        />
        <SkillsField
          skills={formData.skills}
          handleSkillsChange={handleSkillsChange}
        />
        <PasswordField formData={formData} handleInputChange={handleInputChange} />
        <AddressField formData={formData} handleInputChange={handleInputChange} />
        <DescriptionField formData={formData} handleInputChange={handleInputChange} />
        <DateOfBirthField formData={formData} handleInputChange={handleInputChange} />
        <EducationField education={formData.education} handleEducationChange={handleEducationChange} />
      </div>
      <Footer handleSave={handleSave} />
    </div>
  );
};

export default ProfileForm;
