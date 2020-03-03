import React from 'react';
import Typography from '@material-ui/core/Typography';

const H1 = props => (
  <Typography
    component='h1'
    variant='h3'
    align='center'
    color='textPrimary'
    gutterBottom
  >
    {props.children}
  </Typography>
);

export default H1;
