import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Users from './component/users/Users';
import React, { Fragment } from 'react';
import Search from './component/layout/Search';
import { useState } from 'react';
import Alert from './component/layout/Alert';
import GithubState from './context/github/GithubState';
import User from './component/users/User';
import AlertState from './context/alert/AlertState';
const App = () => {
  const [alert, setAlert] = useState(null);

  return (
    <GithubState>
      <AlertState>
        <Router>
          {' '}
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert />
              <Switch>
                <Route
                  exact
                  path='/'
                  render={(props) => (
                    <Fragment>
                      <Search />
                      <Users />
                    </Fragment>
                  )}
                />
                <Route exact path='/user/:login' component={User} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};
export default App;
