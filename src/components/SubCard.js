import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      maxWidth: 345
    }
  }
}));

const SubCard = props => {
  const classes = useStyles();

  const { path, title } = props;

  const clickHandler = event => {
    event.preventDefault();
    props.history.push(`${path}`);
  };

  return (
    <div className={classes.root}>
      <Card onClick={clickHandler}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant='body2' component='p'>
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default withRouter(SubCard);
