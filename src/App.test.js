import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import { render } from '@testing-library/react';

import App from './App';
import Header from './components/Header';

configure({ adapter: new Adapter() });

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

  // it('contains <Header />', () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find(Header)).toHaveLength(1);
  // });

  // it('contains <Switch />', () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find(Switch)).toHaveLength(1);
  // });
});
