import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './index.scss';

import App from './App';

const AppWithHot = hot(App);
const rootNode = document.getElementById('root');

ReactDOM.render(<AppWithHot />, rootNode);
