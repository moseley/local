import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import SecondaryCategory from '../components/SecondaryCategory';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1, 0)
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    margin: 0
  }
}));

const PrimaryCategory = props => {
  const classes = useStyles();

  let matched = [];
  let unmatched = props.category.secondary;

  if (props.secondary) {
    matched = props.category.secondary.filter(
      cat => cat.id === props.secondary
    );
    unmatched = props.category.secondary.filter(
      cat => cat.id !== props.secondary
    );
  }

  return (
    <div className={classes.root}>
      <Typography
        component='h1'
        variant='h3'
        align='center'
        color='textPrimary'
        gutterBottom
      >
        {props.category.title}
      </Typography>
      <div className={classes.section}>
        {matched.map(cat => (
          <SecondaryCategory
            key={cat.id}
            primary={props.category.id}
            category={cat}
          />
        ))}
        {unmatched.map(cat => (
          <SecondaryCategory
            key={cat.id}
            primary={props.category.id}
            category={cat}
          />
        ))}
      </div>
    </div>
  );
};

export default PrimaryCategory;
