import React from 'react';
import './App.css';
import About from './components/About';
import Menu from './components/Menu';
import Nav from './components/Nav';
import Home from './components/Home';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Register from './components/Register';
import OrderSuccess from './components/OrderSuccess';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch> 
          <Route path="/" exact component={Welcome} />
          <Route path="/home" component={Home} /> 
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/menu" component={Menu} />
          <Route path="/ordersuccess" component={OrderSuccess} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
