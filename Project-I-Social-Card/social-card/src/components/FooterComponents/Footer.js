import React from 'react';
import './Footer.css';
import CommentIcon from '@material-ui/icons/ModeCommentOutlined';
import AutorenewIcon from '@material-ui/icons/SyncOutlined';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import UnreadIcon from '@material-ui/icons/MarkunreadOutlined';

const Footer = () => (
  <div className='footer-container'>
      <CommentIcon className='icon' onClick={() => alert('You left a comment')} />
    <span>
      <AutorenewIcon onClick={() => alert('You shared this content')} />&nbsp;6
    </span>
    <span>
      <FavoriteIcon onClick={() => alert('You liked this content')} />&nbsp;4
    </span>
      <UnreadIcon onClick={() => alert('You\'ve read this content')} className='icon' />
  </div>
);

export default Footer;
