import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

describe('<App />', () => {
  it("doesn't crash", () => {
    const wrapper = document.createElement('div');
    ReactDOM.render(
      <Router>
        <App />
      </Router>,
      wrapper
    );
    ReactDOM.unmountComponentAtNode(wrapper);
  });
});
