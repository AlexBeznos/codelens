import React from 'react';
import './styles.css';

function Avatar({ src, alt }) {
  return <img className="avatar-image" src={src} alt={alt} />;
}

export default Avatar;
