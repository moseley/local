import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Header from './components/Header';
import Home from './containers/Home';
import Primary from './containers/Primary';
import Secondary from './containers/Secondary';
import Tertiary from './containers/Tertiary';
import NotFound from './containers/NotFound';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <main>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/:primary/:secondary/:tertiary' component={Tertiary} />
          <Route path='/:primary/:secondary' component={Secondary} />
          <Route path='/:primary' component={Primary} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
};

export default withRouter(App);
