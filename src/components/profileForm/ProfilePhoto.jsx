import React from 'react';
import bluetick from '../assets/bluetick.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const ProfilePhoto = ({ profilePhoto, handleImageChange, fullName, email }) => {
  return (
    <div className="profile-down">
      <div className="button">
        <div>
          <a href="http://">
            <FontAwesomeIcon icon={faLink} className="falink" />
            Copy link
          </a>
        </div>
        <div>
          <a href="http://">View Profile</a>
        </div>
      </div>
      <div className="image-box">
        <div>
          <img src={profilePhoto} alt="Profile" className="profile-photo" />
          <p className="bluetick">
            <img src={bluetick} alt="Blue tick" />
          </p>
        </div>
        <div className="profileSection">
          <div className="profile-tittle">
            <p className="tittle">{fullName.trim() || 'Elon Musk'}</p>
            <p>
              <a href={`mailto:${email || 'elon@musk.com'}`}>{email || 'elon@musk.com'}</a>
            </p>
          </div>
          <div className="profile-change">
            <input
              type="file"
              accept="image/*"
              className="replacebottom"
              onChange={handleImageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePhoto;
