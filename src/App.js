import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Header from './components/Header';
import Home from './containers/Home';
import Primary from './containers/Primary';
import Secondary from './containers/Secondary';
import Tertiary from './containers/Tertiary';
import NotFound from './containers/NotFound';

const App = () => {
  // let subdirectory = '';
  console.log(process.env.NODE_ENV);
  const parts = process.env.PUBLIC_URL.split('/');
  console.log(parts);

  const subdirectory = process.env.NODE_ENV === 'development' ? '' : '/local';

  return (
    <div className='App'>
      <Header />
      <main>
        <Switch>
          <Route path={`${subdirectory}/`} exact component={Home} />
          <Route
            path={`${subdirectory}/:primary/:secondary/:tertiary`}
            component={Tertiary}
          />
          <Route
            path={`${subdirectory}/:primary/:secondar`}
            component={Secondary}
          />
          <Route path={`${subdirectory}/:primary`} component={Primary} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
};

export default withRouter(App);
