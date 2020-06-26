import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    border: '1px solid black',
    padding: '20px',
    textAlign: 'center',
  },

  margin: {
    margin: '5px 0 10px 0',
  },
}));

function EmptyList() {
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
        <b>List is empty</b>
      </Grid>
    </Grid>
  );
}

export default EmptyList;
