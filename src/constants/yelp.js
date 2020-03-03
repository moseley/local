const yelp = {
  title: 'Local Businesses',
  url: 'https://api.yelp.com/v3/businesses/search',
  proxy: 'https://cors-anywhere.herokuapp.com/',
  query: {
    location: 'Santa Clarita, CA',
    categories: '',
    locale: 'en_US',
    limit: 20,
    offset: 0,
    sort_by: 'best_match'
  }
};

export default yelp;
