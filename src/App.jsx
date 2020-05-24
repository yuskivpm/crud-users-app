import React from 'react';
import { Provider } from 'react-redux';
import getStore from './store/store';
import MainPage from './containers/MainPage';

const App = () => {
  const store = getStore();
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
};

export default App;
