import React          from 'react';
import FacebookLogin  from '../containers/facebook_login';
import LocationFinder from '../containers/location_finder';
import Stats          from '../containers/stats';
import ReactSwipe     from 'react-swipe';
import Welcome        from './welcome';

const Home = (props) => {

  return (
    <div>
      <ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
        <div className="welcomebg">
          <Welcome />
        </div>

        <div>
          <LocationFinder />
        </div>
      </ReactSwipe>

      <Stats />
    </div>
  );
}

export default Home;
