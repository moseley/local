import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
// import Typography from '@material-ui/core/Typography';

import logo from '../logo.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  bar: {
    paddingTop: '10px',
    paddingBottom: '10px'
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  logo: {
    maxHeight: '100px'
  },
  linkContainer: {
    // display: 'flex',
    // flexDirection: 'row',
    // flexWrap: 'nowrap',
    // justifyContent: 'flex-end'
  },
  link: {
    color: 'white',
    marginRight: theme.spacing(2)
  },
  activeLink: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  }
}));

const Header = props => {
  const classes = useStyles();

  const subdirectory = process.env.NODE_ENV === 'development' ? '' : '/local';

  return (
    <div className={classes.root}>
      <AppBar position='static' color='secondary' className={classes.bar}>
        <Toolbar className={classes.toolbar}>
          {/* <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton> */}
          <img src={logo} className={classes.logo} alt='Logo' />
          <div className={classes.linkContainer}>
            <Link
              href='https://wealthwisdomwellness.us/'
              className={classes.link}
            >
              Home
            </Link>
            <Link
              href='https://wealthwisdomwellness.us/about'
              className={classes.link}
            >
              About
            </Link>
            <Link
              href='https://wealthwisdomwellness.us/wealth-summit'
              className={classes.link}
            >
              Wealth Summit
            </Link>
            <Link
              href='https://wealthwisdomwellness.us/advertisers'
              className={classes.link}
            >
              Advertisers
            </Link>
            <Link
              component={RouterLink}
              to={`${subdirectory}/`}
              className={classes.activeLink}
            >
              Directory
            </Link>
            <Link
              href='https://wealthwisdomwellness.us/contact'
              className={classes.link}
            >
              Contact
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
