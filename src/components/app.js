import React, { Component } from 'react';
import NavBar               from './navbar';
import FacebookLogin        from '../containers/facebook_login';
import LocationFinder       from '../containers/location_finder';

const App = (props) => {
  return (
    <div>
      {/* <FacebookLogin /> */}
      <div className="app">
        <NavBar />  
        {props.children}
      </div>
    </div>
  );
}

export default App;
