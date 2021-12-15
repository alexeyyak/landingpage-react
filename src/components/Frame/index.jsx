import React from 'react';

import icon from '../../assets/img/Frames/profitwell.svg';
import icon1 from '../../assets/img/Frames/appcues.svg';
import icon2 from '../../assets/img/Frames/shipbob.svg';
import icon3 from '../../assets/img/Frames/bench.svg';
import icon4 from '../../assets/img/Frames/subbly.svg';
import icon5 from '../../assets/img/Frames/demio.svg';

export default function Frame() {
  const frages = [
    { url: icon },
    { url: icon1 },
    { url: icon2 },
    { url: icon3 },
    { url: icon4 },
    { url: icon5 },
  ];

  return (
    <>
      <section className='frameSection'>
        {frages.map((item) => {
          return (
            <img
              className='frameSection-icons'
              src={item.url}
              alt='frame-icon'
            />
          );
        })}
      </section>
    </>
  );
}
