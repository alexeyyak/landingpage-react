import React from 'react';

import img from '../../assets/img/Image.png';
import star from '../../assets/img/star2.png';
import Button from '../Button/index';

export default function GraphicSection() {
  return (
    <div className='graphSecton'>
      <div className='graphSecton-desc'>
        <h1>
          Increase your
          <br />
          business <span>traffic</span>{' '}
        </h1>
        <p>
          We are committed to processing the information in order to contact you
          and talk about your project.
        </p>
        <Button cName='btn' name='learn more' />
      </div>
      <img className='graphSecton-img' src={img} alt='' />
      <img className='graphSecton-img-absolute' src={star} alt='' />
    </div>
  );
}
