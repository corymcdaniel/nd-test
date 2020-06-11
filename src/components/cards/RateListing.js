import React from 'react';
import PropTypes from 'prop-types';
import rates from '../../data/rates.json';
import RateCard from './RateCard';
import './RateListing.scss';

const RateListing = (props) => {
  const list = rates.map((rate, i) => {
    return (
      <li key={i}>
        <RateCard
          type={rate.type}
          length={rate.length}
          apr={rate.apr}
          url={rate.url}
          details={rate.details}
        />
      </li>
    );
  });

  return <ul className={'list'}>{list}</ul>;
};

RateListing.propTypes = {
  // myProp: PropTypes.string.isRequired
};

export default RateListing;
