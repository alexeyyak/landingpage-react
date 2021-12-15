import React from 'react';
import ReactPlayer from 'react-player';

// components
import Button from '../Button/index';

import frame from '../../assets/img/Frame.png';

export default function FirstSection() {
  return (
    <section className='firstSection'>
      <div className='main__desc'>
        <h1 className='main__desc-title'>
          Many reasons to get up and start to get back in the business
        </h1>
        <p className='main__desc-text'>
          The harder you work for something, the greater you’ll
          <br /> feel when you achieve it.
        </p>
        <div className='main__btns'>
          <Button cName='btn' name='learn more' />
          <Button cName='btn-transparent' name='demo' />
        </div>
      </div>
      <div className='main__video'>
        <ReactPlayer
          className='reactPlayer'
          width='140'
          height='80'
          url='https://www.youtube.com/watch?v=knX7NkJILhs&ab_channel=BusinessInsider'
          controls
        />

        <p className='main__video-desc'>
          The harder you work for something, the greater <br /> you’ll feel when
          you achieve it.
          <a href='https://www.youtube.com/watch?v=knX7NkJILhs&ab_channel=BusinessInsider'>
            Watch prewiew
          </a>
        </p>
      </div>
      <img className='main__img' src={frame} alt='' />
    </section>
  );
}
