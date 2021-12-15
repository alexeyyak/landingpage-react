import React from 'react';

import './Form.scss';

import svg from '../../assets/img/form.svg';
import Button from '../Button';

export default function Form() {
  return (
    <div className='form'>
      <div className='form__block'>
        <h1>There are many reasons to get down</h1>
        <p className='form__block-desc'>
          There are many reasons to get down and start to get <br /> depressed
          about your situation.
        </p>
        <div className='form__block-email'>
          <input className='inpit' type='email' placeholder='Your Email' />
          <Button cName='btn' name='send' />
        </div>
        <p className='form__block-spam'>
          No spam. Only releases, updates and discounts
        </p>
      </div>
      <div className='form__img'>
        <img src={svg} alt='' />
      </div>
    </div>
  );
}
