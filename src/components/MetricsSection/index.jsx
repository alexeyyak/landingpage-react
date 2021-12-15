import React from 'react';

import './MetricsSection.scss';

export default function MetricsSection() {
  const plusesArr = [
    { title: '100+', desc: `5 Reasons To  Purchase  Desktop Computers` },
    {
      title: '43,000+',
      desc: `3 Simple Ways To Save A Bunch Of Money When Buying A New Computer`,
    },
    {
      title: '30+',
      desc: 'A Discount Toner Cartridge Is Better Than Ever And You Will Save 50 Or More',
    },
  ];
  return (
    <div className='metricsSection'>
      <div className='mericsSection__desc'>
        <h1>
          3 Simple Ways To <span>Save</span> A Bunch
          <br /> Of <span>Money</span> When Buying A New Computer
        </h1>
        <p>
          Fully customizable and neatly organized components
          <br /> will help you work faster without limiting creative freedom.
        </p>
      </div>
      <div className='metricsSection__pluses'>
        <ul>
          {plusesArr.map((item) => {
            return (
              <li>
                <h2 className='metricsSection__pluses-title'>{item.title}</h2>
                <p className='metricsSection__pluses-desc'>{item.desc}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
