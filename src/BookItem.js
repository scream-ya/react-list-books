import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  Link,
  useLocation,
} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import NextStatusButton from './NextStatusButton';

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

  tags: {
    background: '#ddd',
    marginRight: '10px',
    height: '20px',
  },

  href: {
    textDecoration: 'none',
    color: 'black',
  },
}));

function BookItem(props) {
  const { book, nextStatus } = props;
  const changeStatus = useDispatch();
  const {
    author,
    title,
    description,
    tags,
  } = book;
  const classes = useStyles();
  const { pathname, search } = useLocation();
  const params = new URLSearchParams(search);
  const tagsSearch = params.get('tags') ? `${params.get('tags').split(',')},` : '';

  function handleClick() {
    changeStatus({ type: 'changeStatus', book, nextStatus });
  }

  return (
    <Grid
      container
      spacing={1}
      className={classes.container}
      classes={{
        'spacing-xs-1': classes.margin,
      }}
    >
      <Grid item xs={12}>
        <Box>{author}</Box>
      </Grid>
      <Grid item xs={6}>
        <Box><b>{title}</b></Box>
      </Grid>
      <Grid item xs={6}>
        <Box className={classes.boxRight}>
          <NextStatusButton nextStatus={nextStatus} handleClick={handleClick} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box>{description}</Box>
      </Grid>
      <Grid item xs={12}>
        {
          tags.map((tag) => (
            <Link to={`${pathname}?tags=${tagsSearch}${tag}`} className={classes.href}>
              <span className={classes.tags}>{`#${tag}`}</span>
            </Link>
          ))
        }
      </Grid>
    </Grid>
  );
}

BookItem.propTypes = propTypes;

export default BookItem;
