import React          from 'react';
import ReactDOM from 'react-dom'
import FacebookLogin  from '../containers/facebook_login';
import LocationFinder from '../containers/location_finder';
import Stats          from '../containers/stats';
import ReactSwipe     from 'react-swipe';
import Welcome        from './welcome';

class Home extends React.Component {

  next() {
    this.refs.reactSwipe.next();
  }

  prev() {
    this.refs.reactSwipe.prev();
  }

  render() {
    return (
        <div key="10">
          <LocationFinder />
          <Stats />
        </div>
    );
  }
}

export default Home;
