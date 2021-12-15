import React from 'react';

import './Footer.scss';

export default function Section(props) {
  return (
    <div className='footer-grid-section'>
      <h4>{props.title}</h4>
      <a href='/#'>First page</a>
      <a href='/#'>Second page</a>
      <a href='/#'>Third page</a>
      <a href='/#'>Fourth page</a>
    </div>
  );
}
