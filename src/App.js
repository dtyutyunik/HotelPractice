import React from 'react';
// import logo from './logo.svg';
import Error from './components/Error';
import Home from './components/Home';
import Rooms from './components/Rooms';
import SingleRoom from './components/SingleRoom';
import Navbar from './components/Navbar';
import FeaturedRoom from './components/FeaturedRoom';
import './App.css';
import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom';
import {RoomProvider} from './Context';


function App(props) {
  return (
    <RoomProvider>
      <Router>
        <Navbar/>
          <Switch>
            <Route exact path="/Home"
              component={Home}
              />
            <Route exact path="/Rooms"
              component={Rooms}
              />
            <Route exact path="/singleRoom/:slug"
              component={SingleRoom}
              />
            <Route component={Error}/>
          </Switch>
      </Router>
  </RoomProvider>

  );
}

export default App;
