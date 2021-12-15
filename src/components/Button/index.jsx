import React from 'react';

import '../../index.scss';

export default function Button(props) {
  return (
    <>
      <button className={props.cName}>{props.name}</button>
    </>
  );
}
