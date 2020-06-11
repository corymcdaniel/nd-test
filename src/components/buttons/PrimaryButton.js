import React from 'react';
import PropTypes from 'prop-types';
import './PrimaryButton.scss';

const PrimaryButton = ({ onClick, text }) => {
  return (
    <button className={'primary-btn'} onClick={onClick}>
      {text}
    </button>
  );
};

PrimaryButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default PrimaryButton;
