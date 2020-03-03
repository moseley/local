// import React, { useState, useEffect } from 'react';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import HomeCard from '../components/HomeCard';
import categories from '../constants/categories';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  section: {
    margin: theme.spacing(2, 0)
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(1, 0)
    }
  }
}));

const Home = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {categories.map(primaryCategory => (
        <div key={primaryCategory.id} className={classes.section}>
          <Typography
            component='h1'
            variant='h4'
            align='center'
            color='textPrimary'
            gutterBottom
          >
            {primaryCategory.title}
          </Typography>
          <div className={classes.cardsContainer}>
            {primaryCategory.secondary.map(secondaryCategory => (
              <HomeCard
                key={secondaryCategory.id}
                path={`/${primaryCategory.id}/${secondaryCategory.id}`}
                title={secondaryCategory.title}
                image={secondaryCategory.image}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
