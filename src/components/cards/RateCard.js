import React from 'react';
import PropTypes from 'prop-types';
import './RateCard.scss';

const RateCard = (props) => {
  const onDetails = () => {};

  return (
    <div className={'rate-container'}>
      <div className={'rate-info'}>
        <h4 className={'super'}>{props.type}</h4>
        <h3 className={'length'}>{props.length}</h3>
        <p className={'apr'}>APR: {props.apr}</p>
      </div>
      <div className={'details'}>
        <span>Details</span>
        <span>
          <a onClick={onDetails}>+</a>
        </span>
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
