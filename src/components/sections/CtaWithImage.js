import React from 'react';
import Button, { BUTTON_TYPES } from '../buttons/Button';
import './CtaWithImage.scss';

const CtaWithImage = () => {
  const onPrimaryCta = () => {};

  return (
    <div className={'cta-container'}>
      <div className={'cta-image-container'}>
        <img src={'images/macdemo.png'} alt={'CTA'} />
      </div>
      <div className={'cta-content'}>
        <h4 className={'super'}>Description</h4>
        <h3>H3 Section Title</h3>
        <p>
          At vero eos et accusamus et iusto odio dignis simos ducimus qui blanditiis praesentium.
        </p>

        <ul>
          <li>Pardon, monseiur. Je comprends l'anglais.</li>
          <li>Je ne comprends pas l'anglais.</li>
          <li>Est-ce que vous comprs?</li>
          <li>Est-ce que vous comprs?</li>
        </ul>

        <div className={'btn-container'}>
          <Button onClick={onPrimaryCta} text={'Primary Cta'} type={BUTTON_TYPES.PRIMARY} />
          <Button onClick={onPrimaryCta} text={'Open an account'} type={BUTTON_TYPES.SECONDARY} />
        </div>
      </div>
    </div>
  );
};

export default CtaWithImage;
