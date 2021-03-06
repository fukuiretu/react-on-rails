import React, { Component } from 'react';
// import { render } from 'react-dom';
import { Provider } from 'react-redux';
import UserApp from './UserApp';
import configureStore from '../store/configureStore';
import { setUser } from '../actions/user';

const store = configureStore();

class Root extends Component {
  componentWillMount() {
    store.dispatch(setUser(this.props.user));
  }

  render() {
    return (
      <Provider store={store}>
        <UserApp />
      </Provider>
    );
  }
}
global.T = global.T || {};
global.T.Root = Root;
