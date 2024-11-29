import React from 'react';
import './ProfileForm.css';
import { useFormData } from './formDataState';
import ProfilePhoto from './ProfilePhoto';
import NameField from './NameField';
import EmailField from './EmailField';
import UserNameField from './UserNameField';
import ProfileSection from './ProfileSection';
import Footer from './Footer';

const ProfileForm = () => {
  const { formData, handleInputChange, handleImageChange, handleSave } = useFormData();

  return (
    <div className="upc">
      <div className="gradiant"></div>
      <div className="profile-down">
        <ProfilePhoto profilePhoto={formData.profilePhoto} />
      </div>
      <div className="fieldbox">
        <NameField formData={formData} handleInputChange={handleInputChange} />
        <EmailField formData={formData} handleInputChange={handleInputChange} />
        <UserNameField formData={formData} handleInputChange={handleInputChange} />
        <ProfileSection
          profilePhoto={formData.profilePhoto}
          handleImageChange={handleImageChange}
        />
      </div>
      <Footer handleSave={handleSave} />
    </div>
  );
};

export default ProfileForm;
