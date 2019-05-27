import React from 'react';
import './Footer.css';
import CommentIcon from '@material-ui/icons/ModeCommentOutlined';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import UnreadIcon from '@material-ui/icons/MarkunreadOutlined';

const Footer = () => (
  <div className='footer-container'>
    <span>
      <CommentIcon />
    </span>
    <span>
      <AutorenewIcon />&nbsp;6
    </span>
    <span>
      <FavoriteIcon />&nbsp;4
    </span>
    <span>
      <UnreadIcon />
    </span>
  </div>
);

export default Footer;
