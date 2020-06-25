import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import NextStateButton from './NextStateButton';

const propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  nextStatus: PropTypes.number.isRequired,
};

const useStyles = makeStyles(() => ({
  boxRight: {
    textAlign: 'right',
  },

  container: {
    border: '1px solid black',
    padding: '20px',
  },

  margin: {
    margin: '5px 0 10px 0',
  },
}));

function ItemBook(props) {
  const { book, nextStatus } = props;
  const changeStatus = useDispatch();
  const {
    author,
    title,
    description,
    tags,
  } = book;
  const classes = useStyles();

  function handleClick() {
    changeStatus({ type: 'changeStatus', book, nextStatus });
  }

  return (
    <Grid
      container
      spacing={2}
      xs={12}
      className={classes.container}
      classes={{
        'spacing-xs-2': classes.margin,
      }}
    >
      <Grid item xs={12} lg={12}>
        <Box>{author}</Box>
      </Grid>
      <Grid item xs={6} lg={6}>
        <Box><b>{title}</b></Box>
      </Grid>
      <Grid item xs={6} lg={6}>
        <Box className={classes.boxRight}>
          <NextStateButton nextStatus={nextStatus} handleClick={handleClick} />
        </Box>
      </Grid>
      <Grid item xs={12} lg={12}>
        <Box>{description}</Box>
      </Grid>
      <Grid item xs={12} lg={12}>
        {tags.map((tag) => <span>{`#${tag}`}</span>)}
      </Grid>
    </Grid>
  );
}

ItemBook.propTypes = propTypes;

export default ItemBook;
