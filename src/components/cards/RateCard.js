import React from 'react';
import PropTypes from 'prop-types';
import './RateCard.scss';
import Button from '../buttons/Button';

const RateCard = (props) => {
  const onDetails = () => {};
  const onOpenAccount = () => {
    window.location = props.url;
  };

  return (
    <div className={'rate-container'}>
      <div className={'rate-info'}>
        <h4 className={'super'}>{props.type}</h4>
        <h3 className={'length'}>{props.length}</h3>
        <p className={'apr'}>APR: {props.apr}</p>
        <Button onClick={onOpenAccount} text={'Open an account'} />
      </div>
      <div className={'details'}>
        <span>Details</span>
        <div className={'plus'} onClick={onDetails} />
      </div>
    </div>
  );
};

RateCard.propTypes = {
  type: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
  apr: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};

export default RateCard;
