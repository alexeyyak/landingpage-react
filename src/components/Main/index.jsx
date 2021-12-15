import React from 'react';

// components

import FirstSection from '../FirstSection';
import Form from '../Form';
import Frame from '../Frame';
import GraphicSection from '../GraphicSection';
import HeaderCard from '../HeaderCard';
import Headline from '../Headline';
import Information from '../Information';
import MetricsSection from '../MetricsSection';
import TwoSection from '../TwoSection/index';

export default function Main() {
  return (
    <div className='main'>
      <FirstSection />
      <Frame />
      <TwoSection />
      <GraphicSection />
      <MetricsSection />
      <Headline />
      <HeaderCard />
      <Information />
      <Form />
    </div>
  );
}
