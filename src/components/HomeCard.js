import React from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      width: 345
    }
  },
  media: {
    height: 140
  }
}));

const HomeCard = props => {
  const classes = useStyles();

  const { path, title, image } = props;

  const clickHandler = event => {
    event.preventDefault();
    props.history.push(`${path}`);
  };

  return (
    <div className={classes.root}>
      <Card onClick={clickHandler}>
        <CardActionArea>
          {image && (
            <CardMedia
              className={classes.media}
              image={require(`../media/categories/${image}`)}
              title={title}
            />
          )}
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default withRouter(HomeCard);
