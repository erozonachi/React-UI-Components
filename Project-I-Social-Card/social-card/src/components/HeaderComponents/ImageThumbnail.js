import React from 'react';
import './Header.css';

const ImageThumbnail = (props) => (
  <div>
    <img src={props.url} alt='Project Logo'/>
  </div>
);

export default ImageThumbnail;
