import React from 'react';
import './Header.css';
import './ImageThumbnail';
import './HeaderTitle';
import './HeaderContent';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const headerInfo = {
  url: 'https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png',
  title: 'Lambda School',
  handle: '@LambdaSchool',
  timeStamp: '26 jan',
  text: 'Let\'s learn React by building simple interfaces with components. Don\'t try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React.',
}

const HeaderContainer = () => (
  <section className='header-container'>
    <ImageThumbnail url={headerInfo.url} />
    <div className='text-content'>
      <HeaderTitle title={headerInfo.title} handle={headerInfo.handle} timeStamp={headerInfo.timeStamp} />
      <HeaderContent text={headerInfo.text} />
    </div>
  </section>
);

export default HeaderContainer;
