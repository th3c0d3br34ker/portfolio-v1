import './loader.css';

import React, { useEffect, useState } from 'react';

import { Fade } from 'react-reveal';
import LoaderLogo from './loaderLogo.jsx';

const Loader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 4200);
  });

  return (
    <div className="wrapper">
      <Fade opposite when={show}>
        <LoaderLogo />
      </Fade>
    </div>
  );
};

export default Loader;
