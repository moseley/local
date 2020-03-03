import React from 'react';
import Typography from '@material-ui/core/Typography';

const H3 = props => (
  <Typography component='h3' variant='h5' color='textPrimary' gutterBottom>
    {props.children}
  </Typography>
);

export default H3;
