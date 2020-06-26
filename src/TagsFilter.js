import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
  useLocation,
} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const useStyles = makeStyles(() => ({
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
    marginLeft: '10px',
    height: '20px',
  },

  href: {
    color: 'black',
  },
}));

function TagsFilter(props) {
  const { tags } = props;
  const { pathname } = useLocation();
  const classes = useStyles();

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
        <b>Filtered by tags:</b>
        {tags.map((tag) => (<span className={classes.tags}>{`#${tag}`}</span>))}
        <b>
          <Link to={pathname} className={classes.href}>clear</Link>
        </b>
      </Grid>
    </Grid>
  );
}

TagsFilter.propTypes = propTypes;

export default TagsFilter;
