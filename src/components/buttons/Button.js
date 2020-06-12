import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export const BUTTON_TYPES = {
  PRIMARY: 'primary-btn',
  SECONDARY: 'secondary-btn',
};

const Button = ({ onClick, text, type = BUTTON_TYPES.PRIMARY }) => {
  return (
    <button className={`button ${type}`} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf([BUTTON_TYPES.PRIMARY, BUTTON_TYPES.SECONDARY]),
};

export default Button;
