import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { UserNameFormik } from './Components/UserNameForm';
import { Chat } from './Components/Chat'

import styles from './app.module.sass';

const App = () => {
  return (
    <Router>
      <div className={styles.app}>
        <Switch>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/">
            <UserNameFormik />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
