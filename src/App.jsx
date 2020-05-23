import React from 'react';
import { Provider } from 'react-redux';
import getStore from './store/store';

export default () => <Provider store={getStore()}>app</Provider>;
