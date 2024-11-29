import React from 'react'

const ProfileSection = ({profilePhoto,handleImageChange}) => {
  return (
    <div className='profilesection'>
          Profile photo
          <div className='profile'>
            <img src={profilePhoto} alt="Profile" className='profile-photo' />
            <input
              type="file"
              accept="image/*"
              className='replacebottom'
              onChange={handleImageChange}
             />
          </div>
        </div>
  )
}

export default ProfileSection
