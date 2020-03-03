import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import Business from './Business';
import Paging from './Paging';

import yelp from '../constants/yelp';

const useStyles = makeStyles(theme => ({
  root: {},
  businesses: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  paging: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: theme.spacing(2, 0)
  }
}));

const Businesses = props => {
  const classes = useStyles();

  const { categories } = props;

  const [isLoading, setIsLoading] = useState(true);
  const [listings, setListings] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [error, setError] = useState({});

  useEffect(() => {
    const getListings = async () => {
      //const proxy = `${Settings.corsUrl}${Settings.yelpSearchUrl}`;
      let yelpUrl = yelp.url;
      if (process.env.NODE_ENV === 'development') {
        yelpUrl = `${yelp.proxy}${yelp.url}`;
      }

      const params = {
        ...yelp.query,
        categories: categories.join(','),
        offset: (page - 1) * yelp.query.limit
      };
      await axios
        .get(yelpUrl, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': `${process.env.PUBLIC_URL}`,
            Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
          },
          params: params
        })
        .then(res => {
          setTotal(res.data.total);
          setListings(res.data.businesses);
          setIsLoading(false);
        })
        .catch(err => {
          setError(err);
        });
    };
    if (categories) {
      getListings();
    }
  }, [categories, page]);

  const previousPageHandler = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPageHandler = () => {
    if (page * yelp.query.limit + yelp.query.limit < total) {
      setPage(page + 1);
    }
  };

  return (
    <div className={classes.root}>
      {error && <p>{error.message}</p>}
      {isLoading && <CircularProgress />}
      <div className={classes.businesses}>
        {listings.map(biz => (
          <Business key={biz.id} data={biz} />
        ))}
        <Paging
          onPrevious={previousPageHandler}
          onNext={nextPageHandler}
          page={page}
          total={total}
        />
      </div>
    </div>
  );
};

export default Businesses;
