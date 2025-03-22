import React, { useState, useEffect } from 'react';
import './App.css';
import { encode } from 'qss';
import { motion } from 'framer-motion';

const Linkpreviewer = ({ url, children }) => {
  const width = 200;
  const height = 125;

  const params = encode({
    url,
    screenshot: true,
    meta: false,
    embed: 'screenshot.url',
    colorscheme: 'dark',
    'viewport.isMobile': true,
    'viewport.deviceScaleFactor': 1,
    'viewport.width': width * 3,
    'viewport.height': height * 3
  });

  const [isMounted, setIsMounted] = useState(false)
  const [show, setShow] = useState(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const src = `https://api.microlink.io/?${params}`;

  const dropIn = {
    hidden: {
      y : '-10vh',
      opacity: 0
    },
    visible: {
      y : 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        damping: 25,
        stiffness: 500
      },
    },
    exit: {
      y : '-100vh',
      opacity: 0,
    }
  }
  return (
    <div 
      style={{position: 'relative', display: 'inline-block'}}
    >
      {isMounted && show ? (
        <motion.div
          initial='hidden'
          animate='visible'
          exit='exit'
          variants={dropIn}
          style={{position: 'absolute', zIndex: 10, top: '150px', left: '-60px',backgroundColor:'transparent'}}
        >
          <motion.img src={src} alt={url} width={width} height={height} />
        </motion.div>
      ) : null}
      <a href='url' target='_blank' className='pointer' onMouseEnter={() => setShow(true)} onMouseLeave ={() => setShow(false)}>
        {children}</a> 
    </div>
  );
};

export default Linkpreviewer;