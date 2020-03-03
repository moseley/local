import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import PrimaryCategory from '../components/PrimaryCategory';
import categories from '../constants/categories';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(4, 0, 2)
  }
}));

const Primary = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {categories
        .filter(cat => cat.id === props.match.params.primary)
        .map(cat => (
          <PrimaryCategory key={cat.id} primary={cat.id} category={cat} />
        ))}
      {categories
        .filter(category => category.id !== props.match.params.primary)
        .map(cat => (
          <PrimaryCategory key={cat.id} category={cat} />
        ))}
    </div>
  );
};

export default withRouter(Primary);
