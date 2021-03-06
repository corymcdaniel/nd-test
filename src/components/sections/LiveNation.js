import React from 'react';
import Button from '../buttons/Button';
import './LiveNation.scss';

const LiveNation = () => {
  const onOpenAccount = () => {
    console.log('page redirect?');
  };

  return (
    <div className={'ln-container'}>
      <div className={'ln-content'}>
        <img className={'ln-logo'} src={'images/livenation-logo.png'} alt={'LiveNation Logo'} />
        <h2>The S&T Experience</h2>
        <p>
          Pre-sale ticket access, exclusive offers and rewards points -- for concerts, sports events
          and more.
          <br />
          Our partnership with LiveNation means you're a VIP.
        </p>
        <Button onClick={onOpenAccount} text={'Open an account'} />
      </div>
      <img src={'images/livenation-bg.png'} alt={'LiveNation'} className={'ln-bg'} />
    </div>
  );
};

export default LiveNation;
