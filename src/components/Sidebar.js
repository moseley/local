import React from 'react';
import { makeStyles } from '@material-ui/core';

import SubCard from './SubCard';
import H3 from './H3';

import categories from '../constants/categories';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1, 0),
    width: '100%'
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(1, 0)
    }
  }
}));
const Sidebar = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {categories
        .filter(cat => cat.id === props.primary)
        .map(first => {
          return first.secondary
            .filter(cat => cat.id === props.secondary)
            .map(second => {
              return (
                <div key={second.id}>
                  <H3>{second.title}</H3>
                  <div className={classes.links}>
                    {second.tertiary.map(third => (
                      <SubCard
                        key={third.id}
                        path={`/${props.primary}/${props.secondary}/${third.id}`}
                        title={third.title}
                      />
                    ))}
                  </div>
                </div>
              );
            });
        })}
    </div>
  );
};

export default Sidebar;
