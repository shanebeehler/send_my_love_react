import React          from 'react';
import FacebookLogin  from '../containers/facebook_login';
import LocationFinder from '../containers/location_finder';
import FormContainer  from '../containers/form_container';
import Stats          from '../containers/stats';

const Home = (props) => {

  return (
    <div>
      <LocationFinder />
      <Stats />
    </div>
  );
}

export default Home;
