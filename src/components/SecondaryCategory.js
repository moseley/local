import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import SubCard from './SubCard';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1, 0)
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(2, 0)
  }
}));

const SecondaryCategory = props => {
  const classes = useStyles();

  const { primary, category } = props;

  return (
    <div className={classes.root}>
      <Typography component='h2' variant='h5' color='textPrimary' gutterBottom>
        {category.title}
      </Typography>
      {category.tertiary.map(tertiaryCategory => (
        <div key={tertiaryCategory.id} className={classes.links}>
          <SubCard
            key={tertiaryCategory.id}
            path={`/${primary}/${category.id}/${tertiaryCategory.id}`}
            title={tertiaryCategory.title}
          />
        </div>
      ))}
    </div>
  );
};

export default SecondaryCategory;
