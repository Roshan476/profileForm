import React from 'react';
import bluetick from '../assets/bluetick.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const ProfilePhoto = ({ profilePhoto}) => {
  return (
       <div className='profile-down'>
        <div className='image-box'>
          <img src={profilePhoto} alt="Profile" className='profile-photo'/>
          <p className='bluetick'><img src={bluetick} alt="Blue tick" /></p>
          <div className='button'>
            <div><a href="http://">
              <FontAwesomeIcon icon={faLink} className='falink' />
              Copy link</a></div>
            <div><a href="http://">View Profile</a></div>
          </div>
        </div>
        <div className='profile-tittle'>
          <p className='tittle'>Elon Musk</p>
          <p><a href="mailto:elon@musk.com">elon@musk.com</a></p>
        </div>
      </div>
  );
};

export default ProfilePhoto;
