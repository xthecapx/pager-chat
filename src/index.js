import React from 'react';
import ReactDOM from 'react-dom';

import App from './App/App';
import { UserProvider } from './App/Contexts/User';

import './styles.sass';

const AppProvider = (
  <UserProvider>
    <App />
  </UserProvider>
);

ReactDOM.render(AppProvider, document.getElementById('pager'));
