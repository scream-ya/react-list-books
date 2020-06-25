import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const propTypes = {
  nextStatus: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

function NextStateButton(props) {
  const { nextStatus, handleClick } = props;
  let buttonName = '';

  switch (nextStatus) {
    case 1: {
      buttonName = (<span>start reading &rarr;</span>);
      break;
    }

    case 2: {
      buttonName = (<span>finish reading &rarr;</span>);
      break;
    }

    default: {
      buttonName = (<span>return in &laquo;to read&raquo; &larr;</span>);
    }
  }

  return (
    <Button onClick={() => handleClick()}>
      <b><u>{buttonName}</u></b>
    </Button>
  );
}

NextStateButton.propTypes = propTypes;

export default NextStateButton;
