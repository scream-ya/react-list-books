import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { IN_PROGRESS, DONE } from './constants';

const propTypes = {
  nextStatus: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

function NextStatusButton(props) {
  const { nextStatus, handleClick } = props;

  function buttonText() {
    switch (nextStatus) {
      case IN_PROGRESS: {
        return (<span>start reading &rarr;</span>);
      }

      case DONE: {
        return (<span>finish reading &rarr;</span>);
      }

      default: {
        return (<span>return in &laquo;to read&raquo; &larr;</span>);
      }
    }
  }

  return (
    <Button onClick={() => handleClick()}>
      <b><u>{buttonText()}</u></b>
    </Button>
  );
}

NextStatusButton.propTypes = propTypes;

export default NextStatusButton;
