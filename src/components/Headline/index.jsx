import React from 'react';

import Button from '../Button/index';

import svg from '../../assets/img/headline.svg';

export default function Headline() {
  return (
    <div className='headline'>
      <h1>
        Create your <span> next project</span> with startup <br />
        framework
      </h1>
      <Button cName='btn' name='get started' />
      <img src={svg} alt='' />
    </div>
  );
}
