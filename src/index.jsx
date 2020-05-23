import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import App from './App';

const AppWithHot = hot(App);
const rootNode = document.getElementById('root');

ReactDOM.render(<AppWithHot />, rootNode);
