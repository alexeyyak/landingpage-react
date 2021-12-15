import React from 'react';

import img from '../../assets/img/card.svg';
import object from '../../assets/img/Object.svg';
import Button from '../Button/index';

import './HeaderCard.scss';

export default function HeaderCard() {
  return (
    <div className='graphSecton graphMt'>
      <div className='graphSecton-desc'>
        <h1>
          Invest property for <br /> better <span>business</span>
        </h1>
        <p>
          We are committed to processing the information in order to contact you
          and talk about your project. We are committed to processing the
          information.
        </p>
        <Button cName='btn' name='learn more' />
      </div>
      <img className='graphMt-img ' src={img} alt='' />
      <img className='graphMt-img-absolute' src={object} alt='' />
    </div>
  );
}
