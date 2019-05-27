import React from 'react';
// import logo from './logo.svg';
import Error from './components/Error';
import Home from './components/Home';
import Rooms from './components/Rooms';
import SingleRoom from './components/SingleRoom';
import Navbar from './components/Navbar';
import './App.css';
import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom';


function App(props) {
  return (

  <Router>
    <Navbar/>
      <Switch>
        <Route exact path="/Home"
          component={Home}
          />
        <Route exact path="/Rooms"
          component={Rooms}
          />
        <Route exact path="/SingleRoom/:room"
          component={SingleRoom}
          />
        <Route component={Error}/>
      </Switch>

  </Router>

  );
}

export default App;
