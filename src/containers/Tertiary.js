import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Sidebar from '../components/Sidebar';
import Businesses from '../components/Businesses';
import Breadcrumb from '../components/Breadcrumb';

import categories from '../constants/categories';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2, 0),
    display: 'flex',
    flexDirection: 'row-reverse'
  },
  body: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-start'
  }
}));

const Tertiary = props => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      {categories
        .filter(cat => cat.id === props.match.params.primary)
        .map(({ id: primaryId, title: primaryTitle, secondary }) => (
          <div key={primaryId}>
            {secondary
              .filter(cat => cat.id === props.match.params.secondary)
              .map(({ id: secondaryId, title: secondaryTitle, tertiary }) => (
                <div key={secondaryId}>
                  {tertiary
                    .filter(cat => cat.id === props.match.params.tertiary)
                    .map(({ id: tertiaryId, title: tertiaryTitle, yelp }) => (
                      <div key={tertiaryId}>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <Breadcrumb match={props.match} />
                          </Grid>
                          <Grid
                            container
                            direction='row-reverse'
                            justify='space-between'
                            alignItems='stretch'
                          >
                            <Grid item xs={10}>
                              <Businesses categories={yelp} />
                            </Grid>
                            <Grid item xs={2}>
                              <Sidebar
                                primary={props.match.params.primary}
                                secondary={props.match.params.secondary}
                                tertiary={props.match.params.tertiary}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </div>
                    ))}
                </div>
              ))}
          </div>
        ))}
    </Container>
  );
};

export default Tertiary;
