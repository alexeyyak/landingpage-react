import React from 'react';

import svg1 from '../../assets/img/features/1.svg';
import svg2 from '../../assets/img/features/2.svg';
import svg3 from '../../assets/img/features/3.svg';
import svg4 from '../../assets/img/features/4.svg';
import svg5 from '../../assets/img/features/5.svg';
import svg6 from '../../assets/img/features/6.svg';

export default function TwoSection() {
  const features = [
    {
      id: 1,
      name: 'Ecstatic elegance',
      desc: 'Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add.',
      logo: svg1,
    },
    {
      id: 2,
      name: 'Folly words widow',
      desc: 'Effect if in up no depend seemed. Ecstatic elegance gay but disposed. We me rent been part what.',
      logo: svg2,
    },
    {
      id: 3,
      name: 'Possible procured trifling',
      desc: 'We me rent been part what. An concluded sportsman offending so provision mr education.',
      logo: svg3,
    },
    {
      id: 4,
      name: 'Open game',
      desc: 'Shy merits say advice ten before lovers innate add. She cordially behaviour can attempted estimable.',
      logo: svg4,
    },
    {
      id: 5,
      name: 'Endeavor',
      desc: 'Improve ashamed married expense bed her comfort pursuit mrs. Four time took ye your as fail lady. ',
      logo: svg5,
    },
    {
      id: 6,
      name: 'Comfort pursuit',
      desc: 'Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug.',
      logo: svg6,
    },
  ];

  return (
    <div className='twoSection'>
      <div className='twoSection__desc'>
        <h1 className='twoSection__desc-title'>Your choice</h1>
        <p className='twoSection__desc-text'>
          There are many reasons to get down and start to get depressed about
          your situation.
        </p>
      </div>
      <ul className='twoSection__features'>
        {features.map((item) => {
          return (
            <li className='twoSection__features-block' key={item.id}>
              <img
                className='twoSection__features-logo'
                src={item.logo}
                alt='feature-logo'
              />
              <div className='twoSection__features-desc'>
                <h4>{item.name}</h4>
                <p>{item.desc}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
