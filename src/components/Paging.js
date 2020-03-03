import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import yelp from '../constants/yelp';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: theme.spacing(2, 0)
  }
}));

const Paging = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        key='backButton'
        onClick={props.onPrevious}
        disabled={props.page === 1 ? true : false}
      >
        <ArrowBackIosIcon /> Previous
      </Button>
      <Button
        key='nextButton'
        onClick={props.onNext}
        disabled={props.page * yelp.query.limit < props.total ? true : false}
      >
        Next <ArrowForwardIosIcon />
      </Button>
    </div>
  );
};

export default Paging;
