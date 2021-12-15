import React from 'react';

import './Information.scss';

import img from '../../assets/img/Bitmap.png';
import knife from '../../assets/img/features/Swiss-knife.svg';
import lte from '../../assets/img/lte.svg';
import info1 from '../../assets/img/info1.png';
import info3 from '../../assets/img/info2.png';
import info2 from '../../assets/img/info3.png';
import star3 from '../../assets/img/star3.png';

export default function Information() {
  return (
    <div className='information'>
      <div className='information-left'>
        <div className='block'>
          <img src={img} alt='' />
        </div>

        <div className='block2'>
          <img className='info1' src={info1} alt='' />
          <img className='info2' src={info2} alt='' />
          <img className='info3' src={info3} alt='' />
        </div>
      </div>
      <div className='information-right'>
        <div className='heldFiding'>
          <h2>Help Finding Information Online</h2>
          <p>
            Fully customizable and neatly organized components <br /> will help
            you work faster without limiting creative freedom.
          </p>
        </div>
        <div className='feature'>
          <div className='featureOne'>
            <img src={knife} alt='' />
            <h5 className='feature-title'>Feature One</h5>
            <p className='feature-desc'>
              Fully customizable and neatly organized components will help you
              work faster{' '}
            </p>
          </div>
          <div className='featureTwo'>
            <img src={lte} alt='' />
            <h5 className='feature-title'>Feature Two</h5>
            <p className='feature-desc'>
              Fully customizable and neatly organized components will help you
              work faster{' '}
            </p>
          </div>
        </div>
      </div>
      <img className='star3' src={star3} alt='' />
    </div>
  );
}
