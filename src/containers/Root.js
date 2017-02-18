import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allReducers from '../reducers';
import App from './App';

const store = createStore(allReducers);

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default Root
