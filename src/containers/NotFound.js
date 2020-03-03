import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(4, 0)
  }
}));

const NotFound = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography>The page you are looking for was not found.</Typography>
    </div>
  );
};

export default NotFound;
