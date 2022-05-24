import React from 'react';
import AnimatedNumber from 'react-animated-number';
import PropTypes from 'prop-types';

const NumbersAnimate = ({ value }) => (
  <AnimatedNumber
    duration={600}
    value={value}
    stepPrecision={2}
  />
);

NumbersAnimate.propTypes = {
  value: PropTypes.number,
};

NumbersAnimate.defaultProps = {
  value: 0,
};

export default NumbersAnimate;
