import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';

window.addEventListener('load', () => {
  ReactDOM.hydrate((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('root'));
});

