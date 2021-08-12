import React from 'react';
import Home  from './pages/home'
import Login  from './pages/login'
import Message from './pages/message'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
            <Link to ='/'></Link>
        <Link to='/login'></Link>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/message'>
          <Message />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
