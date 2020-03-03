import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import PrimaryCategory from '../components/PrimaryCategory';
import Breadcrumb from '../components/Breadcrumb';

import categories from '../constants/categories';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 0)
  }
}));

const Secondary = props => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Breadcrumb match={props.match} />
        </Grid>
        {categories
          .filter(cat => cat.id === props.match.params.primary)
          .map(cat => (
            <Grid key={cat.id} item xs={12}>
              <PrimaryCategory
                primary={cat.id}
                secondary={props.match.params.secondary}
                category={cat}
              />
            </Grid>
          ))}
      </Grid>

      {categories
        .filter(category => category.id !== props.match.params.primary)
        .map(cat => (
          <Grid key={cat.id} item xs={12}>
            <PrimaryCategory category={cat} />
          </Grid>
        ))}
    </Container>
  );
};

export default withRouter(Secondary);
