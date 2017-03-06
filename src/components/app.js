import React, { Component } from 'react';
import NavBar               from './navbar';
import FacebookLogin        from '../containers/facebook_login';
import LocationFinder       from '../containers/location_finder';

const App = (props) => {
  return (
    <div>
      <NavBar />
      {/* <FacebookLogin /> */}
      <div className="app">
        {props.children}
      </div>
    </div>
  );
}

export default App;
