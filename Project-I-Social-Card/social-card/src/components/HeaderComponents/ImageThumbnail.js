import React from 'react';
import './Header.css';

const ImageThumbnail = (props) => (
  <div className='logo-container'>
    <img src={props.url} alt='Project Logo'/>
  </div>
);

export default ImageThumbnail;
