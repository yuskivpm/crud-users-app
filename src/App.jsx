import React from 'react';
import { Provider } from 'react-redux';
import getStore from './store/store';
import MainPage from './components/MainPage';

export default () => (
  <Provider store={getStore()}>
    <MainPage />
  </Provider>
);
