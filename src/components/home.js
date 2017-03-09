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
      <div>
        {/* <div className="swipe-buttons">
          <button className="swipe" onClick={::this.prev.bind(this)}><i className="fa fa-angle-left" aria-hidden="true"></i></button>
          <button className="swipe" onClick={::this.next.bind(this)}><i className="fa fa-angle-right" aria-hidden="true"></i></button>
        </div> */}
        {/* <ReactSwipe ref="reactSwipe" className="carousel" swipeOptions={{continuous: false, auto: 5000}}> */}
          {/* <div className="welcomebg"> */}
            {/* <Welcome /> */}
          {/* </div> */}

          {/* <div> */}
            <LocationFinder />
          {/* </div> */}
        {/* </ReactSwipe> */}

        <Stats />
      </div>
    );
  }
}

export default Home;
