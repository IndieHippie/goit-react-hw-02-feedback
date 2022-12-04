import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOption = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(option => (
        <li key={option}>
          <button type="button" onClick={() => onLeaveFeedback(option)}>{option}</button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOption;

FeedbackOption.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
